import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { jwt, sign,verify } from "hono/jwt";
import { Types } from "@prisma/client/runtime/library";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables:{
    userId:string
  }
}>();
blogRouter.use("/*",async (c, next) => {
    const authHeader =  c.req.header("Authorization") || "";
    const user =  await verify(authHeader,c.env.JWT_SECRET)
    if(user){
        c.set("userId",user.id);

        await next();
    }
    else{
        c.status(401)
        return c.json({"message":"Unauthorized"})
    }
});

blogRouter.post("/", async (c) => {
  const Prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  const authorId=c.get("userId")

  try {
    const post = await Prisma.post.create({
      data: {
        content: body.content,
        title: body.title,
        authorId: authorId,
      },
    });
    return c.json({
      id: post.id,
    });
  } catch (e) {
    console.log(e);
    c.status(403);
    return c.json({ message: "Failed to create post" });
  }
});

blogRouter.put("/", async (c) => {
  const Prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const post = await Prisma.post.update({
      where: {
        id: body.id,
        authorId: body.authorId,
      },
      data: {
        content: body.content,
        title: body.title,
        authorId: body.autthorId,
      },
    });
    return c.text("Updated the post");
  } catch (e) {
    c.status(403);
    return c.json({ message: "Failed to update post" });
  }
});


blogRouter.get("/bulk", async (c) => {
    const Prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const id =  c.req.param("id")
  
    try {
      const posts = await Prisma.post.findMany({
      });
      return c.json({
          posts
      })
    } catch (e) {
      c.status(403);
      return c.json({ message: "Failed to get  all the posts" });
    }
  });



blogRouter.get("/:id", async (c) => {
  const Prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const id =  c.req.param("id")

  try {
    const post = await Prisma.post.findUnique({
      where: {
        id: id,
      },
    });
    return c.json({
        post
    })
  } catch (e) {
    c.status(403);
    return c.json({ message: "Failed to get post" });
  }
});


