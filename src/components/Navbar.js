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
          <Button classname="button1" text="About Us"/>
          <Button className="button3" text="Sign in" />
        </div>
    </div>
  );
}