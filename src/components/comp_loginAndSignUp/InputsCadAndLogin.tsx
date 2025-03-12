

import Link from "next/link";
import React from "react";

export interface InputProps {
  NoUserName?: boolean;
  NoNumberPhone?: boolean;
  NoForgorPassword?: boolean;
}

export default function InputsCadAndLogin(props: InputProps) {
  return (
    <div className="flex flex-col justify-center items-center w-full gap-2">
      {!props.NoUserName && (
        <>
          <h6>Nome de Usuario</h6>
          <input
            className="w-4/5 p-2 border border-green-600 rounded-md bg-zinc-800/40 text-white"
            placeholder="Nome de Usuario"
          />
        </>
      )}
      <h6>E-mail</h6>
      <input
        className="w-4/5 mb-2 p-2 border border-green-600 rounded-md bg-zinc-800/40 text-white"
        placeholder="Seu email"
      />
      <h6>Senha</h6>
      <input
        className="w-4/5 p-2 border border-green-600 rounded-md bg-zinc-800/40 text-white"
        placeholder="Sua senha"
      />
      {!props.NoNumberPhone && (
        <>
          <h6>Numero de Telefone</h6>
          <input
            className="w-4/5 p-2 border border-green-600 rounded-md bg-zinc-800/40 text-white"
            placeholder="Seu numero de telefone"
          />
        </>
      )}
      {!props.NoForgorPassword && (
        <Link href="/forgot-password" className="flex justify-center items-center gap-2">
          <p className="text-sm text-green-500">Esqueceu sua senha?</p>
        </Link>
      )}
    </div>
  );
}
