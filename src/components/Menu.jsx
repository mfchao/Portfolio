import { useScroll } from "@react-three/drei";
import logo from "/images/icons/logo.svg";
import { useEffect, useState } from "react";


export const Menu = (props) => {
  const { onSectionChange, menuOpened, setMenuOpened, currentSection, windowWidth, projectOpened } = props;

  const [menuOpacity, setMenuOpacity] = useState(0);

  // Use useEffect to update opacity based on menuOpened state
  useEffect(() => {
    // Set opacity to 1 when menu is opened, 0 otherwise
    setMenuOpacity(menuOpened ? 1 : 0);
  }, [menuOpened]);

  return (
    <>
      <QuestionMark projectOpened={projectOpened} windowWidth={windowWidth} />

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
        className={`z-10 fixed justify-center top-0 right-0 bottom-0 overflow-hidden flex flex-col ease-in-out 
        ${menuOpened ? "w-screen opacity-100 [transition:opacity_3s,width_0.4s]" : "w-0 opacity-0 [transition:opacity_0.5s,width_0.4s]"}`}
      >
        <div className={`z-30 flex justify-between m-4 ${windowWidth < 765 ? "flex-col" : "flex-row"}`}>
          <MenuButton label="HOME" onClick={() => onSectionChange(0)} isActive={currentSection === 0} />
          <MenuButton label="ABOUT" onClick={() => onSectionChange(1)} isActive={currentSection === 1} />
          <MenuButton label="HIGHLIGHTS" onClick={() => onSectionChange(2)} isActive={currentSection >= 2 && currentSection <= 7} />
          <MenuButton label="FEATURED" onClick={() => onSectionChange(9)} isActive={currentSection >= 8} />
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
        <Line onClick={() => onSectionChange(9)} isLong={currentSection > 8} />
      </div>

      {/* <div className={`svgHero max-w-2xl fixed bottom-5 left-1/2 mb-12 `}>
        <svg width="24" height="54" viewBox="0 0 24 54" fill="none" xmlns="http://www.w3.org/2000/svg" role="img">
          <rect x="1" y="1" width="22" height="34" rx="11" stroke="black" strokeWidth="2" />
          <line x1="12.3" y1="10.3" x2="12.3" y2="17.7" stroke="black" strokeWidth="2.6" strokeLinecap="round" />
          <path d="M8 42L12.6467 46.3333L17.1481 42" stroke="black" strokeWidth="2" strokeLinecap="round" />
          <path d="M8 48.2592L12.6467 52.5926L17.1481 48.2592" stroke="black" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div> */}
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

const QuestionMark = (props) => {
  const { projectOpened, windowWidth } = props;

  const [isHovered, setHovered] = useState(false);
  const handleClick = () => {
    setHovered(!isHovered);
  };

  return (
    <>
      <div
        className={`svg-question-container ${projectOpened ? "hidden" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={handleClick}
      >
        <svg className="svg-question" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="22.5" cy="22.5" r="21.5" stroke="black" strokeOpacity="0.3" strokeWidth="2" />
          <path d="M20.5 26.9801V26.8182C20.5114 25.7614 20.6165 24.9205 20.8153 24.2955C21.0199 23.6705 21.3097 23.1648 21.6847 22.7784C22.0597 22.392 22.5114 22.0398 23.0398 21.7216C23.3807 21.5057 23.6875 21.2642 23.9602 20.9972C24.233 20.7301 24.4489 20.4233 24.608 20.0767C24.767 19.7301 24.8466 19.3466 24.8466 18.9261C24.8466 18.4205 24.7273 17.983 24.4886 17.6136C24.25 17.2443 23.9318 16.9602 23.5341 16.7614C23.142 16.5568 22.7045 16.4545 22.2216 16.4545C21.7841 16.4545 21.3665 16.5455 20.9688 16.7273C20.571 16.9091 20.2415 17.1932 19.9801 17.5795C19.7188 17.9602 19.5682 18.4517 19.5284 19.054H16.9375C16.9773 18.0312 17.2358 17.1676 17.7131 16.4631C18.1903 15.7528 18.821 15.2159 19.6051 14.8523C20.3949 14.4886 21.267 14.3068 22.2216 14.3068C23.267 14.3068 24.1818 14.5028 24.9659 14.8949C25.75 15.2812 26.358 15.8239 26.7898 16.5227C27.2273 17.2159 27.446 18.0256 27.446 18.9517C27.446 19.5881 27.3466 20.1619 27.1477 20.6733C26.9489 21.179 26.6648 21.6307 26.2955 22.0284C25.9318 22.4261 25.4943 22.7784 24.983 23.0852C24.5 23.3864 24.108 23.6989 23.8068 24.0227C23.5114 24.3466 23.2955 24.7301 23.1591 25.1733C23.0227 25.6165 22.9489 26.1648 22.9375 26.8182V26.9801H20.5ZM21.7869 32.1619C21.321 32.1619 20.9205 31.9972 20.5852 31.6676C20.25 31.3324 20.0824 30.929 20.0824 30.4574C20.0824 29.9915 20.25 29.5937 20.5852 29.2642C20.9205 28.929 21.321 28.7614 21.7869 28.7614C22.2472 28.7614 22.6449 28.929 22.9801 29.2642C23.321 29.5937 23.4915 29.9915 23.4915 30.4574C23.4915 30.7699 23.4119 31.0568 23.2528 31.3182C23.0994 31.5739 22.8949 31.7784 22.6392 31.9318C22.3835 32.0852 22.0994 32.1619 21.7869 32.1619Z" fill="black" fillOpacity="0.3" />
        </svg>

      </div>
      <p className={` question-text ${isHovered ? 'visible' : ''}  ${projectOpened ? "hidden" : ""} ${windowWidth < 765 ? "w-36" : ""}`}>Click the red titles to explore the projects, and <strong>keep scrolling</strong> to continue the journey! </p>
    </>
  );
};
