import { Echo } from "./projects/Echo";
import { Nosakhari } from "./projects/Nosakhari";
import { Project1 } from "./projects/Project1";
import { Skills } from "./projects/Skills";



export const ProjectManager = (props) => {
    const { currentSection, projectOpened, setProjectOpened, archiveProjectId, setArchiveProjectId, openProject, setOpenProject } = props;

    const handleClick = () => {
        setOpenProject(null);
        setProjectOpened(false)
        setArchiveProjectId(null);
    };

    return (
        <>
            <div
                className={`z-10 relative transition-all ease-in-out duration-700 `}
            >
                <button className={`z-30 fixed top-12 left-12 SF-Compact-Light text-sm cursor-pointer text-rose-600 hover:text-rose-300 transition-colors`}
                    onClick={handleClick}>
                    BACK
                </button>

                <div className={`absolute top-0 left-0 w-screen h-screen overflow-y-scroll transition-all ease-in-out duration-700 `}>
                    <Skills currentSection={currentSection} openProject={openProject} />
                    <Echo currentSection={currentSection} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />
                    <Project1 archiveProjectId={archiveProjectId} />
                    <Nosakhari currentSection={currentSection} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />

                </div>




            </div>
        </>);
}





