// components/comp_header/Menu.js
import Link from "next/link";

export interface MenuProps {
  MenuOpen: boolean;
  hiddenotheritems?: boolean;
}

export default function Menu({hiddenotheritems = false,MenuOpen}: MenuProps) {
  return (
    <>
      {MenuOpen && (
        <div className="absolute top-24 right-0 lg:right-64 w-full max-w-xs bg-zinc-700/40 backdrop-blur-sm rounded-md p-4 shadow-lg mx-2 sm:mx-8 z-21">
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-bold text-center bg-green-600 rounded-md p-2">
              Premium
            </h1>
            <div className="flex flex-col gap-2">
              <Link
                href="/auth-pages/pt-br/plans/premium"
                className="bg-zinc-900/40 rounded-md p-2 text-lg hover:bg-green-500 transition"
              >
                Plano Premium
              </Link>
              <Link
                href="/auth-pages/pt-br/plans/standard"
                className="bg-zinc-900/40 rounded-md p-2 text-lg hover:bg-green-500 transition"
              >
                Plano Standard
              </Link>
              <Link
                href="/auth-pages/pt-br/plans/free"
                className="bg-zinc-900/40 rounded-md p-2 text-lg hover:bg-green-500 transition"
              >
                Plano Gratuito
              </Link>
            </div>
          </div>
          {!hiddenotheritems && (
            <div className="flex flex-col mt-4">
              <div className="border-t border-white w-28 hover:text-green-500 transition" />
              <Link
                href="/support"
                className="py-2 text-lg font-bold hover:text-green-500 transition"
              >
                Suporte
              </Link>
              <Link
                href="/download"
                className="py-2 text-lg font-bold text-white rounded-md hover:text-green-500 transition"
              >
                Download
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}
