import { useState, useContext } from "react";
import { Box, Button, Dialog, TextField, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { authenticatesignup, authenticatelogin } from "../../service/api";
import { DataContext } from "../../context/Dataprovider";

const Component = styled(Box)`
  height: 70vh;
  width: 90vh;
`;

const Image = styled(Box)`
  background: #2874f0
    url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    center 85% no-repeat;
  height: 83.8%;
  width: 29%;
  padding: 45px 35px;
  & > p,
  & > h5 {
    color: #ffffff;
    font-weight: 600;
  }
`;

const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 25px 35px;
  flex: 1;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`;

const Loginbutton = styled(Button)`
  text-transform: none;
  border-radius: 2px;
  background: #fb641b;
  color: #fff;
  height: 48px;
`;

const Requestutp = styled(Button)`
  text-transform: none;
  border-radius: 2px;
  background: #fff;
  color: #2874f0;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`;

const Fontsize = styled(Typography)`
  font-size: 12px;
  color: #878787;
`;

const Createaccount = styled(Typography)`
  text-align: center;
  font-size: 14px;
  color: #2874f0;
  font-weight: 600;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
`;

const accountinitial = {
  login: {
    view: "login",
    heading: "Login",
    subheading: "Get access to your orders,Wishlists and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you are new Here",
    subheading: "Signup with your mobile number to get started",
  },
};

const signupinitial = {
  Firstname: "",
  Lastname: "",
  Username: "",
  email: "",
  Password: "",
  Phone: "",
};

const logininitails = {
  Username: "",
  Password: "",
};

const Login = ({ open, setOpen }) => {
  const [account, Toggleaccount] = useState(accountinitial.login);
  const [signup, setsignup] = useState(signupinitial);
  const [login, setlogin] = useState(logininitails);
  const [error, seterror] = useState(false);

  const { setaccount } = useContext(DataContext);

  const handleclose = () => {
    setOpen(false);
    Toggleaccount(accountinitial.login);
    seterror(false);
  };

  const togglesignup = () => {
    Toggleaccount(accountinitial.signup);
  };

  const oninputchange = (e) => {
    setsignup({ ...signup, [e.target.name]: e.target.value });
    // console.log(signup);
  };

  const signupuser = async () => {
    let response = await authenticatesignup(signup);
    if (!response) return;
    handleclose();
    setaccount(signup.Firstname);
  };

  const onvaluechange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value });
  };

  const loginuser = async () => {
    let response = await authenticatelogin(login);
    console.log(response);
    if (response.status === 200) {
      handleclose();
      setaccount(response.data.data.Firstname);
    } else {
      seterror(true);
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleclose}
        PaperProps={{ sx: { maxWidth: "unset" } }}
      >
        <Component>
          <Box style={{ display: "flex", height: "100%" }}>
            <Image>
              <Typography variant="h5">{account.heading}</Typography>
              <Typography style={{ marginTop: 20 }}>
                {account.subheading}
              </Typography>
            </Image>
            {account.view === "login" ? (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => onvaluechange(e)}
                  name="Username"
                  label="Enter username"
                />
                {error && (
                  <Error>Please enter valid username and password</Error>
                )}
                <TextField
                  variant="standard"
                  onChange={(e) => onvaluechange(e)}
                  name="Password"
                  label="Enter Password"
                />
                <Fontsize>
                  By Continuing you agree to Flipkart Terms of Use and Privacy
                  Policy
                </Fontsize>
                <Loginbutton onClick={() => loginuser()}>Login</Loginbutton>
                <Typography style={{ textAlign: "center" }}>OR</Typography>
                <Requestutp>Request OTP</Requestutp>
                <Createaccount onClick={() => togglesignup()}>
                  New to Flipkart? Create an account
                </Createaccount>
              </Wrapper>
            ) : (
              <Wrapper>
                <TextField
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  name="Firstname"
                  label="Enter Firstname"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  name="Lastname"
                  label="Enter Lastname"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  name="Username"
                  label="Enter Username"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  name="email"
                  label="Enter email"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  name="Password"
                  label="Enter Password"
                />
                <TextField
                  variant="standard"
                  onChange={(e) => oninputchange(e)}
                  name="Phone"
                  label="Enter Phone"
                />

                <Loginbutton onClick={() => signupuser()}>Continue</Loginbutton>
              </Wrapper>
            )}
          </Box>
        </Component>
      </Dialog>
    </div>
  );
};

export default Login;
