import { clerkClient } from "@clerk/nextjs/server";
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const sellersRouter = createTRPCRouter({
  list: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.member.findMany({
      where: {
        products: {
          some: {}
        }
      }
    });
  }),
  get: publicProcedure
    .input(z.object({ memberId: z.string() }))
    .query(({ ctx, input }) => {
      return ctx.prisma.member.findUnique({
        where: {
          id: input.memberId,
        },
      });
    }),
    createUser: protectedProcedure
    .input(z.object({ sessionId: z.string(), sessionToken: z.string(), additionalField: z.string() })) // Adjust the schema for input as per your requirements
    .mutation(async ({ ctx, input }) => {
      // Get the user's data from Clerk using the provided sessionId
      const session = await clerkClient.sessions.verifySession(input.sessionId, input.sessionToken);
      const clerkUser = await clerkClient.users.getUser(session.userId);
  
      // Create a new user in the database
      const user = await ctx.prisma.member.create({
        data: {
          clerkUserId: clerkUser.id, // Store the Clerk user ID in the database
          additionalField: input.additionalField,
          // Add other fields from the input data as needed
        },
      });
  
      return user;
    }),
});