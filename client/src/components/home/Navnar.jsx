import React from "react";
import { navData } from "../../constants/data";
import { Box, Typography, styled } from "@mui/material";

const Navbarcontainer = styled(Box)`
  display: flex;
  margin: 55px 130px 0 130px;
  justify-content: space-between;
  overflow: hidden;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    margin: 0;
  }
`;

const Container = styled(Box)`
  padding: 12px 8px;
  text-align: center;
`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 600;
  font-family: inherit;
`;

const Navnar = () => {
  return (
    <Box style={{background:'#fff'}}>
      <Navbarcontainer>
        {navData.map((data) => (
          <Container>
            <img src={data.url} alt="nav" style={{ width: 64 }} />
            <Text>{data.text}</Text>
          </Container>
        ))}
      </Navbarcontainer>
    </Box>
  );
};

export default Navnar;
