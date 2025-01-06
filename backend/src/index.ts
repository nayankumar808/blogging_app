import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, jwt, sign, verify } from "hono/jwt";
import { env } from "hono/adapter";

const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

app.post("/api/v1/signup", async (c) => {
  const Prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();

  try {
    const user = await Prisma.user.create({
      data: {
        email: body.email,
        password: body.password,
        name: body.name,
      },
    });
    const token = sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
    });
  } catch (e) {
    c.status(403);
    return c.json({ error: "Error while siginig up" });
  }
});

app.post("/api/v1/signin", async (c) => {
  const Prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const body = await c.req.json();

    const user = await Prisma.user.findUnique({
      where: {
        email: body.email,
        password:body.password,
      },
    });
    if (!user) {
      c.status(403);
      return c.json({ error: "ivalid Credentials" });
    }
    const token = sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({ jwt: token });
  } catch {
    c.status(503);
    return c.json({ error: "ivalid Credentials" });
  }
});

app.put("/api/v1/blog", (c) => {
  return c.text("Hello Hono!");
});

app.get("/api/v1/blog/:id", (c) => {
  return c.text("Hello Hono!");
});

export default app;
