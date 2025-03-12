import React from "react";
import ItemList from "./ItemList";

import { artistArray } from "@/database/artists";
import { genderArray } from "@/database/geners";
import { songsArray } from "@/database/songs";
const MainContent = () => {
  
  return (
    <div className="flex flex-1 flex-col ">
        <div className="bg-gradient-to-r from-zinc-700/40 to-green-500/40 backdrop-blur-sm rounded-md p-5 mx-5 ">
          <h1 className="text-2xl font-bold">Boas Vindas Ao Signfy</h1>
        </div>
        <ItemList
        title="Os Melhores Gêneros Do Momento"
        description="Encontre as melhores para o seu estilo"
        items={5}
        itemsArray={genderArray}
        idPath="gender"
        typeItem="gender"
        />
        <ItemList 
        title="Melhores Cantores Do Momento"
        description="Encontre apenas os melhores para você!"
        items={5}
        itemsArray={artistArray}
        idPath="artist"
        typeItem="artists"/>
        <ItemList 
        title="As Melhores Musicas Do Momento"
        description="Encontre apenas os melhores de acordo com seu estilo"
        items={5}
        itemsArray={songsArray}
        idPath="song"
        typeItem="songs"/>
      </div>

  );
}
    

export default MainContent;
