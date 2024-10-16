import { connectDB } from "@/lib/connectDB";
import { sendEmail } from "@/lib/sendMail";
import bcrypt from "bcrypt";

export const POST = async (request) => {
    try {
        const newUser = await request.json();
        console.log(newUser);

        const db = await connectDB();
        const userCollection = db.collection('users');

        // Check if the user already exists
        const exist = await userCollection.findOne({ email: newUser.email });
        if (exist) {
            return new Response(JSON.stringify({ message: "User already exists" }), { status: 409 });
        }

        // Hash the password before storing
        const hashedPassword = bcrypt.hashSync(newUser.password, 14);

        // Insert the new user with the hashed password
        const resp = await userCollection.insertOne({
            ...newUser,
            password: hashedPassword // Overwrite the plain-text password
        });
        sendEmail(newUser.email, {
            subject: 'Registration Successful!',
            message: `Thank you for registering on EventSphere.`,
          });
        // Return success response
        return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};
