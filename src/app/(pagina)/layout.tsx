"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Main from "@/components/template/main";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [key, setKey] = useState(pathname);

  useEffect(() => {
    setKey(pathname); // Atualiza a chave sempre que mudar de página
  }, [pathname]);

  // Verifica se a rota começa com "/pt-br/" para esconder o Main
  const hideMainLayout = pathname.includes("/auth-pages/");

  return (
    <div key={key}>
      {hideMainLayout ? <>{children}</> : <Main>{children}</Main>}
    </div>
  );
}
