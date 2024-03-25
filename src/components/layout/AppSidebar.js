"use client";
import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import LogoutButton from "@/components/Buttons/LogoutButton";
import { usePathname } from "next/navigation";

export default function AppSidebar() {
  const path = usePathname();
  return (
    <div>
      <nav className="inline-flex mx-auto flex-col text-center mt-12 gap-6 text-gray-500">
        <Link
          href={"/account"}
          className={
            "flex gap-2 " +
            (path === "/account" ? "text-blue-500 font-bold " : "")
          }
        >
          <FontAwesomeIcon
            fixedWidth={true}
            icon={faFileLines}
            className="w-6 h-6"
          />
          <span className="">My Page</span>
        </Link>
        <Link
          href={"/analytics"}
          className={
            "flex gap-2 " +
            (path === "/analytics" ? "text-blue-500 font-bold " : "")
          }
        >
          <FontAwesomeIcon
            fixedWidth={true}
            icon={faChartLine}
            className="w-6 h-6 "
          />
          <span className="">Analytics</span>
        </Link>

        <LogoutButton
          iconLeft={true}
          className="flex gap-2 items-center"
          iconClasses="w-6 h-6"
        />
        <Link
          href={"/"}
          className="flex items-center gap-2 text-sm to-gray-500 border-t pt-4"
        >
          <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
          <span>Back to website</span>
        </Link>
      </nav>
    </div>
  );
}
