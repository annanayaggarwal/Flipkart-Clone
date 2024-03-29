import styled from "@emotion/styled";
import { Box, Typography, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";

const Component = styled(Menu)`
  margin-top: 5px;
`;

const Logout = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

const Profile = ({ account, setaccount }) => {
  const [open, setopen] = useState(false);
  const handleclick = (event) => {
    setopen(event.currentTarget);
  };
  const handleClose = () => {
    setopen(false);
  };

  const logout = () => {
    setaccount("");
  };

  return (
    <>
      <Box onClick={handleclick}>
        <Typography style={{ marginTop: 2, cursor: "pointer" }}>
          {account}
        </Typography>
      </Box>
      <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <PowerSettingsNewIcon color="primary" fontSize="small" />
          <Logout> Logout</Logout>
        </MenuItem>
      </Component>
    </>
  );
};

export default Profile;
