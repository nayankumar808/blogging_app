import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { jwt, sign,verify } from "hono/jwt";
import { Types } from "@prisma/client/runtime/library";
import { createBlogInput, updateBlogInput } from "@nayankumar808/medium-common2";
export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  },
  Variables:{
    userId:any
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
  const { success } = createBlogInput.safeParse(body);
  if (!success) {
      c.status(411);
      return c.json({
          message: "Inputs not correct"
      })
  }
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
  const { success } = updateBlogInput.safeParse(body);
  if (!success) {
      c.status(411);
      return c.json({
          message: "Inputs not correct"
      })
  }


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
  
    try {
      const posts = await Prisma.post.findMany({
        select:{
          content:true,
          id:true,
          title:true,
          author:{
            select:{
              name:true
            }
          }
        }
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
      },select:{
        id:true,
        content:true,
        title:true,
        author:{
          select:{
            name:true
          }
        }
      }
    });
    return c.json({
        post
    })
  } catch (e) {
    c.status(403);
    return c.json({ message: "Failed to get post" });
  }
});


