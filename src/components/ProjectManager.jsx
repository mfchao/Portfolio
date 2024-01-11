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
import { Prosthetics } from "./projects/Prosthetics";
import { EMotion } from "./projects/EMotion";
import { MappingMinds } from "./projects/MappingMinds";
import { TangibleNotes } from "./projects/TangibleNotes";



export const ProjectManager = (props) => {
    const { setProjectOpened, archiveProjectId, setArchiveProjectId, openProject, setOpenProject, windowWidth } = props;

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
                <button className={`z-30 fixed top-14 left-12 SF-Compact-Light text-sm cursor-pointer text-rose-600 hover:text-rose-300 transition-colors  ${windowWidth < 765 ? "drop-shadow-2xl" : "drop-shadow-none"}`}
                    onClick={handleClick}>
                    BACK
                </button>

                <div className={`absolute top-0 left-0 w-screen h-screen overflow-y-scroll transition-all ease-in-out duration-700 `}>
                    <Skills openProject={openProject} windowWidth={windowWidth} />
                    <Echo setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} windowWidth={windowWidth} />
                    <Nosakhari setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} windowWidth={windowWidth} />
                    <DeepFacade setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} windowWidth={windowWidth} />
                    <Temples setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} windowWidth={windowWidth} />
                    <TangibleIdeas setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} windowWidth={windowWidth} />

                    <Ascer archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <Cuttlefish archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <Droop archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <UCLAssistant archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <GreeningCities archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <NeuralSynesthesia archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <FlowScape archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <Always archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <FooBot archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <SpotLite archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <Prosthetics archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <EMotion archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <MappingMinds archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                    <TangibleNotes archiveProjectId={archiveProjectId} setProjectOpened={setProjectOpened} setArchiveProjectId={setArchiveProjectId} windowWidth={windowWidth} />
                </div>




            </div>
        </>);
}





