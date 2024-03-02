"use client";

import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function HeaderForm() {
  useEffect(() => {
    if (
      'localStorage' in window &&
      window.localStorage.getItem('desiredUserName')
    ) {
      const username = window.localStorage.getItem("desiredUserName");
      window.localStorage.removeItem("desiredUserName");
      redirect("/account?username=" + username);
    }
  }, []);
  async function handleSubmit(ev) {
    ev.preventDefault();
    const form = ev.target;
    const input = form.querySelector("input");
    const username = input.value;
    if (username.length > 0) {
      window.localStorage.setItem("desiredUserName", username);
      await signIn("google");
    }
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="inline-flex items-center shadow-lg shadow-gray-500/20"
    >
      <span className="bg-white py-4 pl-4">linktree.to/</span>
      <input type="text" className="py-4" placeholder="username" />
      <button type="submit" className="bg-blue-500 text-white py-4 px-6">
        Join for Free
      </button>
    </form>
  );
}
