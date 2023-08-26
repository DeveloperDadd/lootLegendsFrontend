import React from "react";
import SmallIcon from './SmallIcon.js';
import Button from './Button.js';

export default function Navbar({ onPageChange }) {
  return (
    <div className="nav">
        <SmallIcon />
        <div className="buttonsList">
          <Button onPageChange={onPageChange}/>
        </div>
    </div>
  );
}