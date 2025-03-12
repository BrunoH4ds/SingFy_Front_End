"use client";
import { useState } from "react";
import SongItem from "./songitem";

interface SongListProps {
  songArray: Array<any>;
  Items: number;
}

export default function SongList({ songArray, Items }: SongListProps) {
  const [items, setitems] = useState(Items);
  return (
    <div className="flex flex-col bg-zinc-700/40 backdrop-blur-sm rounded-md mt-4 p-5">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold">Populares</h1>
        <p
          className="text-2xl underline cursor-pointer"
          onClick={() => setitems(items + songArray.length)}
        >
          Ver Tudo
        </p>
      </div>
      {songArray
        .filter((currentSongOBJ, index) => index < items)
        .map((currentSongOBJ) => (
          <SongItem {...currentSongOBJ} key={currentSongOBJ._id} />
        ))}
    </div>
  );
}
