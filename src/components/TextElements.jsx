import { editable as e } from "@theatre/r3f";
import React, { useEffect, useMemo, useState, useRef, useCallback, memo, useContext } from "react";
import { getProject, val, types } from "@theatre/core";
import fonts from "../assets/fonts";
import { Text, useCursor } from "@react-three/drei";
import { TextElementContext } from '../assets/TextElementContext';



export const TextElements = ({ setHovered, setProjectOpened, projectOpened, currentSection, openProject, setOpenProject, setProjectHovered }) => {
    const { hovered } = useContext(TextElementContext);

    useCursor(hovered);


    const [styles, setStyles] = useState({
        maxWidth: 300,
        lineHeight: 1,
        textAlign: "center",
        materialType: "MeshStandardMaterial",
        moveNumber: 0,
    });

    const [title, setTitle] = useState({
        fontSize: 0.1,
        letterSpacing: 0.05,
        font: fonts.SFCompactSemibold,
        moveNumber: 0,
    });

    const [bold, setBold] = useState({
        fontSize: 0.1,
        letterSpacing: 0.05,
        font: fonts.SFCompactBold,
        moveNumber: 0,
    });

    const [subtitle, setSubtitle] = useState({
        fontSize: 0.07,
        letterSpacing: 0.05,
        font: fonts.SFCompactLight,
        moveNumber: 0,
    });

    const [number, setNumber] = useState({
        fontSize: 0.23,
        font: fonts.SFCompactLight,
        moveNumber: 0,
    });

    useEffect(() => {
        let numberHeight = projectOpened ? 1 : 0;
        setNumber((prevNumber) => ({
            ...prevNumber,
            moveNumber: numberHeight,
        }));
    }, [projectOpened]);


    const textElements = [
        {
            key: "P0Text1",
            text: "HI I'M",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: title,
            clickable: useState(false),
        },
        {
            key: "P0Text2",
            text: "MAGGIE CHAO",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "red",
            toggleProject: false,
            props: title,
            clickable: useState(false),
        },
        {
            key: "P0Text3",
            text: "- A CREATIVE DEVELOPER AND COMPUTATIONAL DESIGNER.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P0Text4",
            text: "Scroll to explore my world",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: subtitle,
            clickable: useState(false)
        },
        {
            key: "P1Text1",
            text: "MY JOURNEY STARTED IN",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P1Text2",
            text: "COLORADO,",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P1Text3",
            text: " WHERE I GREW UP FASCINATED WITH DESIGN.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P1Text4",
            text: "Ever since a young age, I've been passionate about innovation.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: subtitle,
            clickable: useState(false)
        },
        {
            key: "P2Text1",
            text: "I MOVED TO",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P2Text2",
            text: "BANGKOK, THAILAND",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P2Text3",
            text: "WHEN I WAS 16.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P2Text4",
            text: "Since then, I've picked up",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: subtitle,
            clickable: useState(false)
        },
        {
            key: "P2Text5",
            text: "these skills",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: hovered ? "rgb(255, 45, 0)" : "rgb(213, 39, 1)",
            toggleProject: true,
            props: subtitle,
            clickable: useState(true),
            project: "skills"
        },
        {
            key: "P2Text6",
            text: "in design, computation, and fabrication.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: false,
            props: subtitle,
            clickable: useState(false)
        },
        {
            key: "P3Text1",
            text: "01.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: number,
            clickable: useState(false)
        },
        {
            key: "P3Text2",
            text: "WHILE STUDYING ARCHITECTURE IN",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P3Text3",
            text: "LONDON",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P3Text4",
            text: "AT UCL, I CREATED AN AUGMENTED REALITY",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P3Text5",
            text: "MEMORY PALACE CALLED",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P3Text6",
            text: "INTRODUCING ECHO.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: hovered ? "rgb(255, 255, 255)" : "rgb(213, 39, 1)",
            outlineWidth: hovered ? 0.008 : 0,
            outlineOpacity: hovered ? 1 : 0,
            toggleProject: true,
            props: title,
            clickable: useState(true),
            project: "echo"
        },
        {
            key: "P4Text1",
            text: "02.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: number,
            clickable: useState(false)
        },
        {
            key: "P4Text2",
            text: "IN LONDON, I CREATED EXPRESSIVE UX/UI DESIGNS FOR",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P4Text3",
            text: "NOSAKHARI",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: hovered ? "rgb(255, 255, 255)" : "rgb(213, 39, 1)",
            outlineWidth: hovered ? 0.008 : 0,
            outlineOpacity: hovered ? 1 : 0,
            toggleProject: true,
            props: title,
            clickable: useState(true),
            project: "nosakhari"
        },
        {
            key: "P5Text1",
            text: "03.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: number,
            clickable: useState(false)
        },
        {
            key: "P5Text2",
            text: "DURING MY GRADUATE STUDIES IN",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P5Text3",
            text: "BOSTON, ",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P5Text4",
            text: "I CREATED A TEXT TO FACADE AI MODEL CALLED",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P5Text5",
            text: "DEEPFACADE",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: hovered ? "rgb(255, 255, 255)" : "rgb(213, 39, 1)",
            outlineWidth: hovered ? 0.008 : 0,
            outlineOpacity: hovered ? 1 : 0,
            toggleProject: true,
            props: title,
            clickable: useState(true),
            project: "deepfacade"
        },
        {
            key: "P5Text6",
            text: "FOR A PROJECT AT",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P5Text7",
            text: "MIT.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P6Text1",
            text: "04.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: number,
            clickable: useState(false)
        },
        {
            key: "P6Text2",
            text: "AT",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P6Text3",
            text: "HARVARD GSD, ",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P6Text4",
            text: "I GAMIFIED SHOPPING REWARDS WITH AR IN THE APP",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P6Text5",
            text: "TEMPLES OF CONSUMERISM.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: hovered ? "rgb(255, 255, 255)" : "rgb(213, 39, 1)",
            outlineWidth: hovered ? 0.008 : 0,
            outlineOpacity: hovered ? 1 : 0,
            toggleProject: true,
            props: title,
            clickable: useState(true),
            project: "temples"
        },
        {
            key: "P7Text1",
            text: "05.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: number,
            clickable: useState(false)
        },
        {
            key: "P7Text2",
            text: "WHILE TAKING CLASSES AT THE",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P7Text3",
            text: "MEDIA LAB, ",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P7Text4",
            text: "I BUILT AN INTERACTIVE BRAINSTORMING TOOL CALLED",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P7Text5",
            text: "MAKING IDEAS TANGIBLE.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: hovered ? "rgb(255, 255, 255)" : "rgb(213, 39, 1)",
            outlineWidth: hovered ? 0.008 : 0,
            outlineOpacity: hovered ? 1 : 0,
            toggleProject: true,
            props: title,
            clickable: useState(true),
            project: "tangibleIdeas"
        },
        {
            key: "P8Text1",
            text: "KEEP SCROLLING TO EXPLORE MY OTHER PROJECTS ON",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P8Text2",
            text: "COMPUTATION, UX/UI,",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P8Text3",
            text: "AND",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: title,
            clickable: useState(false)
        },
        {
            key: "P8Text4",
            text: "FABRICATION.",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: bold,
            clickable: useState(false)
        },
        {
            key: "P8Text5",
            text: "<< Drag >>",
            fillOpacityState: useState(null),
            visible: useState(false),
            ref: useRef(),
            color: "black",
            toggleProject: true,
            props: subtitle,
            clickable: useState(false)
        },
    ];



    useEffect(() => {
        textElements.forEach((element) => {
            const [opacityState, setOpacityState] = element.fillOpacityState;
            const [visible, setVisibleState] = element.visible;
            const [clickable, setClickableState] = element.clickable;

            if (element.color != "black") {
                setClickableState(true);
            } else {
                setClickableState(false);
            }

            if (!opacityState) return;

            const unsubscribe = opacityState.onValuesChange((newValues) => {
                element.ref.current.fillOpacity = newValues.fillOpacity;

                if (element.ref.current.fillOpacity > 0.6) {
                    setVisibleState(true);
                } else {
                    setVisibleState(false);
                }
            });
            return unsubscribe;
        });
    }, [textElements, openProject, currentSection, hovered]);


    const handleClick = (element) => {
        setProjectOpened(true);
        setOpenProject(element.project);
    };

    const handleHover = (element) => {
        setHovered(true);
        setProjectHovered(element.project);
    };

    const handleHoverOut = (element) => {
        setHovered(false);
        setProjectHovered(null);
    };


    return (
        <>
            {textElements.map((element) => (

                <e.mesh key={element.key} theatreKey={element.key} additionalProps={{ fillOpacity: types.number(1, { nudgeMultiplier: 0.1 }) }} objRef={element.fillOpacityState[1]}>
                    <Text ref={element.ref}
                        text={element.text}
                        position={[0, element.props.moveNumber, 0]}
                        onClick={element.visible[0] && element.toggleProject && element.project && element.clickable[0] ? () => handleClick(element) : null}
                        color={element.color}
                        outlineColor={'black'}
                        outlineOpacity={element.outlineOpacity && element.visible[0] ? element.outlineOpacity : 0}
                        outlineWidth={element.outlineWidth ? element.outlineWidth : 0}
                        {...styles} {...element.props}
                        onPointerOver={element.visible[0] && element.clickable[0] && !projectOpened ? () => handleHover(element) : null}
                        onPointerOut={() => handleHoverOut(element)}
                    />
                </e.mesh>
            ))}
        </>
    )
}

