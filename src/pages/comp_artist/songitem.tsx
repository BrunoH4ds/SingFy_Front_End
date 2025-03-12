import Link from "next/link";

interface SongItemProps {
  image: string;
  name: string;
  duration: string;
  _id: string;
}

export default function SongItem({image, name, duration, _id}: SongItemProps) {
  return (
    <Link href={`/song/${_id}`}>
      <div className="flex flex-row mt-5 transition hover:bg-green-500/40 hover:backdrop-blur-sm p-2 rounded-md">
        <img
          className="object-cover w-[100px] h-[100px] mr-3 rounded-md"
          src={image}
          alt={name}
        />
        <div className="flex flex-1 justify-between items-center">
          <h2 className="text-2xl">{name}</h2>
          <h2 className="text-2xl hidden sm:flex">{duration}</h2>
        </div>
      </div>
    </Link>
  );
}
