"use client";

import { useEffect } from "react";
import { devInfos } from "../constants/data";

export const DevInfos = () => {
    useEffect(() => {
        console.clear();
        console.groupCollapsed("Dev infos");
        console.log("Name :", devInfos().name);
        console.log("Email :", devInfos().email);
        console.groupEnd();
    }, []);
    
    return null;
}