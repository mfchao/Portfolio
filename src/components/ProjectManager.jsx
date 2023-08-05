import { Echo } from "./projects/Echo";

export const ProjectManager = (props) => {
    const { currentSection, projectOpened, setProjectOpened } = props;    

    return (
    <>
        <div
        className={`z-10 absolute top-0 left-0 transition-all overflow-hidden ease-in-out duration-700 h-screen
        ${projectOpened ? "w-screen" : "w-0"}`}
        >
            <button className={`fixed top-12 left-12 SF-Compact-Light text-sm cursor-pointer hover:text-rose-700 transition-colors
            ${projectOpened ? "" : "hidden"}`}
            onClick={() => setProjectOpened(false)}>
                BACK
            </button>

            <div className={`absolute top-[25%] left-[28%] ${currentSection === 4 ? "" : "hidden"}`}>
                <ProjectHeader 
                title="Introducing Echo" 
                date="2022"
                location="University College London"
                course="Individual Course Project"
                role="Role: Augmented Reality Prototyper"
                description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                />
                <Echo/>
            </div>

            <div className="absolute bottom-[15%] left-[28%] SF-Compact-Medium text-rose-700">
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

const ProjectHeader = (props) => {
    const { title, date, location, course, role, description } = props;
  
    return (
        <div className="text-left mb-8 top-0 left-0 ">
            <div className="text-7xl SF-Compact-Bold mb-8">
                {title}
            </div>
            <div className="text-sm SF-Compact-Thin my-px mb-8">
                <div>
                    {date}
                </div>
                <div>
                    {location}
                </div>
                <div>
                    {course}
                </div>
                <div>
                    {role}
                </div>
            </div>
            <div className="text-base SF-Compact-Light max-w-2xl">
                {description}
            </div>
        </div>
    );
  };



