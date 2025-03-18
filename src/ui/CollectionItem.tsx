import ImageLayer from "./ImageLayer";

interface CollectionItemProps {
  className?: string;
  name: string;
  imagesUrl?: string[];
}

export default function CollectionItem({
  className,
  name,
  imagesUrl,
}: CollectionItemProps) {
  return (
    <div className="col-span-4 bg-[#202020] rounded-4xl max-w-md w-full">
      <div className="w-full h-56 bg-[#3F3F3F] rounded-4xl relative">
        {imagesUrl?.map((url, index) => {
          return (
            <ImageLayer
              className={className}
              index={index}
              key={url}
              src={url}
            />
          );
        })}
      </div>
      <div className="w-full text-center py-3">
        <h2>{name}</h2>
      </div>
    </div>
  );
}
