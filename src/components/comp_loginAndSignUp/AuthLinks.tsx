
import Link from "next/link";
import React from "react";

export interface AuthLinksProps {
  showSignup?: boolean;
  showLogin?: boolean;
}

export default function AuthLinks({ showSignup = true, showLogin = true }: AuthLinksProps) {
  return (
    <div className="flex items-center mt-2 gap-2">
      {showSignup && (
        <>
          <p>Não tem uma conta?</p>
          <Link href="/auth-pages/pt-br/create-account">
            <p className="text-center underline">Cadastre-se</p>
          </Link>
        </>
      )}
      {showLogin && (
        <>
          <p>Já tem uma conta?</p>
          <Link href="/auth-pages/pt-br/Login">
            <p className="text-center underline">Entre</p>
          </Link>
        </>
      )}
    </div>
  );
}
