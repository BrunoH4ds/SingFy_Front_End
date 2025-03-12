import SingleItem from "@/components/comp_home/SingleItem";

export interface genderPropsList {
  genderArray: Array<any>;
}

export default function GenderList({ genderArray }: genderPropsList) {
  return (
    <div className="flex flex-col justify-center p-5 bg-zinc-700/40 mt-4 rounded-md">
      <h1 className="text-3xl font-bold">Musicas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
        {genderArray.map((songObj) => (
          <div key={songObj._id}>
            <SingleItem
              idPath={"song"}
              {...songObj}
              type={"songs"}
              key={`${songObj._id}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
