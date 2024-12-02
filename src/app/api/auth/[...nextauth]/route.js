// app/api/auth/[...nextauth]/route.js
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId:
        "39459848724-vv4v9tmmm1ofcfd0q53qnr0rlo7mirbs.apps.googleusercontent.com",
      clientSecret: "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",
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          scope: "openid email profile",
        },
      },
    }),
  ],
  secret: "c5c963a3-5529-4025-9931-4002cbccb517",
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60,
  },
  callbacks: {
    async jwt({ token, account }) {
      // Store the id_token in the token right after signin
      if (account?.id_token) {
        token.id_token = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client
      session.id_token = token.id_token;
      return session;
    },
  },
  debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
