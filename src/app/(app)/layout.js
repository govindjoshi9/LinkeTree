import { authOption } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import "../globals.css";
import Link from "next/link";
import Image from 'next/image'
import { redirect } from "next/dist/server/api-utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LinkList",
  description: "Generated by create next app",
};

export default async function AppLayout({ children }) {
  const session = await getServerSession(authOption);
  if (!session) {
    return redirect('/')
  }
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen">
          <aside className="bg-blue-100 w-48 p-4">
            aside stuff
            <div className="rounded-full overflow-hidden aspect-square w-24 mx-auto">
              <Image src={session?.user?.image} width={256} height={256} alt={'avatar'}/>
            </div>
            <nav className ="flex flex-col text-center mt-8 gap-4">
              <Link href={'/account'}>Setting</Link>
              <Link href={'/analytics'}>Analytics</Link>
            </nav>
          </aside>
          <div className=" max-w-4xl  mx-auto p-6">{children}</div>
        </main>
      </body>
    </html>
  );
}