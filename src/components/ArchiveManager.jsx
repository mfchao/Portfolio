import { Link, Routes, Route, NavLink } from "react-router-dom";
import { Archive } from "./Archive";
import { Project1 } from "./projects/Project1";
import React from "react";
import { ArchiveHome } from "./ArchiveHome";
import { useState } from "react";


export const ArchiveManager = (props) => {
    const { currentSection } = props;

    // if (currentSection >= 9) {


    return (
        <>
            {/* <NavLink to={"/ArchiveHome"}>Back</NavLink> */}


            {/* <ArchiveHome /> */}
            <Archive currentSection={currentSection} currentProjectId={currentProjectId} />
            <Project1 />


        </>
    );
    // }
}