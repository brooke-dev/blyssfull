import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI);

export default NextAuth({
  adapter: MongoDBAdapter(clientPromise),
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
    verifyRequest: "/auth/verifyrequest",
    newUser: "/auth/newUser", // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  providers: [
    // GithubProvider({
    //   clientId: process.env.GITHUB_ID,
    //   clientSecret: process.env.GITHUB_SECRET,
    // }),
    EmailProvider({
      server: process.env.EMAIL_SERVER,
      from: process.env.EMAIL_FROM,
      // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    }),
  ],
  callbacks: {
    async session({ session, user, account, token }) {
      console.log(user);
      let User = mongoose.connection.db
        .collection("users")
        .findOne({ _id: user.id }, (err, user) => {
          if (err) {
            console.log(err);
            return;
          }
          console.log("found someone ayoooo");
        });

      if (User?.newUser) {
        console.log("logging user >>>>>" + User);
      } else {
        await mongoose.connection.db
          .collection("users")
          .updateOne({ id: User.id }, { $set: { newUser: true } });
      }
      session.status = user.status;
      session.newUser = user.newUser;
      return session;
    },
  },
});
