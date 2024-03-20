'use server'

import { Page } from "@/models/Page";
import { mongoose } from "mongoose";

export default async function grabUsername(formData) {
    const username = formData.get('username');
    mongoose.connect(process.env.MONGODB_URI);
    const existingPage = await Page.findOne({ uri: username });
    if (existingPage) {
        return false;
    }
    else{
        return await Page.create({ uri: username });
        
    }
    
}
