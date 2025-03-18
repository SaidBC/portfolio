import Links from "./Links";
import Media from "./Media";

export default function Footer() {
  return (
    <footer className="w-full bg-[#202020] rounded-t-[5rem] pt-10 pb-6">
      <div className="grid grid-cols-12 max-w-5xl mx-auto gap-8 md:gap-4">
        <div className="col-span-12 md:col-span-6 grid grid-cols-12  gap-4">
          <div className="col-start-3 md:col-start-5 col-span-12">
            <h1 className="text-3xl font-bold">Said Rezzouq</h1>
          </div>
          <Links className="col-start-3 md:col-start-8 font-semibold flex md:flex-col gap-y-1 gap-x-3" />
        </div>
        <div className="col-start-3 md:col-start-7 md:col-end-13 col-end-10 flex flex-col gap-4 justify-center">
          <Media />
          <p>All copyright reserved , 2025 ©</p>
        </div>
      </div>
    </footer>
  );
}
