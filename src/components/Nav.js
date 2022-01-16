import React from "react";
import { capitalizeFirstLetter } from "../utils/helpers";

function Nav() {
 
return (
    <header data-testid="header" className="flex-row px-1">
     
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              ABOUT ME
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              CONTACT ME
            </span>
          </li>
          <li className="mx-2">
            <a href="#about" onClick={() => handleClick()}>
              PROJECTS
            </a>
          </li>
          <li className={"mx-2"}>
            <span onClick={() => handleClick()}>
              RESUME
            </span>
          </li>
          {
            categories.map((category) => (
              <li className="mx-1" key={category.name} >
                <span onClick={() => { handleClick(); }}>
                 {capitalizeFirstLetter(category.name)}
                </span>
              </li>
            ))
          }
        </ul>
      </nav>
    </header>
  );
}
export default Nav;