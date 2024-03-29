import { Box } from "@mui/material";
import React from "react";
import Slide from "./Slide";
import styled from "@emotion/styled";

const Component = styled(Box)`
  display: flex;
`;

const LeftComponenet = styled(Box)`
  width: 83%;
  ${({ theme }) => theme.breakpoints.down("md")} {
    width: 100%;
  }
`;

const RightComponenet = styled(Box)`
  background-color: #ffffff;
  padding: 5px;
  width: 16%;
  margin-top: 10px;
  margin-left: 10px;
  width: 17%;
  text-align: center;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const Midslide = ({ products, title, timer }) => {
  const adURL =
    "https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70";
  return (
    <Component>
      <LeftComponenet>
        <Slide products={products} title={title} timer={timer} />
      </LeftComponenet>
      <RightComponenet>
        <img src={adURL} alt="advertisement" style={{ width: 217 }} />
      </RightComponenet>
    </Component>
  );
};

export default Midslide;
