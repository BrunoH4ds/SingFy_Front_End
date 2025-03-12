// [id]/song.tsx
"use client"

import {
  IconPlayerPauseFilled,
  IconPlayerPlayFilled,
  IconPlayerSkipBackFilled,
  IconPlayerSkipForwardFilled,
  IconVolume,
  IconVolume2,
} from "@tabler/icons-react";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { songsArray } from "@/database/songs";
import { artistArray } from "@/database/artists";
import Not_Found from "@/components/shared/Not_found";

interface songPageProps {
  params: { id: string };
}

const Song = ({ params }: songPageProps) => {
  // Obtém o parâmetro 'id' da URL
  const { id } = React.use(params);

  // Encontra a música correspondente ao ID
  const songOBJ = songsArray.filter(
    (currentSongObj) => currentSongObj._id === id
  )[0];

  // Encontra o artista da música
  const artistOBJ = artistArray.filter(
    (currentArtistObj) => currentArtistObj.name === songOBJ.artist
  )[0];

  // Se não encontrar a música ou o artista, exibe uma mensagem de erro
  if (!songOBJ || !artistOBJ) return <Not_Found type="Musica"/>;

  // Referência para o player de áudio
  const audioPlayer = useRef();

  // Função para controlar a reprodução (play/pause)
  const PlayPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying); // Alterna o estado de reprodução
  };

  // Gera índices aleatórios para músicas
  const randomIndex = Math.floor(Math.random() * (songsArray.length - 1));
  const randomIndex2 = Math.floor(Math.random() * (songsArray.length - 1));

  // Obtém os IDs das músicas aleatórias
  const randomIdFromArtist = songsArray[randomIndex]._id;
  const randomId2FromArtist = songsArray[randomIndex2]._id;
  // Estado para controle de reprodução (play/pause)
  const [isPlaying, setIsPlaying] = useState(false);

  // Função para formatar o tempo (segundos para minutos:segundos)
  const formatTime = (timeInSecond) => {
    const minutes = Math.floor(timeInSecond / 60);
    const seconds = Math.floor(timeInSecond % 60);
    return `${minutes.toString().padStart(1, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Estado para controlar o tempo atual da música
  const [currentTime, setCurrentTime] = useState(formatTime(0));

  // Sempre que o ID da música mudar, resetamos o estado de reprodução para play
  useEffect(() => {
    setIsPlaying(false); // Sempre começa no estado de play ao trocar a música
  }, [id]); // Dependência do 'id', ou seja, toda vez que a música mudar

  // Configura o volume inicial do áudio quando o componente for montado
  useEffect(() => {
    if (audioPlayer.current) audioPlayer.current.volume = 0.05;
  }, []);

  // Atualiza o tempo da música enquanto ela está sendo reproduzida
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); // Atualiza o tempo a cada segundo
    }, 1000);

    return () => clearInterval(intervalId); // Limpa o intervalo quando o componente for desmontado
  }, [isPlaying]);

  return (
    <div className="flex flex-1 flex-col">
      {/* Container para a imagem de capa da música */}
      <div className="flex p-5 bg-gradient-to-r from-zinc-700/40 to-green-500/40 backdrop-blur-sm rounded-md h-full">
        <div className="flex flex-col flex-1 items-center justify-center">
          <img
            className="object-cover w-[300px] h-[280px] rounded-md shadow-lg"
            src={songOBJ.image}
            alt={songOBJ.name}
          />
        </div>
      </div>

      {/* Container com informações sobre a música e controles */}
      <div className="flex flex-1 justify-between p-2 mt-4 bg-zinc-700/40 backdrop-blur-sm rounded-md flex-col lg:flex-row">
        {/* Informações sobre a música */}
        <div className="flex flex-row items-center">
          <img
            className="object-cover w-[80px] h-[80px] mr-3 rounded-md"
            src={songOBJ.image}
            alt={songOBJ.name}
          />
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl font-bold">{songOBJ.name}</h1>
            <p>
              De: <Link href={`/artist/${artistOBJ._id}`}>{songOBJ.artist}</Link>
            </p>
          </div>
        </div>

        {/* Controles de reprodução */}
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            {/* Botão para ir para a música anterior */}
            <Link href={`/song/${randomIdFromArtist}`}>
              <button className="m-2 transition-colors duration-300 hover:text-green-500">
                <IconPlayerSkipBackFilled size={35} />
              </button>
            </Link>

            {/* Botão play/pause */}
            <button
              className="m-2 transition-colors duration-300 hover:text-green-500"
              onClick={() => PlayPause()}
            >
              {isPlaying === false ? (
                <IconPlayerPlayFilled size={35} />
              ) : (
                <IconPlayerPauseFilled size={35} />
              )}
            </button>

            {/* Botão para ir para a próxima música */}
            <Link href={`/song/${randomId2FromArtist}`}>
              <button className="m-2 transition-colors duration-300 hover:text-green-500">
                <IconPlayerSkipForwardFilled size={35} />
              </button>
            </Link>
          </div>

          {/* Exibição do tempo da música */}
          <div className="flex flex-row items-center">
            <span className="text-sm">{currentTime}</span>
            <div className="relative mx-2 w-56 md:w-80 h-3 rounded-md bg-gray-300"></div>
            <span className="text-sm">{songOBJ.duration}</span>
          </div>
        </div>

        {/* Controles de volume */}
        <div className="flex lg:flex-col justify-center lg:mr-5 gap-2 items-center mt-2 lg:mt-0">
          <h2 className="hidden lg:flex border-b-2 border-zinc-50">Volume</h2>
          <div className="flex flex-1 justify-between lg:justify-normal gap-2">
            {/* Botão para diminuir o volume */}
            <button
              className="transition-colors duration-300 hover:text-green-500"
              onClick={() =>
                audioPlayer.current &&
                (audioPlayer.current.volume = Math.max(
                  audioPlayer.current.volume - 0.025,
                  0
                ))
              }
            >
              <IconVolume2 size={25} />
            </button>

            {/* Botão para aumentar o volume */}
            <button
              className="transition-colors duration-300 hover:text-green-500"
              onClick={() =>
                audioPlayer.current &&
                (audioPlayer.current.volume = Math.min(
                  audioPlayer.current.volume + 0.025,
                  1
                ))
              }
            >
              <IconVolume size={25} />
            </button>
          </div>
        </div>

        {/* Elemento de áudio */}
        <audio ref={audioPlayer} src={songOBJ.audio} onEnded={() => setIsPlaying(false)}></audio>
      </div>
    </div>
  );
};

export default Song;
