import { Echo } from "./projects/Echo";

export const ProjectManager = (props) => {
    const { currentSection, projectOpened, setProjectOpened } = props;    

    return (
    <>
        <div
        className={`z-10 relative transition-all ease-in-out duration-700 
       `}
        >
            <button className={`fixed top-12 left-12 SF-Compact-Light overflow-y-scroll text-sm cursor-pointer hover:text-rose-700 transition-colors
           `}
            onClick={() => setProjectOpened(false)}>
                BACK
            </button>

            <div className={`absolute top-[25%] left-[28%] overflow-y-scroll`}>
                
                <Echo currentSection={currentSection}/>
                
            </div>

            <div className="absolute bottom-[15%] left-[28%] SF-Compact-Medium text-rose-700 overflow-y-scroll">
                <p>Scroll to view project</p>
            </div>

            {/* <div className="z-30 flex justify-between m-4 ">
            <MenuButton label="HOME" onClick={() => onSectionChange(0)} isActive={ currentSection === 0 }/>
            <MenuButton label="ABOUT" onClick={() => onSectionChange(1)} isActive={currentSection === 1 || currentSection === 2}/>
            <MenuButton label="HIGHLIGHTS" onClick={() => onSectionChange(3)} isActive={currentSection >= 3 && currentSection <= 7}/>
            <MenuButton label="ARCHIVE" onClick={() => onSectionChange(9)} isActive={currentSection >= 8 && currentSection <= 9}/>
            </div>

            <div className="absolute SF-Compact-Semibold bottom-12 left-12">
            <a href="https://www.instagram.com/mchaodesign/" target="_blank" className="hover:text-rose-700 transition-colors">INSTAGRAM</a><br/>
            <a href="https://www.linkedin.com/in/mfchao" target="_blank" className="hover:text-rose-700 transition-colors">LINKEDIN</a>
            <p className="hover:text-rose-700 transition-colors">617-417-9866</p>
            <p className="hover:text-rose-700 transition-colors">MAGGIECHAO@GSD.HARVARD.EDU</p>
             </div> */}
        </div>
    </>);
}





