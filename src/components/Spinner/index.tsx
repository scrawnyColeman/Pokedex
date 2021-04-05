import React from "react";
import { HourGlassSpinner } from "./style";

const HourGlass = () => <HourGlassSpinner />;

HourGlass.defaultProps = {
  size: 64,
  color: "#00bfff",
  sizeUnit: "px"
};

export default HourGlass;
