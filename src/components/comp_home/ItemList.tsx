import SingleItem from "./SingleItem";

interface ItemListProps {
  title: string;
  description: string;
  items: number;
  itemsArray: Array<any>;  // Corrigido para Array<any>, pois `itemsArray` é uma lista de objetos
  path: string;
  idPath: string;
  typeItem: string;
}

export default function ItemList({ title,description,typeItem, items, itemsArray, idPath }: ItemListProps) {
  return (
    <div className="bg-zinc-700/40 backdrop-blur-sm rounded-md p-5 m-5">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-3">
        {itemsArray
          .filter((currentValue, index) => index < items)
          .map((currObj, index) => (
            <SingleItem
              idPath={idPath}
              {...currObj}
              type = {typeItem}
              key={`${title}-${index}`}
            />
          ))}
      </div>
    </div>
  );
}
