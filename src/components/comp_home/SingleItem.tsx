"use client"

import Link from "next/link";

interface SingleItemProps {
  _id: string;
  name: string;
  image: string;
  idPath: string;
  type: string;
}

export default function SingleItem({_id,name,image,idPath, type}: SingleItemProps) {
  return (
    <Link href={`/${idPath}/${_id}`}>
      <div className={`relative flex flex-col justify-end items-center rounded-lg bg-[#3333338f] backdrop-blur-lg hover:bg-green-500 transition-all duration-300 w-[200px] ${type == "artists" || type == "songs" ? "h-[180px]" : "h-[250px]"} cursor-pointer overflow-hidden`}>
        <img
          src={image}
          alt={name}
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1] opacity-40"
        />
        <h3 className="text-center">{name}</h3>
      </div>
    </Link>
  );
}
