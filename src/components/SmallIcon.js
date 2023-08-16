import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

export default function SmallIcon() {
    return(
        <>
            <img src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/a0a54c894f8c91f1cf492fe69dd4059bb3b46735/src/images/logo-no-background.svg" />
        </>
    )
}
