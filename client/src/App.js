// import logo from './logo.svg';
import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/home/Home";
import DataProvider from "./context/Dataprovider";
import DetailView from "./components/detail/DetailView";
import Cart from "./components/cart/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
