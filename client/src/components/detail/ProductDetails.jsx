import {Box,Table,TableBody,TableCell,TableRow,Typography} from "@mui/material";
import React from "react";
import { LocalOffer as Badge } from "@mui/icons-material";
import styled from "@emotion/styled";

const SmallText = styled(Box)`
  font-size: 14px;
  vertcal-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const Styledbadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColoumnText = styled(TableRow)`
  font-size: 14px;
  vertcal-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
    border: none;
  }
`;

const ProductDetails = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";
  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 Rating & 1 Review
        <Box component="span">
          <img
            src={fassured}
            alt="fassured"
            style={{ width: 77, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
        </Box>
      </Typography>
      <Typography>Available Offers</Typography>
      <SmallText>
        <Typography>
          <Styledbadge />
          Get extra 20% off upto ₹50 on 1 item T&C{" "}
        </Typography>
        <Typography>
          <Styledbadge />
          Get extra 14%% off (proce inclusive on discount) T&C{" "}
        </Typography>
        <Typography>
          <Styledbadge />
          Sign-up for Flipkart Pay Later & get free Times Prime Benefits worth
          ₹10,000*Know More
        </Typography>
        <Typography>
          <Styledbadge />
          Buy 2 items save 5%; Buy 3 or more save 7%See all productsT&C
        </Typography>
        <Typography>
          <Styledbadge />
          Flat ₹500 off on OneCard Credit Card and EMI Transactions on orders of
          ₹5,000 and aboveT&C
        </Typography>
        <Typography>
          <Styledbadge />
          Extra ₹500 off on OneCard Credit Card EMI Transactions on products
          priced ₹29,990 and aboveT&C
        </Typography>
      </SmallText>
      <Table>
        <TableBody>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()}|₹40{" "}
            </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>NO Warranty </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>GST Invoice Available</Typography>
              <Typography>
                View more selleres starting form ₹{product.price.cost}{" "}
              </Typography>
            </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="supercoin" style={{ width: 390 }} />
            </TableCell>
          </ColoumnText>
          <ColoumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description} </TableCell>
          </ColoumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetails;
