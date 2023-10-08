import React, { useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import {
  Autocomplete,
  Avatar,
  Box,
  TextField,
  Typography,
} from "@mui/material";
import ProductModal from "./Modal/ProductModal";
import { addToCart } from "../redux/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const SearcBar = ({ products, login }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const handleClose = () => {
    if (login === true) {
      if (selectedProduct) {
        dispatch(addToCart(selectedProduct));
        setOpen(false);

        toast.success("Item added to your cart", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    }
  };

  const handleOptionClick = (option) => {
    if (login === true) {
      setSelectedProduct(option);
      setOpen(true);
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {open && (
        <ProductModal
          selectedProduct={selectedProduct}
          open={open}
          handleClose={handleClose}
        />
      )}
      {login ?(<><div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          flexGrow: 1,
        }}
      >
        <Box sx={{ width: "100%", height: "auto", fontFamily: "Poppins" }}>
          <Autocomplete
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            options={products}
            getOptionLabel={(option) => option.title}
            renderInput={(params) => (
              <TextField
                sx={{
                  width: "100%",
                  fontSize: "12px",
                  "& input": {
                    height: "2px",
                    fontFamily: "Poppins",
                    fontSize: "12px",
                  },
                }}
                InputLabelProps={{ shrink: false }}
                {...params}
                placeholder="Search Item"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                }}
              />
            )}
            onInputChange={(event, newValue) => {
              setSearchQuery(newValue);
            }}
            renderOption={(props, option) => (
              <li {...props} onClick={() => handleOptionClick(option)}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    alt={option.title}
                    src={option.image} // Set the image source here
                    sx={{ marginRight: "10px" }}
                  />
                  <Typography variant="body2">{option.title}</Typography>
                </Box>
              </li>
            )}
          />
        </Box>
        <SearchOutlinedIcon style={{ cursor: "pointer" }} />
      </div></>):(<></>)}
      
    </>
  );
};

export default SearcBar;
