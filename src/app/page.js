import HeaderForm from "@/components/Froms/HeaderForm";
import { getServerSession } from "next-auth";
import { authOption } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOption);
  return (
    <main>
      <section className=" pt-32">
        <div className="max-w-md mb-8">
          <h1 className="text-6xl font-bold">
            Your one link <br />
            for everything
          </h1>
          <h2 className="text-gray-500 text-xl mt-6">
            Share your links, social profie,contact info and more on pne page
            heare
          </h2>
        </div>
        
        <HeaderForm user={session?.user } />
      </section>
    </main>
  );
}
