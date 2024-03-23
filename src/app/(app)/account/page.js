import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UserNameForm from "@/components/Froms/UserNameForm";
import { Page } from "@/models/Page";
import { mongoose } from "mongoose";


export default async function page({ searchParams }) {
  const session = await getServerSession(authOption);
  const desiredUsername = searchParams?.username;
  if (!session) {
    redirect("/");
  }
  mongoose.connect(process.env.MONGODB_URI);
  const page = await Page.findOne({ owner: session?.user?.email })
  
  if (page) {
    return (
      <div>Your page is: {page.uri}</div>
    )
  }
  return (
    <div>
      <UserNameForm desiredUsername={desiredUsername } />
    </div>
  );
}
