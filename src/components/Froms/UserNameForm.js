'use client'
import grabUsername from "@/actions/grabUsername";
import RightIcon from "../icons/RightIcon";
export default function UserNameForm({ desiredUsername }) {
    
  return (
    <form action={grabUsername}>
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
