import ContainerLayout from "./Components/ContainerLayout";
import clearImage from "./icons/ClearIcon.png";
import copyImage from "./icons/CopyIcon.jpg";
import Menu from "./Components/Menu/Menu";
import { useState } from "react";
import { units, itemOfMenuInitial } from "./data.js";

const containerOfLayoutStyle = {
  width: "1463px",
  height: "931px",
  backgroundColor: "#FFFFFF",
  borderRadius: "10px",
};
const pageContainerStyle = {
  position: "relative",
  width: "1556px",
  height: "1007px",
  backgroundColor: "#D9D9D9",
  borderRadius: "10px",
  padding: "38px 58px 38px 35px",
  top: "0",
  left: "0",
};
const menuStyle = {
  width: "214px",
  position: "absolute",
  left: "100px",
  top: "68px",
};

function App() {
  const [itemOfMenu, setItemOfMenu] = useState(itemOfMenuInitial);

  return (
    <div style={pageContainerStyle}>
      <div style={containerOfLayoutStyle}>
        <div style={menuStyle}>
          <Menu itemOfMenu={itemOfMenu} />
        </div>
        <ContainerLayout
          units={units}
          imageOne={{ icon: clearImage, name: "clear-image" }}
          imageTwo={{ icon: copyImage, content: "copy-image" }}
        />
      </div>
    </div>
  );
}

export default App;
