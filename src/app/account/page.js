import { getServerSession } from "next-auth";
import { authOption } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import UserNameForm from "@/components/Froms/UserNameForm";


export default async function page({ searchParams }) {
  const session = await getServerSession(authOption);
  const desiredUsername = searchParams?.username;
  if (!session) {
    redirect("/");
  }
  return (
    <div>
      <UserNameForm desiredUsername={desiredUsername } />
    </div>
  );
}
