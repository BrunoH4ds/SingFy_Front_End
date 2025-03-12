
import { IconWorld } from "@tabler/icons-react";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="sticky top-0 w-[250px] mb-[110px] overflow-y-auto">
      <ul className="flex flex-col items-center bg-zinc-700/40 backdrop-blur-sm rounded-md p-3">
        <div className="w-full min-h-[150px] flex flex-col items-center">
          <li className="rounded-md flex justify-center w-full">
            <Link href="/auth-pages/pt-br/Login" className="text-white text-center w-1/2">
              Biblioteca
            </Link>
          </li>
          <div className="bg-green-500/80 backdrop-blur-md text-white p-5 rounded-lg mt-4 w-full">
            <div className="mb-2">
              <strong className="text-lg">Crie sua nova playlist</strong>
              <p className="text-sm">É fácil e iremos te ajudar.</p>
            </div>
            <button className="w-full py-2 bg-zinc-700 rounded-lg border border-white hover:bg-gray-200 hover:text-black transition">
              Criar playlist
            </button>
          </div>
          <div className="bg-green-500/80 backdrop-blur-md text-white p-5 rounded-lg mt-4 w-full">
            <div className="mb-2">
              <strong className="text-lg">Que tal um podcast?</strong>
              <p className="text-sm">Avisaremos sempre que surgir um novo episódio.</p>
            </div>
            <button className="w-full py-2 bg-zinc-700 rounded-lg border border-white hover:bg-gray-200 hover:text-black transition">
              Explore
            </button>
          </div>
        </div>
      </ul>
      <ul className="flex flex-col items-center bg-zinc-700/40 backdrop-blur-sm rounded-md p-3 mt-4">
        <li>
          <Link href="/auth-pages/pt-br/legal/cookies-policy" className="text-white text-center w-full">
            Cookies
          </Link>
        </li>
        <div className="flex flex-wrap justify-center mt-2">
          <div className="m-2 bg-zinc-600/50 backdrop-blur-md text-white p-2 rounded-lg border border-white">
            <p className="flex items-center gap-2"><IconWorld/> Portuguese-Brasil</p>
          </div>
          <div className="m-2 bg-zinc-600/50 backdrop-blur-md text-white p-2 rounded-lg border border-white">
            <p className="flex items-center gap-2"><IconWorld/> English-US</p>
          </div>
        </div>
      </ul>
    </div>
  );
}
