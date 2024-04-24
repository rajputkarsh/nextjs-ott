import NextAuth, {NextAuthOptions} from "next-auth";
import GoogleProvider from "next-auth/providers/Google";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    async session({session, token}: any) {
      session.user.username = session?.user?.name.split(" ").join("").toLowerCase();
      session.user.uid = token.sub;
      return session
    }
  },
  secret: process.env.SECRET_KEY,
}

const handler = NextAuth(authOptions);
export {handler as GET, handler as POST};
