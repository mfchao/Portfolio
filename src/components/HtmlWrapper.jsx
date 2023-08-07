import { Html, useScroll } from "@react-three/drei";
import { ProjectManager } from "./ProjectManager";

export const HtmlWrapper = (props) => {
    const { currentSection, projectOpened, setProjectOpened } = props; 

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
                width: '334px',
                height: '216px',
                background: 'white',
                // opacity: `${projectOpened ? 1: 0}`,
                position: 'fixed !important',
                // transform: `scale(${hidden ? 0.5 : 1})`
              }}>
                <div 
                onPointerDown={(e) => e.stopPropagation()}
                >
              <ProjectManager currentSection={currentSection} projectOpened={projectOpened} setProjectOpened={setProjectOpened}/>
              </div>
            </Html>
      </mesh>
        </>
    );
}