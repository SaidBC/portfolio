"use client";

import { useCallback, useState } from "react";
import BurgerIcon from "./BurgerIcon";
import Links from "./Links";
import XmarkIcon from "./XmarkIcon";

export default function HamburgerMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = useCallback(() => {
    console.log("clicked");
    setIsMenuOpen(!isMenuOpen);
  }, [isMenuOpen]);
  return (
    <nav className="sm:hidden">
      <button
        onClick={handleToggleMenu}
        className="p-2 rounded-sm bg-white/30 backdrop-filter backdrop-blur-lg border-1 ml-auto block shadow-2xl"
      >
        <BurgerIcon />
      </button>
      <dialog open={isMenuOpen}>
        <div className="animate-toLeft fixed top-0 left-0 bg-black w-full h-full text-white">
          <div className="w-full p-8">
            <button onClick={handleToggleMenu} className="ml-auto block">
              <XmarkIcon />
            </button>
          </div>
          <div className="pt-24">
            <Links
              onClick={(e) => {
                if (e.target instanceof HTMLAnchorElement) setIsMenuOpen(false);
              }}
              className="flex flex-col gap-12 font-bold text-2xl items-center"
            />
          </div>
        </div>
      </dialog>
    </nav>
  );
}
