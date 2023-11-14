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
            position: 'fixed !important',
          }}>
          <div
          // onPointerDown={(e) => e.stopPropagation()}
          >
            <ProjectManager setProjectOpened={setProjectOpened} archiveProjectId={archiveProjectId} setArchiveProjectId={setArchiveProjectId} openProject={openProject} setOpenProject={setOpenProject} />
          </div>
        </Html>
      </mesh>
    </>
  );
}