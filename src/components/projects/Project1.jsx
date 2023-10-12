import { useEffect } from "react";
import { ProjectHeader } from "../ProjectHero";

export const Project1 = (props) => {
    const { archiveProjectId } = props;

    useEffect(() => {
        console.log(archiveProjectId)
    }, [archiveProjectId])

    if (archiveProjectId === 1) {


        return (
            <>
                <ProjectHeader
                    title="Project Test"
                    date="2022"
                    location="University College London"
                    course="Individual Course Project"
                    role="Role: Augmented Reality Prototyper"
                    description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. "
                />
                <div className="absolute h-screen" >
                    <div className="absolute h-20 bg-gradient-to-t from-white ... w-screen bottom-0">
                        <div className="bg-white w-screen mt-20">
                            <p>this is a test</p>
                            <br></br>
                        </div>
                    </div>

                </div>



            </>
        )
    } else {
        return null;
    }
};