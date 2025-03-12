// /app/artista/[id]/page.tsx

import React from "react";
import SongList from "@/pages/comp_artist/songlist";
import { artistArray } from "@/database/artists";
import { songsArray } from "@/database/songs";
import Not_Found from "@/components/shared/Not_found";

interface ArtistPageProps {
  params: { id: string };
}

const Artist = ({ params }: ArtistPageProps) => {
  const { id } = React.use(params); // Pegamos o 'id' diretamente de 'params'

  const artistOBJ = artistArray.find(
    (currentArtistObj) => currentArtistObj._id === id
  );
  const songArrayFromArtist = songsArray.filter(
    (currentSongObj) => currentSongObj.artist === artistOBJ?.name
  );

  if (!artistOBJ) {
    return <Not_Found type="artista" />;
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="flex p-5 bg-gradient-to-r from-zinc-700/40 to-green-500/40 backdrop-blur-sm rounded-md">
        <div className="flex flex-col w-full justify-between sm:flex-col sm:items-center md:flex-row md:items-stretch">
          <div className="flex flex-col justify-end">
            <h1 className="text-3xl font-bold">{artistOBJ.name}</h1>
          </div>
          <img
            className="object-cover rounded-md sm:mt-2 w-full md:w-[200px] h-[180] "
            src={artistOBJ.banner}
            alt="Artist"
          />
        </div>
      </div>
      <SongList Items={5} songArray={songArrayFromArtist} />
    </div>
  );
};

export default Artist;
