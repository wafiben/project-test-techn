import ContainerLayout from "./Components/ContainerLayout";
import clearImage from "./icons/ClearIcon.png";
import copyImage from "./icons/CopyIcon.jpg";

import Menu from "./Components/Menu/Menu";

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
  const itemOfMenu = [
    {
      id: 0,
      title: "Drilling conversions",
      sons: [
        "Mud Weight units",
        "Axial Spring Constant",
        "Axial Dampening Coef",
        "Torsional Spring Constant",
        "Pressure Gradient units",
        "Yield Slurry units",
        "Footage Cost units",
        "Dogleg units",
        "Float Rate units",
        "Drilling Rate units",
        "Weight length units",
        "Geothermal Gradient",
      ],
    },
    { id: 1, title: "Production conversions" },
    { id: 2, title: "Force and Power  conversions" },
    { id: 3, title: "Fluid conversions" },
    { id: 4, title: "Gas conversions" },
    { id: 5, title: "General conversions" },
  ];
  return (
    <div style={pageContainerStyle}>
      <div style={containerOfLayoutStyle}>
        <div style={menuStyle}>
          <Menu itemOfMenu={itemOfMenu}>
            <input />
          </Menu>
        </div>
        <ContainerLayout
          imageOne={{ icon: clearImage, name: "clear-image" }}
          imageTwo={{ icon: copyImage, content: "copy-image" }}
        />
      </div>
    </div>
  );
}

export default App;
