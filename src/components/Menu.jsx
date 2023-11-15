import { useScroll } from "@react-three/drei";
import logo from "../../images/icons/logo.svg";
import { useEffect, useState } from "react";

export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, currentSection, windowWidth, projectOpened } = props;

  return (
    <>
      <img
        src={logo}
        className={`fixed z-20 bottom-12 right-12 ${menuOpened ? "scale-[1.2]" : "scale-[0.7]"} transition-all ${windowWidth < 765 && projectOpened ? "hidden" : ""}`}
        onClick={() => onSectionChange(0)}
      />

      <button
        onClick={() => setMenuOpened(!menuOpened)}
        className={`z-20 fixed top-12 right-12 p-3 w-11 h-11 rounded-md ${windowWidth < 765 ? "drop-shadow-2xl" : "drop-shadow-none"}`}
      >
        <div
          className={`bg-black h-0.5 rounded-md w-full transition-all ${menuOpened ? "rotate-45 translate-y-0.5" : ""
            }`}
        />
        <div
          className={`bg-black h-0.5 rounded-md w-full my-1 ${menuOpened ? "hidden" : ""
            }`}
        />
        <div
          className={`bg-black h-0.5 rounded-md w-full transition-all ${menuOpened ? "-rotate-45" : ""
            }`}
        />
      </button>

      <div
        className={`z-10 fixed justify-center top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col  ease-in-out duration-700
        ${menuOpened ? "w-screen" : "w-0"}`}
      >
        <div className={`z-30 flex justify-between m-4 ${windowWidth < 765 ? "flex-col" : "flex-row"}`}>
          <MenuButton label="HOME" onClick={() => onSectionChange(0)} isActive={currentSection === 0} />
          <MenuButton label="ABOUT" onClick={() => onSectionChange(1)} isActive={currentSection === 1 || currentSection === 2} />
          <MenuButton label="HIGHLIGHTS" onClick={() => onSectionChange(3)} isActive={currentSection >= 3 && currentSection <= 7} />
          <MenuButton label="ARCHIVE" onClick={() => onSectionChange(9)} isActive={currentSection >= 8 && currentSection <= 9} />
        </div>

        <div className={`absolute SF-Compact-Semibold bottom-12 left-12 ${windowWidth < 765 ? "text-xs" : "text-base"}`}>
          <a href="https://www.instagram.com/mchaodesign/" target="_blank" className="hover:text-rose-700 transition-colors">INSTAGRAM</a><br />
          <a href="https://www.linkedin.com/in/mfchao" target="_blank" className="hover:text-rose-700 transition-colors">LINKEDIN</a>
          <p className="hover:text-rose-700 transition-colors">617-417-9866</p>
          <p className="hover:text-rose-700 transition-colors">MAGGIECHAO@GSD.HARVARD.EDU</p>
        </div>
      </div>

      {/* progress lines */}
      <div className={`transition-all fixed bottom-0 left-0 flex flex-row m-12 items-end 
        ${menuOpened || windowWidth < 765 && projectOpened ? "hidden" : ""} `}>
        <Line onClick={() => onSectionChange(0)} isLong={currentSection === 0} />
        <Line onClick={() => onSectionChange(1)} isLong={currentSection === 1} />
        <Line onClick={() => onSectionChange(2)} isLong={currentSection === 2} />
        <Line onClick={() => onSectionChange(3)} isLong={currentSection === 3} />
        <Line onClick={() => onSectionChange(4)} isLong={currentSection === 4} />
        <Line onClick={() => onSectionChange(5)} isLong={currentSection === 5} />
        <Line onClick={() => onSectionChange(6)} isLong={currentSection === 6} />
        <Line onClick={() => onSectionChange(7)} isLong={currentSection === 7} />
        <Line onClick={() => onSectionChange(8)} isLong={currentSection === 8} />
        <Line onClick={() => onSectionChange(9)} isLong={currentSection === 9} />
      </div>
    </>);
}


const MenuButton = (props) => {
  const { label, onClick, isActive } = props;

  return (
    <button
      onClick={onClick}
      className={`z-30 text-2xl font-bold SF-Compact-Bold m-7 cursor-pointer hover:text-rose-700 transition-colors 
        ${isActive ? "text-stroke-1 text-transparent" : ""}`}
    >
      {label}
    </button>
  );
};


const Line = (props) => {
  const { onClick, isLong } = props;

  return (
    <button
      onClick={onClick}
      className={`w-px transition-all m-1.5 ease-in-out duration-1000
        ${isLong ? "h-8 bg-black" : "h-5 bg-gray-400"}`}
    >
    </button>
  );
};


