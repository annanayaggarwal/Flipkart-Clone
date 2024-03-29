import styled from "@emotion/styled";
import { ButtonGroup, Button } from "@mui/material";
import React from "react";

const Component = styled(ButtonGroup)`
  margin-top: 30px;
`;

const Styledbutton = styled(Button)`
  border-radius: 50%;
`;

const GroupedButton = () => {
  return (
    <Component>
      <Styledbutton>-</Styledbutton>
      <Button disabled>1</Button>
      <Styledbutton>+</Styledbutton>
    </Component>
  );
};

export default GroupedButton;
