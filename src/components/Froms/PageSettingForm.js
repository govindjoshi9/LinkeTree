"use client";
import React, { useState } from "react";
import RadioToggler from "../FormItems/RadioToggler";
import { faImage, faPalette, faSave } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { Page } from "@/models/Page";
import SubmitButton from "../Buttons/SubmitButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { savePageSetting } from "@/actions/pageAction";
import toast from "react-hot-toast";

export default function PageSettingForm({ page, user }) {
  const [bgType, setBgType] = useState(page.bgType);
  const [bgColor, setBgColor] = useState(page.bgColor);
  async function saveBaseSetting(formData) {
    const result = await savePageSetting(formData);
    if (result) {
      toast.success("Saved");
    }
  }
 function handleFileChange(ev) {
   const file = ev.target.files?.[0];
   console.log(file);
   if (file) {
     const data = new FormData();
     data.append("file", file); // Append the file to the FormData object
     fetch("/api/upload", {
       method: "POST",
       body: data,
     }).then((response) => {
       response.json().then((link) => {
         console.log(link);
       });
     });
   }
 }

  return (
    <div className="-m-4">
      <form action={saveBaseSetting}>
        <div
          className="py-16 flex justify-center items-center "
          style={{ backgroundColor: bgColor }}
        >
          <RadioToggler
            defaultValue={page.bgType}
            option={[
              { value: "color", icon: faPalette, label: "Color" },
              { value: "image", icon: faImage, label: "image" },
            ]}
            onChange={(val) => setBgType(val)}
          />
          {bgType === "color" && (
            <div className="bg-gray-200 ml-3 shadow flex items-center justify-center text-gray-700 p-2 mt-2">
              <div className=" flex gap-2 justify-center">
                <span>Backgraound color:</span>
                <input
                  type="color"
                  name="bgColor"
                  onChange={(ev) => setBgColor(ev.target.value)}
                  defaultValue={page.bgColor}
                />
              </div>
            </div>
          )}
          {bgType === "image" && (
            <div className="flex justify-center ">
              <label className="bg-white shadow px-4 py-2 mt-2 ml-4">
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="hidden"
                />
                Change Image
              </label>
            </div>
          )}
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
