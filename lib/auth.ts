// @ts-nocheck
import { AuthOptions } from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

export const authOptions: AuthOptions = {
  providers: [
    SpotifyProvider({
      clientId: process.env.CLIENT_ID as string,
      clientSecret: process.env.CLIENT_SECRET as string,
      authorization: {
        params: {
          scope: "user-read-email user-top-read",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 57 * 60, // 1 hour
  },
  jwt: {
    maxAge: 45 * 60 * 1, // 1 hour
  },
  callbacks: {
    async jwt({ profile, token, account }) {
      if (account && profile) {
        token = {
          access: account.access_token,
          ...profile,
        };
      }

      return token;
    },

    async session({ session, token }) {
      session = {
        ...token,
      };
      return session;
    },
  },
};
