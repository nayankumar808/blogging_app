import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import {sign } from "hono/jwt";

export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

userRouter.post("/signup", async (c) => {
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
      const token =  await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({
        jwt: token,
      });
    } catch (e) {
      console.log(e)
      c.status(403);
      return c.json({ error: "Error while signing up" });
    }
  });
  
  userRouter.post("/signin", async (c) => {
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
      const token =  await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt: token });
    } catch {
      c.status(403);
      return c.json({ error: "ivalid Credentials" });
    }
  });
