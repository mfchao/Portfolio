import { DeepFacade } from "./projects/DeepFacade";
import { Echo } from "./projects/Echo";
import { Nosakhari } from "./projects/Nosakhari";
import { Ascer } from "./projects/Ascer";
import { Skills } from "./projects/Skills";
import { TangibleIdeas } from "./projects/TangibleIdeas";
import { Temples } from "./projects/Temples";
import { Cuttlefish } from "./projects/Cuttlefish";
import { Droop } from "./projects/Droop";
import { UCLAssistant } from "./projects/UCLAssistant";
import { GreeningCities } from "./projects/GreeningCities";
import { NeuralSynesthesia } from "./projects/NeuralSynesthesia";
import { FlowScape } from "./projects/FlowScape";
import { Always } from "./projects/Always";
import { FooBot } from "./projects/FooBot";
import { SpotLite } from "./projects/SpotLite";



export const ProjectManager = (props) => {
    const { currentSection, projectOpened, setProjectOpened, archiveProjectId, setArchiveProjectId, openProject, setOpenProject } = props;

    const handleClick = () => {
        setOpenProject(null);
        setProjectOpened(false);
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
                    <Nosakhari currentSection={currentSection} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />
                    <DeepFacade currentSection={currentSection} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />
                    <Temples currentSection={currentSection} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />
                    <TangibleIdeas currentSection={currentSection} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />

                    <Ascer archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <Cuttlefish archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <Droop archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <UCLAssistant archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <GreeningCities archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <NeuralSynesthesia archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <FlowScape archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <Always archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <FooBot archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />
                    <SpotLite archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} />

                </div>




            </div>
        </>);
}





