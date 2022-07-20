import React from "react";
import "./Menu.css";

function Menu({ itemOfMenu, children }) {
  return (
    <div>
      {itemOfMenu.map((elt) => (
        <>
          <p key={elt.id} className="item">
            {elt.title}
          </p>
        </>
      ))}
    </div>
  );
}

export default Menu;
