import Image from "next/image";

export default function Media() {
  return (
    <div className="flex gap-4 ">
      <a
        href="https://github.com/SaidBC"
        className="bg-[#3f3f3f] w-10 h-10 rounded-full flex justify-center items-center"
      >
        <Image src="/github.png" width={32} height={32} alt="logo" />
      </a>
      <a
        href="https://www.facebook.com/profile.php?id=100037548434241"
        className="bg-[#3f3f3f] w-10 h-10 rounded-full flex justify-center items-center"
      >
        <Image src="/facebook.png" width={32} height={32} alt="logo" />
      </a>
      <a
        href="https://www.linkedin.com/in/said-razzouk-52a893292/"
        className="bg-[#3f3f3f] w-10 h-10 rounded-full flex justify-center items-center"
      >
        <Image src="/linkedin.png" width={32} height={32} alt="logo" />
      </a>
      <a
        href="https://www.fiverr.com/saidbac"
        className="bg-[#3f3f3f] w-10 h-10 rounded-full flex justify-center items-center"
      >
        <Image src="/fiverr.png" width={32} height={32} alt="logo" />
      </a>
    </div>
  );
}
