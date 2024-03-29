import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getproductDetails } from "../../redux/actions/productActions";
import { Box, Grid } from "@mui/material";
import Actionitems from "./Actionitems";
import styled from "@emotion/styled";
import ProductDetails from "./ProductDetails";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Grid)`
  background: #ffffff;
  display: flex;
  ${({ theme }) => theme.breakpoints.down("md")} {
    margin: 0;
  }
`;

const Rightconatiner = styled(Grid)`
  margin-top: 50px;
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getproductDetails(id));
  }, [dispatch, id]);
  return (
    <Component>
      {product && Object.keys(product).length && (
        <Container container>
          <Grid item lg={4} md={4} sm={8} xs={12}>
            <Actionitems product={product} />
          </Grid>
          <Rightconatiner item lg={8} md={8} sm={8} xs={12}>
            <ProductDetails product={product} />
          </Rightconatiner>
        </Container>
      )}
    </Component>
  );
};

export default DetailView;
