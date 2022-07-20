import React from "react";
import InformationIcon from "../icons/InformationIcon.png";
import FormConvert from "./ConvertForm/ConvertForm";


const layouContainer = {
  width: "1143px",
  height: "824px",
  backgroundColor: "#112031",
  borderRadius: "0px 10px 10px 10px",
  position: "absolute",
  margin: "45px 41px 44px 279px",
};
const unitConverterStyle = {
  fontWeight: 600,
  color: "white",
  fontSize: 20,
  height: "27px",
  width: "201px",
  marginLeft: "10px",

  /*  lineHeight:"23.44px" */
};
const informTitleConverterStyle = {
  display: "flex",
  alignItems: "center",
  width: "232px",
  marginTop: "37px",
  marginLeft: "75px",
};
const contentFormsStyle = {
  ...informTitleConverterStyle,
  justifyContent: "space-around",
  width: false,
  margin: false,
};
function ContainerLayout(props) {
  const { imageOne, imageTwo } = props;
  return (
    <div style={layouContainer}>
  
      <div style={informTitleConverterStyle}>
        <img
          src={InformationIcon}
          alt="convert-logo"
          width="30px"
          height="31px"
        />
        <p style={unitConverterStyle}>Unit Converter</p>
      </div>
      <div style={contentFormsStyle}>
        <FormConvert imageOne={imageOne} imageTwo={imageTwo} />
        <FormConvert imageOne={imageOne} imageTwo={imageTwo} />
      </div>
    </div>
  );
}

export default ContainerLayout;
