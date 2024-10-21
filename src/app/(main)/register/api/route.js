import { connectDB } from "@/lib/connectDB";
import { sendEmail } from "@/lib/sendMail";
import bcrypt from "bcrypt";
const viewEventsUrl = `https://event-sphare-server.vercel.app/events`;
const loginUrl = `https://event-sphare-server.vercel.app/login`;
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
            subject: "Your Registration is Complete on EventSphere !",
            message: ` <div className=" max-w-screen-2xl mx-auto px-10">
      <h1 className=" text-lg font-semibold">Welcome to EventSphere Website :</h1>
      <p className=" font-semibold ">Dear ${newUser.name},</p>
      <p className=" my-3">
        Thank you for registering with EventSphere. We are pleased to inform you
        that your account has been successfully created.
      </p>
      <div className=" my-3">
        <p>With your new account, you can:</p>XZ
        *bd268XZ
        *ltw1
        <span></span>
        <ul className="list-disc  mt-1">
          <li ><span className=" font-semibold">Log In to Your Dashboard:</span>
            <span> <Link  href=${loginUrl}>Login Here</Link > </span>
          </li>
          <li><span className=" font-semibold">Explore Upcoming Events: </span>
            <span><Link  href=${viewEventsUrl}>View Events</Link ></span>
          </li>
          <li> <span className=" font-semibold">Access Exclusive Features:</span>
            <span>Take advantage of our user-friendly platform to manage your event bookings seamlessly.</span>
          </li>
        </ul>
      </div>
      <p>For any inquiries or support, please contact us at [eventsphare@gmail.com].</p>
      <p className=" my-3">Thank you for choosing EventSphere. We look forward to providing you with the best event booking experience!
      </p>
      <p>Sincerely,
      </p>
      <p>The EventSphere Team</p>
    </div>`,
        });
        // Return success response
        return new Response(JSON.stringify({ message: "User created successfully" }), { status: 201 });

    } catch (error) {
        console.error("Error creating user:", error);
        return new Response(JSON.stringify({ message: "Something went wrong" }), { status: 500 });
    }
};
