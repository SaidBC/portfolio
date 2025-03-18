import HamburgerMenu from "./HamburgerMenu";
import Links from "./Links";

export default function Header() {
  return (
    <header className="sticky col-start-2 lg:col-start-3 lg:col-end-11 col-end-12 sm:bg-white/30 sm:backdrop-filter sm:backdrop-blur-lg sm:border-1 sm:border-gray-300 h-15 sm:rounded-full mt-10 top-10 z-9999">
      <nav className="hidden w-full h-full sm:flex justify-center items-center">
        <Links className="w-full flex justify-around" />
      </nav>
      <HamburgerMenu />
    </header>
  );
}
