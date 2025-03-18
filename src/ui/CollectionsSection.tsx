import CollectionItem from "./CollectionItem";

export default function CollectionsSection() {
  return (
    <section
      id="collection"
      className="row-start-4 col-span-12  mt-20 flex flex-col gap-16"
    >
      <h1 className="text-4xl text-center">COLLECTIONS</h1>
      <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-12 gap-x-4 gap-y-12 justify-items-center">
        <CollectionItem
          className="w-54 h-54"
          imagesUrl={["/tictactoe.png", "/snakegame.png"]}
          name="Game developments"
        />
        <CollectionItem
          imagesUrl={["/twallet.png", "/chatyverse.png"]}
          name="Web developments"
        />
        <CollectionItem
          imagesUrl={["/instagramclone.png"]}
          name="Cloning websites"
        />
      </div>
    </section>
  );
}
