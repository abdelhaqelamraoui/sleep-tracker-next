import { currentUser } from "@clerk/nextjs/dist/types/server";
import { db } from "./db";


export const checkUser = async () => {
   //
   const user = currentUser();

   if (!user) {
      return null;
   }

   // check if the user is already in the database
   const loggedInUser = await db.user.findUnique({
      where: { clerkUserId: user.id },
   });

   if (loggedInUser) {
      return loggedInUser;
   }

   // create it if not exists
   const newUser = await db.user.create({
      data: {
         clerkUserId: user.id,
         imageUrl: user.imageUrl,
         email: (await user).emailAddresses[0].emailAddress,
      },
   });

   return newUser;
};
