import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";


export default function HeroImg() {
    return (
        <>
            <img className="heroImg" src="https://github.com/DeveloperDadd/lootLegendsFrontend/blob/main/src/images/hero%20image.png?raw=true" />
        </>
    )
}