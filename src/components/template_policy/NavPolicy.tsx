"use client";

import Link from "next/link";
import Logo from "../shared/Logo";
import { IconCaretDown } from "@tabler/icons-react";
import Buttons from "../comp_header/buttonsLoginandSignup";
import { useState } from "react";
import Menu from "../comp_policy/NavMenu";

export default function NavegationPolicy() {
  // Estado para controlar a visibilidade do menu em telas pequenas
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para controlar a exibição dos outros itens (Suporte, Download)
  const [hiddenOtherItems, setHiddenOtherItems] = useState(false);

  // Função para alternar o menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHiddenOtherItems(false); // Se hiddenOtherItems for true, ele oculta os outros itens do menu
  };

  // Função para ativar a visualização apenas do menu premium
  const handlePremiumClick = () => {
    setIsMenuOpen(!isMenuOpen); // Abre o menu
    setHiddenOtherItems(true); // Oculta os outros itens
  };

  return (
    <div className="flex bg-zinc-800 items-center justify-between py-3 px-5">
      <div>
        <Logo />
      </div>
      <div className="flex items-center">
        <div className="mx-8">
          <button
            className="lg:hidden border-none cursor-pointer transition-colors duration-300 hover:text-green-500"
            onClick={toggleMenu}
          >
            <p className="flex gap-1 items-center">
              Mais Opções
              <IconCaretDown size={30} />
            </p>
          </button>
          <div className="hidden lg:flex items-center">
            <button
              className="text-white font-bold text-sm px-5 hover:text-green-500 transition"
              onClick={handlePremiumClick} // Altera o estado ao clicar no Premium
            >
              Premium
            </button>
            <Link
              href="/support"
              className="text-white font-bold text-sm px-5 hover:text-green-500 transition"
            >
              Suporte
            </Link>
            <Link
              href="/download"
              className="text-white font-bold text-sm px-5 hover:text-green-500 transition"
            >
              Download
            </Link>
          </div>
            <Menu MenuOpen={isMenuOpen} hiddenotheritems={hiddenOtherItems} />
        </div>
        <div className="border-r border-white h-6 hover:text-green-500 transition" />
        <div className="ms-5">
          <Buttons />
        </div>
      </div>
    </div>
  );
}
