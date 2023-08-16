import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

export default function Button(props) {
    return(
        <>
            <button>{props.text}</button>
        </>
    )
}