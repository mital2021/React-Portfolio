import React from "react";
import { capitalizeFirstLetter } from "../../utils/helper";

function Nav() {
  const  categories = [
    { name: 'PORTFOLIO', description: 'Portraits of people in my life' },
    { name: 'RESUME', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' }
  ];
const handleClick = () => {
    console.log("click handled")
  }
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
              CONTACT
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