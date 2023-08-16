import React from "react";
import Link from "next/link";
import { useGlobalState } from "../context/GlobalState";
import { useRouter } from "next/navigation";

export default function Header() {
  const [state, dispatch] = useGlobalState();

  return (
    <div>
        <h1>Loot Legends</h1>
    </div>
  );
}