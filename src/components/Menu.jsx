import { useScroll } from "@react-three/drei";
import logo from "./logo.svg";
import { useEffect, useState } from "react";

export const Menu = (props) => {
    const { onSectionChange, menuOpened, setMenuOpened, currentSection} = props;

    

    return (
    <>
        <img
        src={logo}
        className={`fixed z-20 bottom-12 right-12 ${menuOpened ? "scale-[1.2]" : "scale-[0.7]"} transition-all`}
        />

        <button
        onClick={() => setMenuOpened(!menuOpened)}
        className="z-20 fixed top-12 right-12 p-3 w-11 h-11 rounded-md"
        >
            <div
            className={`bg-black h-0.5 rounded-md w-full transition-all ${
                menuOpened ? "rotate-45 translate-y-0.5" : ""
            }`}
            />
            <div
            className={`bg-black h-0.5 rounded-md w-full my-1 ${
                menuOpened ? "hidden" : ""
            }`}
            />
            <div
            className={`bg-black h-0.5 rounded-md w-full transition-all ${
                menuOpened ? "-rotate-45" : ""
            }`}
            />
        </button>

        <div
        className={`z-10 fixed justify-center top-0 right-0 bottom-0 transition-all overflow-hidden flex flex-col  
        ${menuOpened ? "w-screen" : "w-0"}`}
        >
            <div className="z-30 flex justify-between m-4 ">
            <MenuButton label="HOME" onClick={() => onSectionChange(0)} isActive={ currentSection === 0 }/>
            <MenuButton label="ABOUT" onClick={() => onSectionChange(1)} isActive={currentSection === 1 || currentSection === 2}/>
            <MenuButton label="HIGHLIGHTS" onClick={() => onSectionChange(3)} isActive={currentSection >= 3 && currentSection <= 7}/>
            <MenuButton label="ARCHIVE" onClick={() => onSectionChange(9)} isActive={currentSection >= 8 && currentSection <= 9}/>
            </div>

            <div className="absolute SF-Compact-Semibold bottom-12 left-12">
            <a href="https://www.instagram.com/mchaodesign/" target="_blank" className="hover:text-rose-700 transition-colors">INSTAGRAM</a>
            <a href="https://www.linkedin.com/in/mfchao" target="_blank" className="hover:text-rose-700 transition-colors">LINKEDIN</a>
            <p className="hover:text-rose-700 transition-colors">617-417-9866</p>
            <p className="hover:text-rose-700 transition-colors">MAGGIECHAO@GSD.HARVARD.EDU</p>
             </div>
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