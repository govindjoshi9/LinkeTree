import React from "react";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOption } from "@/app/api/auth/[...nextauth]/route";
import LogoutButton from "./Buttons/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default async function Header() {
  const session = await getServerSession(authOption);
  return (
    <header className="bg-white border-b   p-4">
      <div className="max-w-4xl flex justify-between mx-auto px-6">
        <div className="flex items-center gap-6 ">
          <Link href={"/"} className="flex items-center gap-2 text-blue-500">
            <FontAwesomeIcon icon={faLink} className="" />
            <span className="font-bold">LinkeList</span>
          </Link>
          <nav className="flex items-center gap-4 text-slate-500 text-sm">
            <Link href={"/about"}>about</Link>
            <Link href={"/pricing"}>pricing</Link>
            <Link href={"/contact"}>contact</Link>
          </nav>
        </div>
        <nav className="flex gap-4 text-sm items-center text-slate-500">
          {!!session && (
            <>
              <Link href={"/account"}>Hello, {session?.user?.name}</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
              <Link href={"/login"}>Login</Link>
              <Link href={"/login"}>Create Account</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
