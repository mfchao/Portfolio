import { ProjectHeader } from "../ProjectHero";

export const Skills = (props) => {
    const { openProject } = props;

    if (openProject === "skills") {
        return (
            <div className="flex justify-evenly items-center min-h-screen mx-52">
                <div className="w-1/2 mx-auto ">
                    <h2> Areas of Focus:</h2>
                    <ul>
                        <li>Web/App Development</li>
                        <li>UX/UI Design</li>
                        <li>AR/VR Prototyping</li>
                        <li>Machine Learning Engineering</li>
                    </ul>
                </div>
                <div className="w-1/2 mx-auto flex flex-col">
                    <h2 className=" mb-4"> Top Skills:</h2>
                    <div className="grid grid-cols-3 gap-6">
                        <div>
                            <h3 className="list-inside">Programming: </h3>
                            <ul>
                                <li>Python</li>
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>C#</li>
                                <li>C</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="list-inside">Web Development:</h3>
                            <ul>
                                <li>React</li>
                                <li>Three.js</li>
                                <li>HTML + CSS</li>
                                <li>Node.js</li>
                                <li>Vue</li>
                                <li>Full Stack</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="list-inside">Software:</h3>
                            <ul>
                                <li>Unity</li>
                                <li>Adobe Creative Cloud</li>
                                <li>Figma</li>
                                <li>Rhino + Grasshopper</li>
                                <li>Arduino</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )



    } else {
        return null;
    }
};