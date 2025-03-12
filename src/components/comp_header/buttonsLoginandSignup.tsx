import { IconMenu2 } from "@tabler/icons-react";
import Link from "next/link";
import { useState } from "react";

export default function ButtonsLoginAndSignUp() {
  // Estado para controlar a visibilidade do menu em telas pequenas
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between bg-transparent">
      {/* Links de navegação (visíveis em telas grandes) */}
      <div className="hidden lg:flex items-center">
        <Link
          href="/auth-pages/pt-br/create-account"
          className="mr-2 transition-colors duration-300 hover:text-green-500"
        >
          Sign Up
        </Link>
        <Link
          href="/auth-pages/pt-br/Login"
          className="p-2 text-sm bg-green-600 text-text-color border-none rounded-md cursor-pointer transition-colors duration-300 hover:bg-green-500"
        >
          Login
        </Link>
      </div>

      {/* Botão de menu para telas pequenas */}
      <button
        className="lg:hidden border-none cursor-pointer transition-colors duration-300 hover:text-green-500"
        onClick={toggleMenu}
      >
        <IconMenu2 size={30} />
      </button>

      {/* Menu aberto em telas pequenas */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-24 right-0 w-full max-w-xs  bg-zinc-700/40 backdrop-blur-sm rounded-md p-4 shadow-lg mx-2 sm:mx-8">
          <Link href="/auth-pages/pt-br/create-account" className="block py-2 text-lg hover:text-green-500 transition">
            Sign Up
          </Link>
          <Link href="/auth-pages/pt-br/Login" className=" py-2 text-lg text-white rounded-md hover:text-green-500 transition">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
