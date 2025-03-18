import technologies from "@/utils/technologies";
import LanguageItem from "./LanguageItem";

export default function TechnologiesSection() {
  return (
    <section className="row-start-3 mt-16 col-span-13 flex flex-col gap-4">
      <h1 className="text-2xl">TECHNOLOGIES :</h1>
      <div className="w-full h-20 infinity-scroll">
        <div className="relative flex gap-20 mx-auto w-10/12 items-center h-full">
          {technologies.map((tech, index) => {
            return (
              <LanguageItem
                className={
                  index >= Math.floor(technologies.length / 2)
                    ? "hidden lg:hidden"
                    : ""
                }
                delayFactor={index}
                key={tech.name}
                backdropColor={tech.backdropColor}
                src={tech.imageUrl}
              />
            );
          })}
        </div>
      </div>
      <div className="lg:hidden w-full h-20 infinity-scroll">
        <div className="relative flex gap-20 mx-auto w-10/12 items-center h-full">
          {technologies.map((tech, index) => {
            return (
              <LanguageItem
                className={
                  index <= Math.floor(technologies.length / 2) ? "hidden" : ""
                }
                delayFactor={index}
                key={tech.name}
                backdropColor={tech.backdropColor}
                src={tech.imageUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
