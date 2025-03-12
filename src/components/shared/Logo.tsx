import Link from "next/link";

export interface propsLogo {
  image?: boolean; // Controle de visibilidade da imagem (opcional)
  imagewidth?: number; // Largura da imagem (opcional)
  imageheight?: number; // Altura da imagem (opcional)
  text?: boolean; // Controle de visibilidade do texto (opcional)
  textSize?: string; // Tamanho do texto (opcional)
}

export default function Logo({
  image = true,
  text = true,
  imagewidth = 40,
  imageheight = 40,
  textSize = "text-3xl", // Tamanho de texto padrão
}: propsLogo) {
  return (
    <Link
      href="/"
      className="flex items-center"
      style={{ fontFamily: '"Charm", cursive' }}
    >
      {/* A imagem será oculta se a propriedade `image` for false */}
      {image && (
        <img
          className="object-cover mr-1"
          src="/Clear_Logo.png"
          alt="Logo"
          width={imagewidth} // Usando a propriedade `imagewidth` para definir a largura
          height={imageheight} // Usando a propriedade `imageheight` para definir a altura
        />
      )}

      {/* O texto será ocultado se a propriedade `text` for false */}
      {text && (
        <h1 className={`hidden sm:flex ${textSize}`}>
          Sing
          <strong className="bg-gradient-to-r from-white to-green-600 bg-clip-text text-transparent">
            fy
          </strong>
        </h1>
      )}
    </Link>
  );
}
