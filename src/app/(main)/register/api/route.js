import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";

export const POST = async(request)=> {
    const newUser = await request.json();
    console.log(newUser)
    try{
        const db = await connectDB();
        const userCollection = db.collection('users')
        const exist = await userCollection.findOne({email: newUser.email})
        if(exist){
            return Response.json({message: "user Exist"}, {status: 304})
        }

        // hash password
        const hashedPassword = bcrypt.hashSync(newUser.password, 14)

        const resp = await userCollection.insertOne({...newUser, hashedPassword})

        return Response.json({message: "User created"}, {status: 200})
    }catch(error){
        return Response.json({message: "Something went worng"}, {status: 500})

    }
}