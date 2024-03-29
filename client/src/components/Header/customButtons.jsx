import { useState, useContext } from "react";
import { Button, Box, styled, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Login from "../login/Login";
import { DataContext } from "../../context/Dataprovider";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Profile from "./Profile";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 4% 0 auto;
  & > button,
  & > p,
  & > div {
    margin-right: 40px;
    font-size: 16px;
    align-items: center;
  }
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
  }
`;

const Container = styled(Link)`
  text-decoration: none;
  color: inherit;
  display: flex;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
  }
`;

const LoginButton = styled(Button)`
  color: #2874f0;
  background: #ffffff;
  margin-left: 40px;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false);
  const { account, setaccount } = useContext(DataContext);

  const { cartitems } = useSelector((state) => state.cart);

  const openDialogue = () => {
    setOpen(true);
  };

  return (
    <Wrapper>
      {account ? (
        <Profile account={account} setaccount={setaccount} />
      ) : (
        <LoginButton variant="contained" onClick={() => openDialogue()}>
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 4, width: 145 }}>
        Became a Seller
      </Typography>
      <Typography style={{ marginTop: 4 }}>More</Typography>
      <Container to="/cart">
        <Badge badgeContent={cartitems.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Container>
      <Login open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
