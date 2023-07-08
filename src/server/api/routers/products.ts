import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const productsRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.product.findMany();
  }),
  get: publicProcedure
    .input(z.object({ memberId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.member
        .findUnique({
          where: {
            id: input.memberId,
          },
        })
        .products();
    }),
});