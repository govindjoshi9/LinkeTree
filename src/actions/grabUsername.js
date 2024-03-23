'use server'

import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { Page } from "@/models/Page";
import { mongoose } from "mongoose";
import { getServerSession } from "next-auth";

export default async function grabUsername(formData) {
    const username = formData.get('username');
    mongoose.connect(process.env.MONGODB_URI);
    const existingPage = await Page.findOne({ uri: username });
    if (existingPage) {
        return false;
    }
    else {
        const session = await getServerSession(authOption);
        return await Page.create({
            uri: username,
            owner: session?.user?.email,
        });
        
    }
    
}
