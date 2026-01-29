import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';
import connectDB from './lib/db';
import User from './lib/models/user.model';

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        await connectDB();
        if (!credentials) return null;

        const user = await User.findOne({ email: credentials.email });

        if (user && bcrypt.compareSync(credentials.password as string, user.password)) {
          return {
            id: user._id.toString(),
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
          };
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.isAdmin = user.isAdmin;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (session.user) {
        session.user.isAdmin = token.isAdmin;
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
});
