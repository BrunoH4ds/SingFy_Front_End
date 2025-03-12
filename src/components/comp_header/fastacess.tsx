import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { useRouter } from "next/navigation";
export default function Fastacess() {
  const router = useRouter();
  return (
    <div className="flex items-center space-x-2">
      {/* Botão "Return" */}
      <button
        onClick={() => router.back()}
        className="px-2 py-1 bg-transparent border border-white text-text-color rounded-full text-2xl cursor-pointer transition-all duration-300 hover:border-green-500 hover:text-green-500 backdrop-blur-sm"
      >
        {/* Ícone ou texto de retorno */}
        <IconChevronLeft size={25}/>
      </button>

      {/* Botão "Next" */}
      <button
        onClick={() => router.forward()}
        className="px-2 py-1 bg-transparent border border-white rounded-full text-2xl cursor-pointer hover:border-green-500 hover:text-green-500 backdrop-blur-sm"
      >
        {/* Ícone ou texto de próximo */}
        <IconChevronRight size={25}/>
      </button>
    </div>
  );
}