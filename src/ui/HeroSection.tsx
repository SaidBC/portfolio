import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="col-span-13 row-start-2  grid grid-cols-12 gap-4 items-center mt-20"
    >
      <div className="col-start-1 col-end-13 lg:col-end-5 flex flex-col gap-16">
        <div className="flex flex-col gap-4 text-center sm:text-start">
          <h1 className="text-5xl">HI THERE !</h1>
          <h2 className="text-2xl">IM FULLSTACK DEVELOPER</h2>
        </div>
        <div className="w-full grid grid-cols-2 gap-4">
          <Link
            href="#contact"
            className="flex justify-center rounded-full bg-white py-3 text-black"
          >
            CONTACT
          </Link>
          <Link
            href="#collection"
            className="flex justify-center rounded-full border-2 border-white py-3"
          >
            READ MORE
          </Link>
        </div>
      </div>
      <div className="hidden lg:block col-start-7 col-end-13">
        <Image
          className="w-full"
          src="/heroImage.png"
          alt="Hero image"
          width="525"
          height="525"
        />
      </div>
    </section>
  );
}
