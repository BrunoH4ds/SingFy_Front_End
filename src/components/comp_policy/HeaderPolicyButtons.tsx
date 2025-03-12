import Link from "next/link";

export default function HeaderPolicyButtons() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <Link
        href="/auth-pages/pt-br/legal/end-user-agreement"
        className="p-2 bg-green-600 rounded-lg border border-white hover:bg-green-500 transition"
      >
        Termos e condições de uso
      </Link>

      <Link
        href="/auth-pages/pt-br/legal/policy-intellectual-property"
        className="p-2 bg-green-600 rounded-lg border border-white hover:bg-green-500 transition"
      >
        Política de Propriedade Intelectual
      </Link>

      <Link
        href="/auth-pages/pt-br/legal/privacy-policy"
        className="p-2 bg-green-600 rounded-lg border border-white hover:bg-green-500 transition"
      >
        Política de privacidade
      </Link>

      <Link
        href="/auth-pages/pt-br/legal/user-guidelines"
        className="p-2 bg-green-600 rounded-lg border border-white hover:bg-green-500 transition"
      >
        Diretrizes do Usuário
      </Link>

      <Link
        href="/auth-pages/pt-br/legal/premium-offer-terms"
        className="p-2 bg-green-600 rounded-lg border border-white hover:bg-green-500 transition"
      >
        Termos da Oferta do Premium
      </Link>
    </div>
  );
}
