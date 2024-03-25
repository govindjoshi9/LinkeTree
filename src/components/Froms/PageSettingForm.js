"use client";
import React from "react";
import RadioToggler from "../FormItems/RadioToggler";
import { faImage, faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Page } from "@/models/Page";
import SubmitButton from "../Buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { savePageSetting } from "@/actions/pageAction";
import toast from 'react-hot-toast'
export default function PageSettingForm({ page, user }) {

  async function saveBaseSetting(formData) {
    const result = await savePageSetting(formData);
    if (result) {
      toast.success('Saved');
    }
   }

  return (
    <div className="-m-4">
      <form action={saveBaseSetting}>
        <div className="bg-gray-300 py-16 flex justify-center items-center">
          <RadioToggler
            selected="color"
            option={[
              { value: "color", icon: faPalette, label: "Color" },
              { value: "image", icon: faImage, label: "image" },
            ]}
            onChange={() => {}}
          />
        </div>
        <div className="flex justify-center -mb-12">
          <Image
            className="rounded-full relative -top-8 border-4 border-white shadow shadow-black/50"
            src={user?.image}
            alt={"avatar"}
            width={128}
            height={128}
          />
        </div>
        <div className="p-4">
          <label className="input-lable" htmlFor="nameIn">
            {" "}
            Display Name
          </label>
          <input
            type="text"
            id="nameIn"
            placeholder="Display name"
            name="displayName"
            defaultValue={Page.displayName}
          />
          <label className="input-lable" htmlFor="locationIn">
            Location
          </label>
          <input
            type="text"
            id="locationIn"
            placeholder="Location"
            name="location"
            defaultValue={Page.location}
          />
          <label className="input-lable" htmlFor="bioIn">
            Bio
          </label>
          <textarea
            id="bioIn"
            placeholder="Your bio gose here.. "
            name="bio"
            defaultValue={Page.bio}
          />
          <div className="max-w-[200px] mx-auto">
            <SubmitButton>
              <FontAwesomeIcon icon={faSave} />
              <span>Save</span>
            </SubmitButton>
          </div>
        </div>
      </form>
    </div>
  );
}
