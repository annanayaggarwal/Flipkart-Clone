import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { React, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getproducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const Searchcontainer = styled(Box)`
  background: #fff;
  width: 40%;
  border-radius: 2px;
  margin-left: 10px;
  display: flex;
`;

const Inputsearch = styled(InputBase)`
  padding-left: 10px;
  width: 100%;
`;

const Searchiconwrap = styled(Box)`
  color: blue;
  padding-top: 4px;
  padding-right: 4px;
  display: flex;
`;

const ListWrapper = styled(List)`
  position: absolute;
  background: #ffffff;
  color: #000;
  margin-top: 36px;
`;

const Search = () => {
  const [text, setText] = useState("");
  const { products } = useSelector((state) => state.getproducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getproducts());
  }, [dispatch]);

  const getText = (text) => {
    setText(text);
  };

  return (
    <Searchcontainer>
      <Inputsearch
        placeholder="Search for the Brands, Items and more"
        onChange={(e) => getText(e.target.value)}
        value={text}
      />
      <Searchiconwrap>
        <SearchIcon />
      </Searchiconwrap>
      {text && (
        <ListWrapper>
          {products
            .filter((product) =>
              product.title.longTitle.toLowerCase().includes(text.toLowerCase())
            )
            .map((product) => (
              <ListItem key={product.id}>
                <Link
                  to={`/product/${product.id}`}
                  onClick={() => setText("")}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {product.title.longTitle}
                </Link>
              </ListItem>
            ))}
        </ListWrapper>
      )}
    </Searchcontainer>
  );
};

export default Search;
