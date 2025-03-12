import { IconQuestionMark } from "@tabler/icons-react";
import Link from "next/link";

export interface propsNot_Found {
  type: string;
}

export default function Not_Found({ type }: propsNot_Found) {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex flex-col items-center p-4 rounded-md backdrop-blur-sm bg-zinc-700/40">
        <p className="hidden text-green-500 lg:flex">
          <IconQuestionMark size={200} />
        </p>
        <div className="flex flex-col w-full justify-between flex-1">
          <h1 className="text-3xl bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent">Desculpe</h1>
          <p className="mt-2">Não Foi Possível encontrar esse(a) {type}.</p>
          <Link href="/" className="flex justify-center mt-4 w-full bg-green-500/80 p-2 rounded-md">
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
