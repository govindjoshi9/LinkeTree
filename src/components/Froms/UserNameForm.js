"use client";
import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";
import { useState } from "react";
import { redirect } from "next/navigation";
export default function UserNameForm({ desiredUsername }) {
  const [taken, setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData)
    setTaken(result === false);
    if (result) {
      redirect('/account/' + formData.get('username'));
    }
  }
  return (
    <form action={handleSubmit}>
      <h1 className="text-4xl font-bold text-center mb-2">
        Grab Your User Name
      </h1>
      <p className="text-center mb-6 text-gray-500">Choose Your username</p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block p-2 mx-auto border w-full mb-2 text-center"
          type="text"
          defaultValue={desiredUsername}
          placeholder="username"
        />
        {taken && (
           <div className="bg-red-200 border border-red-500 p-2 mb-2 text-center">
            This user name is Take
          </div> 
          
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 block mx-auto w-full flex gap-2 item-center justify-center"
        >
          <span>Clain Usernname</span>
          <RightIcon />
        </button>
      </div>
    </form>
  );
}
