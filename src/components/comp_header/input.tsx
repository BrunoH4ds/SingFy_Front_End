import { IconSearch } from "@tabler/icons-react";
import { useState } from "react";
import Link from "next/link";

export default function Input({ onSearch, songResults, artistResults,genderResults }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (onSearch) {
      onSearch(term); // Atualiza os resultados em tempo real
    }
  };

  // Define o clique no resultado e reseta o input
  const handleSelect = () => {
    setSearchTerm(""); // Limpa o input
    onSearch(""); // Opcional: Limpa os resultados na UI
  };
  return (
    <div className="relative">
      <input
        type="text"
        className="outline-none border border-text-color p-2.5 pr-12 text-text-color font-medium text-sm rounded-lg bg-transparent backdrop-blur-sm transition-all duration-300 focus:border-green-500"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className="text-text-color p-2 text-lg absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer transition-colors duration-300 hover:text-green-500">
        <div className=" flex">
          <IconSearch size={25} />
        </div>
      </button>

      {/* Resultados da busca */}
      {searchTerm && (songResults.length > 0 || artistResults.length > 0 || genderResults.length > 0) && (
        <div className="absolute top-full left-0 w-full mt-3 bg-zinc-700/50 border border-green-500 backdrop-blur-sm shadow-lg rounded-md max-h-60 overflow-y-auto z-50 p-2">
          {/* Seção de músicas */}
          {songResults.length > 0 && (
            <div>
              <h3 className="text-green-500 text-sm font-bold py-1">Músicas</h3>
              {songResults.map((song) => (
                <Link href={`/song/${song._id}`} key={song._id}>
                  <div
                    className="p-2 text-white hover:bg-green-500 rounded-md cursor-pointer transition"
                    onClick={() => handleSelect()}
                  >
                    <div className="flex items-center">
                      <img
                        src={song.image}
                        alt={song.name}
                        className="w-12 h-12 object-cover rounded-md mr-2"
                      />
                      <h3>{song.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}

          {/* Seção de artistas */}
          {artistResults.length > 0 && (
            <div className="mt-2">
              <h3 className="text-green-500 text-sm font-bold px-2">
                Artistas
              </h3>
              {artistResults.map((artist) => (
                <Link href={`/artist/${artist._id}`} key={artist._id}>
                  <div
                    className="p-2 text-white hover:bg-green-500 rounded-md cursor-pointer transition"
                    onClick={() => handleSelect()}
                  >
                    <div className="flex items-center">
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="w-12 h-12 object-cover rounded-md mr-2"
                      />
                      <h3>{artist.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
          {genderResults.length > 0 && (
            <div>
              <h3 className="text-green-500 text-sm font-bold py-1">gênero</h3>
              {genderResults.map((gender) => (
                <Link href={`/gender/${gender._id}`} key={gender._id}>
                  <div
                    className="p-2 text-white hover:bg-green-500 rounded-md cursor-pointer transition"
                    onClick={() => handleSelect()}
                  >
                    <div className="flex items-center">
                      <img
                        src={gender.image}
                        alt={gender.name}
                        className="w-12 h-12 object-cover rounded-md mr-2"
                      />
                      <h3>{gender.name}</h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
