import { React, useState } from "react";
import {
  AppBar,
  Toolbar,
  Box,
  styled,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import Search from "./Search";
import { Link } from "react-router-dom";
import CustomButtons from "./customButtons";

// Using styled function to style AppBar
const StyledAppBar = styled(AppBar)`
  background: #2874f0;
  height: 55px;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const Subheading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const Custombuttonwrapper = styled(Box)`
  margin: 0 5% 0 auto;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: none;
  }
`;

const MenuButton = styled(IconButton)`
  display: none;
  ${({ theme }) => theme.breakpoints.down("md")} {
    display: block;
  }
`;

const Header = () => {
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";

  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

  const [open, setopen] = useState(false);

  const handleopen = () => {
    setopen(true);
  };
  const handleclose = () => {
    setopen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleclose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );
  

  return (
    <StyledAppBar>
      <Toolbar style={{ minHeight: 55 }}>
        <MenuButton color="inherit" onClick={handleopen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleclose}>
          {list()}
        </Drawer>
        <Component to={"/"}>
          <img src={logoURL} alt="logo" style={{ width: 79 }} />
          <Box>
            <Subheading>
              Explore &nbsp;
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus &nbsp;
              </Box>
              <img src={subURL} alt="logo" style={{ width: 10 }} />
            </Subheading>
          </Box>
        </Component>
        <Search />
        <Custombuttonwrapper>
          <CustomButtons />
        </Custombuttonwrapper>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
