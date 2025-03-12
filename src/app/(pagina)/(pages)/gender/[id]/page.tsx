// Gender.tsx
import React from "react";
import { songsArray } from "@/database/songs";
import { genderArray } from "@/database/geners";
import GenderList from "@/pages/comp_gender/GenderList";
import Not_Found from "@/components/shared/Not_found";

interface genderPageProps {
  params: { id: string };
}

const Gender = ({ params }: genderPageProps) => {
  const { id } = React.use(params);
  const genderOBJ = genderArray.find(
    (currentGenderObj) => currentGenderObj._id === id
  );
  const genderArrayFromsong = songsArray.filter(
    (currentSongObj) => currentSongObj.gender === genderOBJ?.alt
  );

  if (!genderOBJ) {
    return <Not_Found type="gênero" />;
  }
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex p-5 bg-gradient-to-r from-zinc-700/40 to-green-500/40 backdrop-blur-sm rounded-md">
        <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
          <div className="flex flex-col justify-end">
            <h1 className="text-3xl font-bold">{genderOBJ.name}</h1>
            <p className="text-sm">{genderOBJ.description}</p>
          </div>
          <img
            className="object-cover rounded-md sm:mt-2 w-full md:w-[200px] h-[180px]"
            src={genderOBJ.image}
            alt={genderOBJ.alt}
          />
        </div>
      </div>
      <GenderList genderArray={genderArrayFromsong} {...genderOBJ} />
    </div>
  );
};

export default Gender;
