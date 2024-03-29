import styled from "@emotion/styled";
import { Box, Button } from "@mui/material";
import { React, useState } from "react";
import { ShoppingCart as Cart, FlashOn as Flash } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import  { addtocart } from "../../redux/actions/cartactions";
const Leftcontainer = styled(Box)`
  min-width: 40%;
  padding: 40px 0 0 80px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    padding: 20px 40px;
  }
`;

const Image = styled("img")({
  padding: "15px",
});

const Styledbutton = styled(Button)`
  width: 48%;
  height: 50px;
  border-radius: 2px;
  ${({ theme }) => theme.breakpoints.down("lg")} {
    width: 46%;
  }
  ${({ theme }) => theme.breakpoints.down("sm")} {
    width: 48%;
  }
`;

const Actionitems = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [quantity, setquantity] = useState(1);

  const { id } = product;

  const additemtocart = () => {
    dispatch(addtocart(id, quantity));
    navigate("/cart");
  };

  return (
    <Leftcontainer>
      <Box
        style={{
          padding: "15px 20px",
          border: "1px solid #f0f0f0",
          width: "90%",
        }}
      >
        <Image src={product.detailUrl} alt="product" />
      </Box>
      <Styledbutton
        variant="contained"
        style={{ marginRight: 10, background: "#ff9f00" }}
        onClick={() => additemtocart()}
      >
        <Cart />
        Add to cart
      </Styledbutton>
      <Styledbutton variant="contained" style={{ background: "#fb541b" }}>
        <Flash />
        Buy Now
      </Styledbutton>
    </Leftcontainer>
  );
};

export default Actionitems;
