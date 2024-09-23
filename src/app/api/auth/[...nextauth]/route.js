import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { signIn } from "next-auth/react";
import bcrypt from "bcrypt";

import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { connectDB } from "@/lib/connectDB";

export const authOptions = {
    
    // secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,   // 366 day er jono cookies thakbe,, seita fixed kora hoi.
    },
    providers: [
        // email password dia signIn korar way
        CredentialsProvider({
            credentials: {
                email: {},
                password: {}
            },
            async authorize(credentials) {
                console.log("credentials", credentials)

                const { email, password } = credentials;
                if (!email || !password) {
                    console.log('Email or password nei')
                    return null;
                }

                const db = await connectDB()
                const currentUser = await db.collection('users').findOne({ email })
                console.log('currentUser ase', currentUser)
                if (!currentUser) {
                    console.log('currentUser nei')
                    return null;
                }

                //    const passwordMatched = bcrypt.compareSync(password, password);  // aita kaj hossena keno jani.
                const passwordMatched = currentUser.password == password
                console.log('hased password', passwordMatched)
                if (!passwordMatched) {
                    return null;
                }

                return currentUser;
            },
        }),
        // google dia sign In korar provider
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET
        }),
        // Facebook dia sign In korar provider
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET
        })

    ],

    callbacks: {
        async signIn({ user, account }) {

            if (account.provider === 'google' || account.provider === 'facebook') {
                const { name, email, image } = user;
                console.log("call back er moddhe dhukisa and provider is ", account.provider)
                console.log("call back er moddhe dhukisa and user is ", user)
                try {
                    const db = await connectDB()
                    // const userCollection = db.collection('users')

                    const userExist = await db.collection('users').findOne({ email });
                    if (!userExist) {
                        console.log("call back er moddhe dhukisa and User Exist", userExist)
                        const res = await db.collection('users').insertOne(user);
                        return user;
                    }
                    console.log("call back er moddhe dhukisa and User Exist", userExist)
                    return user;
                } catch (error) {
                    console.log("call back er moddhe dhukisa but kono error a catch er moddhe")
                    console.log(error)
                }
            }
            else {
                return user;
            }
        }
    },
    pages: {
        signIn: '/login'
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
