import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,

  FormControl,
  Typography,

} from "@mui/material";

import "./LoginPage.css";
import { useNavigate } from "react-router-dom";


import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import LockResetIcon from '@mui/icons-material/LockReset';

const ForgotPassPage = () => {
  const defaultUser = {
    email: "",
    password: "",
    confirmPassword: "",
  };

  const [userInfo, setuserInfo] = useState([
    {
      email: "",
      password: "",
    },
  ]);

  const [newUser, setNewUser] = useState(defaultUser);

  const [showAlert, setShowAlert] = useState(false);
  const [open, setOpen] = useState(false);

  const [showPassword, setShowPassword] = useState(false);



  const navigate = useNavigate();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // function to create and validate account 
  const handleCreateAccnt = (e) => {
    e.preventDefault();

    if (!newUser.email ) {
      setShowAlert(true);
      setOpen(true);
    } else if (!showSuccessAlert) {
      setShowSuccessAlert(true);
      setOpen(true);
    } else {
 
      setShowAlert(false);
      setOpen(false);
    }

 
  };


  // onchangeHandler for the textbox
  const onChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  // handling Success Alert
  const handleCloseSuccessAlert = () => {
    setShowSuccessAlert(false);
    setOpen(false);
    navigate("/");
  };

  const handleBackToLogIn =() =>{
    navigate("/");
  }
  return (
    <>
      {/* container of the body for sign up page */}
      <div >
      

        

        {/* alert for register success */}
        {showSuccessAlert && (
          <Snackbar
            open={open}
            autoHideDuration={2000}
            onClose={handleCloseSuccessAlert}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setShowSuccessAlert(false)}
              severity="success"
              sx={{ width: "100%" }}
            >
              An email has been sent to your registered email address.
            </Alert>
          </Snackbar>
        )}

        {/* alert for errors*/}
        {showAlert && (
          <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={() => setShowAlert(false)}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
          >
            <Alert
              onClose={() => setShowAlert(false)}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please fill out all the field!
            </Alert>
          </Snackbar>
        )}

        {/* form container */}
        <div className="form-container">
          <div
            className="form"
            style={{
              zIndex: 2,
              width: "100%",
              maxWidth: "400px",
              padding: "20px",
                margin:'90px'
            }}
          >
            <br />

            <LockResetIcon sx={{
                marginTop:'1%',
                width: '15%',   
                height: 'auto',
                color: 'white',
            }}/>
            <p className="Title-form">Forgot Password</p>

            <FormControl>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "33ch",
                    "& .MuiInputLabel-root": {
                      color: "white",
                      fontWeight: "normal",
                      fontFamily: "Poppins",
                    },
                    "& .MuiInputBase-input": {
                      color: "white",

                      fontFamily: "Poppins",
                    },
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "white",
                    },
                    "& .MuiInput-underline:hover:before": {
                      borderBottomColor: "white",
                    },
                  },
                  marginBottom: "25px",
                }}
                noValidate
                autoComplete="off"
              >
                {/* text field email */}
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="email"
                  variant="standard"
                  value={newUser.email}
                  onChange={onChangeHandler}
                  required
                />
              </Box>

              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-20px",
                }}
              ></div>

              {/* container for button Create */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "5px 70px",
                  marginTop: "15px",
                }}
              >
                
                <Button
                  onClick={handleCreateAccnt}
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    padding: "5px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    color:'#262626',
                    "&:hover": { color: "095397", backgroundColor: "#EEEEEE" },
                  }}
                >
                  Forgot Password
                </Button>
              </Box>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "white",
                  "&:hover": { cursor: "pointer" },
                  fontSize: "13px",
                  textAlign: "right",
                  fontWeight: 200,
                  fontFamily: "Poppins",
                  textShadow: "-1px 1px 2px rgba(0,0,0,0.3)",
                  marginTop: "12px",
                  textAlign: "center",
                }}
                onClick={handleBackToLogIn}
              >
                Cancel
              </Typography>
            </FormControl>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default ForgotPassPage;
