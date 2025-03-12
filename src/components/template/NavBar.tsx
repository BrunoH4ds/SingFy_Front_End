"use client";

import Logo from "../shared/Logo";
import Input from "../comp_header/input";
import Fastacess from "../comp_header/fastacess";
import ButtonsLoginAndSignUp from "../comp_header/buttonsLoginandSignup";
import { useState } from "react";
import { songsArray } from "@/database/songs";
import { artistArray } from "@/database/artists";
import { genderArray } from "@/database/geners";

export default function NavBar() {
  const [songResults, setSongResults] = useState([]);
  const [artistResults, setArtistResults] = useState([]);
  const [genderResults, setGenderResults] = useState([]);

  const handleSearch = (term) => {
    if (!term) {
      setSongResults([]);
      setArtistResults([]);
      setGenderResults([]);
      return;
    }

    // Filtra músicas e artistas separadamente
    const filteredSongs = songsArray.filter((song) =>
      song.name.toLowerCase().includes(term.toLowerCase())
    );
    const filteredArtists = artistArray.filter((artist) =>
      artist.name.toLowerCase().includes(term.toLowerCase())
    );
    const filteredGender = genderArray.filter((gender) =>
      gender.name.toLowerCase().includes(term.toLowerCase())
    );

    setSongResults(filteredSongs);
    setArtistResults(filteredArtists);
    setGenderResults(filteredGender);
  };

  return (
    <div className="flex px-10 flex-col z-30 py-3">
      <div className="flex justify-between items-center">
        <div className=" hidden sm:flex bg-zinc-700/40 backdrop-blur-sm rounded-md p-3 me-3">
          <Logo image={false} />
        </div>
        <div className="flex items-center gap-3 bg-zinc-700/40 backdrop-blur-sm rounded-md p-3">
          <div>
            <Fastacess />
          </div>
          {/* Passa os resultados separados para o Input */}
          <Input
            onSearch={handleSearch}
            songResults={songResults}
            artistResults={artistResults}
            genderResults={genderResults}
          />
        </div>
        <div className="bg-zinc-700/40 backdrop-blur-sm rounded-md p-3 ms-3">
          <ButtonsLoginAndSignUp/>
        </div>
      </div>
    </div>
  );
}
