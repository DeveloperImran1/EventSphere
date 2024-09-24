import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { connectDB } from "@/lib/connectDB";

// import FormData from "form-data";
// import Mailgun from "mailgun.js";
// import mailgun from 'mailgun-js'; 
// import Mailgun from "mailgun.js";
// import formData from "form-data";

// const mg = new Mailgun(formData).client({
//     username: 'api',
//     key: process.env.NEXT_PUBLIC_MAILGUN_API_KEY
// })
export const authOptions = {
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days session
    },
    providers: [
        // Email/password login with credentials
        CredentialsProvider({
            credentials: {
                email: { label: "Email", type: "text", placeholder: "email@example.com" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                const { email, password } = credentials;

                // Validation
                if (!email || !password) {
                    throw new Error("Email and password are required");
                }

                const db = await connectDB();
                const currentUser = await db.collection('users').findOne({ email });

                // User not found
                if (!currentUser) {
                    throw new Error("User not found");
                }

                // Password comparison using bcrypt
                const passwordMatched = await bcrypt.compare(password, currentUser.password);
                if (!passwordMatched) {
                    throw new Error("Invalid password");
                }

                return currentUser; // Successful login
            },
        }),
        // Google login provider
        GoogleProvider({
            clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
        }),
        // Facebook login provider
        FacebookProvider({
            clientId: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_ID,
            clientSecret: process.env.NEXT_PUBLIC_FACEBOOK_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile }) {
            const { email, name, image } = user;

            if (account.provider === 'google' || account.provider === 'facebook') {
                try {
                    const db = await connectDB();

                    // Check if user exists
                    const existingUser = await db.collection('users').findOne({ email });

                    if (!existingUser) {
                        // Insert new user if they don't exist
                        await db.collection('users').insertOne({
                            email,
                            name,
                            image,
                            provider: account.provider,
                            createdAt: new Date(),
                        });

                        // // send email when create account our website
                        // mg.messages
                        // .create(process.env.NEXT_PUBLIC_MAILGUN_DOMAIN, {
                        //     from: "ih9066588@gmail.com",
                        //     to: "developerimran1122@gmail.com",
                        //     subject: "Wellcome Our EventSphare Plat",
                        //     text: "Testing wwelcome email with mailgun",
                        //     html: `
                        //     <div>
                        //         <h2> Thankyou for visit our eventsphare website </h2>
                        //         <p> We would like to get your feedback about the food </p>
                        //     </div>
                        //     `
                        // })
                        // .then(msg => console.log(msg))
                        // .catch(err => console.log(err))


                    }

                    // Return user details
                    return true;
                } catch (error) {
                    console.error('Error during social sign-in:', error);
                    return false; // Fail the sign-in process if error occurs
                }
            }

            return true; // Allow normal sign-in for credentials
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user._id;
                token.email = user.email;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.id = token.id;
            session.user.email = token.email;
            return session;
        }
    },

    pages: {
        signIn: '/login' // Custom sign-in page
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
