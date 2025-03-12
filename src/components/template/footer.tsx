import Link from "next/link";

export interface props_footer {
  hidden: boolean;
}

export default function Footer({ hidden = false }: props_footer) {
  return (
    <div className={`fixed bottom-0 w-full bg-zinc-700/40 backdrop-blur-sm p-3 rounded-t-md ${hidden ? 'hidden' : ''}`}>
      <div className="flex items-center justify-between" >
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-br from-white to-green-600 bg-clip-text text-transparent">7 Dias de premium</h1>
          <p>Obtenha todos os benefícios de premium por 7 dias grátis.</p>
        </div>
        <Link href="/">
          <button className="py-2 px-6 text-sm bg-green-600 text-white rounded-md hover:bg-green-500">
            Garanta Ja
          </button>
        </Link>
      </div>
    </div>
  )
}