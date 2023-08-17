import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";
import SmallIcon from './SmallIcon.js';
import Button from './Button.js';

export default function Navbar({ onPageChange }) {
  const [state, dispatch] = useGlobalState();
  return (
    <div className="nav">
        <SmallIcon />
        <div className="buttonsList">
          <Button onPageChange={onPageChange}/>
        </div>
    </div>
  );
}