import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import SmallIcon from './SmallIcon.js';
import Button from './Button.js';

export default function Navbar() {
  const [state, dispatch] = useGlobalState();
  return (
    <div className="nav">
        <SmallIcon />
        <div className="buttonsList">
          <Button text="About Us"/>
          <Button text="Sign in" />
          <img className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/house-solid.svg" />
          <img className="icon" src="https://raw.githubusercontent.com/DeveloperDadd/lootLegendsFrontend/c7e657337c24258e72a3a3d3d5cd98e416f134de/src/images/user-solid.svg" />
        </div>
    </div>
  );
}