import React, { useState } from "react";

import "./Menu.css";

function Menu({ itemOfMenu, children }) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };
  const [search, setSearch] = useState("");
  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div className="big-container-items">
      {itemOfMenu.map((elt) => (
        <>
          <p key={elt.id} className="item" onClick={handleShow}>
            {elt.title}
          </p>
          <div className="container-single-item">
            {elt.sons && show && (
              <input
                className="single-item search"
                value={search}
                placeholder="Search"
                onChange={handleChange}
              />
            )}
            {elt.sons &&
              show &&
              elt.sons
                .filter((elt) =>
                  elt.toUpperCase().includes(search.toUpperCase())
                )
                .map((elt, index) => (
                  <p className="single-item" key={index}>
                    {elt}
                  </p>
                ))}
          </div>
        </>
      ))}
    </div>
  );
}

export default Menu;
