import React from "react";
import SmallIcon from './SmallIcon.js';
import Button from './Button.js';

export default function Navbar({ onPageChange }) {
  return (
    <div>
        <SmallIcon className="img-fluid" />
        <div className="buttonsList">
          <Button onPageChange={onPageChange}/>
        </div>
    </div>
  );
}