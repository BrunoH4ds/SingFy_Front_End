import Link from "next/link";
import Logo from "../shared/Logo";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import FooterNavLinks from "../comp_policy/FooterNavLinks";

export default function FooterPolicy() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-zinc-800 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-10 px-5">
        {/* Logo */}
        <div className="flex justify-center md:justify-start">
          <Logo imageheight={90} imagewidth={90} text={false} />
        </div>

        {/* Links de Navegação */}
        <div>
          <FooterNavLinks/>
        </div>

        {/* Redes Sociais */}
        <div className="flex gap-5 justify-center">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="bg-zinc-700/40 p-2 rounded-md hover:bg-green-500 transition-colors "
          >
            <IconBrandInstagram size={40} />
          </Link>
          <Link
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="bg-zinc-700/40 p-2 rounded-md hover:bg-green-500 transition-colors"
          >
            <IconBrandFacebook size={40} />
          </Link>
          <Link
            href="https://www.x.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="bg-zinc-700/40 p-2 rounded-md hover:bg-green-500 transition-colors"
          >
            <IconBrandX size={40} />
          </Link>
        </div>
      </div>

      {/* Direitos Autorais */}
      <div className="container mx-auto gap-10 px-5 flex justify-between flex-col md:flex-row mt-5">
        <div className="flex items-center justify-center">
          <Link href="/auth-pages/pt-br/legal/">
            <p className="text-sm hover:text-green-500 transition-colors">
              Legal
            </p>
          </Link>
          <span className=" mx-2">|</span>
          <Link href="/auth-pages/pt-br/legal/privacy-policy">
            <p className="text-sm hover:text-green-500 transition-colors">
              Política de Privacidade
            </p>
          </Link>
          <span className="mx-2">|</span>
          <Link href="/auth-pages/pt-br/legal/end-user-agreement">
            <p className="text-sm hover:text-green-500 transition-colors">
              Termos de Uso
            </p>
          </Link>
          <span className="mx-2">|</span>
          <Link href="/auth-pages/pt-br/accessibility">
            <p className="text-sm hover:text-green-500 transition-colors">
              Acessibilidade
            </p>
          </Link>
        </div>
        <div className="flex justify-center">
          <p className="text-sm ">
            &copy; {currentYear} Singfy.com - Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
}
