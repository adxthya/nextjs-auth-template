import { NextAuthOptions } from "next-auth";

//Providers
import GoogleProvider from "next-auth/providers/google";

//Adapter
import { Adapter } from "next-auth/adapters";
import { MongoDBAdapter } from "@auth/mongodb-adapter";

//db init
import clientPromise from "./db";

export const authOptions = {
  adapter: MongoDBAdapter(clientPromise, {
    collections: {
      Accounts: "accounts",
      Sessions: "sessions",
      Users: "users",
      VerificationTokens: "verificationTokens",
    },
    databaseName: process.env.DB_NAME,
  }) as Adapter,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
} satisfies NextAuthOptions;
