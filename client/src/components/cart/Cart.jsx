import { Box, Button, Grid, Typography } from "@mui/material";
// import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";

//component
import Cartitem from "./Cartitem";
import TotalView from "./TotalView";
import styled from "@emotion/styled";

const Conatiner = styled(Grid)`
  padding: 30px 135px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    padding: 15px 0;
  }
`;

const Header = styled(Box)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Box)`
  padding: 16px 22px;
  background: #fff;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 / 10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fd641b;
  color: #fff;
  width: 250px;
  height: 51px;
  border-radius: 2px;
`;

const LeftComponent = styled(Grid)`
  padding-right: 15px;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin-bottom: 15px;
  }
`;

const Cart = () => {
  const { cartitems } = useSelector((state) => state.cart);
  return (
    <>
      {cartitems.length ? (
        <Conatiner container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart( {cartitems.length})</Typography>
            </Header>
            {cartitems.map((item) => (
              <Cartitem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalView cartitems={cartitems} />
          </Grid>
        </Conatiner>
      ) : (
        <div>
          <EmptyCart />
        </div>
      )}
    </>
  );
};

export default Cart;
