import { Html, useScroll } from "@react-three/drei";
import { ProjectManager } from "./ProjectManager";

export const HtmlWrapper = (props) => {
  const { currentSection, projectOpened, setProjectOpened, archiveProjectId, setArchiveProjectId, openProject, setOpenProject } = props;

  const scrollData = useScroll();

  if (!projectOpened) {
    return null;
  }

  return (
    <>
      <mesh>
        <Html className="overflow-y-auto" occlude center onOcclude={setProjectOpened} portal={{ current: scrollData.fixed }}
          style={{
            transition: 'all 0.5s',
            width: '100vw',
            height: '100vh',
            // backgroundColor: 'rgba(255, 255, 255, 0.2)',
            // opacity: `${projectOpened ? 1: 0}`,
            position: 'fixed !important',
            // transform: `scale(${hidden ? 0.5 : 1})`
          }}>
          <div
          // onPointerDown={(e) => e.stopPropagation()}
          >
            <ProjectManager currentSection={currentSection} projectOpened={projectOpened} setProjectOpened={setProjectOpened} archiveProjectId={archiveProjectId} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />
          </div>
        </Html>
      </mesh>
    </>
  );
}