import {
  IconBrandApple,
  IconBrandFacebook,
  IconBrandGoogle,
  IconPhone,
} from "@tabler/icons-react";

export default function ButtonsLinkedList() {
  return (
    <div className="flex flex-col w-2/3">
      <button className="flex justify-center items-center gap-2 m-2 p-2 border border-green-600 hover:bg-green-500 hover:border-green-500 rounded-3xl bg-zinc-800/40">
        <IconBrandGoogle /> Google
      </button>
      <button className="flex justify-center items-center gap-2 m-2 p-2 border border-green-600 hover:bg-green-500 hover:border-green-500 rounded-3xl bg-zinc-800/40">
        <IconBrandFacebook /> Facebook
      </button>
      <button className="flex justify-center items-center gap-2 m-2 p-2 border border-green-500 hover:bg-green-500 hover:border-green-500 rounded-3xl bg-zinc-800/40">
        <IconBrandApple /> Apple
      </button>
      <button className="flex justify-center items-center gap-2 m-2 p-2 border border-green-600 hover:bg-green-500 hover:border-green-500 rounded-3xl bg-zinc-800/40">
        <IconPhone /> Numero de telefone
      </button>
    </div>
  );
}
