import { React, useEffect } from "react";
import Navnar from "./Navnar";
import Banner from "./Banner";
import Slide from "./Slide";
import Midslide from "./Midslide";
import Midsection from "./Midsection";
import { Box } from "@mui/material";
import styled from "@emotion/styled";
import { getproducts } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";

const Component = styled(Box)`
  padding: 20px 10px;
  background: #f2f2f2;
`;

const Home = () => {
  const { products } = useSelector((state) => state.getproducts);

  console.log(products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  return (
    <>
      <Navnar />
      <Component>
        <Banner />
        <Midslide products={products} title="Deal of the Day" timer={true} />
        <Midsection />
        <Slide products={products} title="Discounts for you" timer={false} />
        <Slide products={products} title="Suggested items" timer={false} />
        <Slide products={products} title="Top Selections" timer={false} />
        <Slide products={products} title="Recommended items " timer={false} />
        <Slide products={products} title="Trending Offers" timer={false} />
        <Slide products={products} title="Season's top Picks " timer={false} />
        <Slide
          products={products}
          title="Top Deals on Accessories"
          timer={false}
        />
      </Component>
    </>
  );
};

export default Home;
