import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Typography,
} from "@mui/material";

import "./LoginPage.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";

import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const SignUpPage = () => {
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
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [didNotMatchPassword, setDidNotMatchPassword] = useState(false);
  const navigate = useNavigate();

  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  // function to create and validate account 
  const handleCreateAccnt = (e) => {
    e.preventDefault();

    if (!newUser.email || !newUser.password || !newUser.confirmPassword) {
      setShowAlert(true);
      setOpen(true);
    } else if (newUser.password !== newUser.confirmPassword) {
      setDidNotMatchPassword(true);
      setOpen(true);
    } else if (!showSuccessAlert) {
      setShowSuccessAlert(true);
      setOpen(true);
    } else {
      setDidNotMatchPassword(false);
      setShowAlert(false);
      setOpen(false);
    }

 
  };

  // for show password
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // for show confirm password
  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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
              Registered Successfully!
            </Alert>
          </Snackbar>
        )}

        {/* alert for errors*/}
        {showAlert && (
          <Snackbar
            open={open}
            autoHideDuration={2000}
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
          <div className="form" style={{ zIndex: 2,width: "100%", maxWidth: "400px", padding: "20px" }}>
            <br />
            <p className="Title-form">SignUp</p>
            <p className="Title2-form">Enter your account details</p>
            <FormControl>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": {
                    m: 1,
                    width: "33ch",
                    "& .MuiInputLabel-root": { color: "white", fontWeight: "normal", fontFamily: 'Poppins',},
                    "& .MuiInputBase-input": {
                      color: "white",
                     
                      fontFamily: 'Poppins',
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
          {/* text field password */}
                <TextField
                  id="standard-basic"
                  label="Password"
                  name="password"
                  variant="standard"
                  onChange={onChangeHandler}
                  required
                  value={newUser.password}
                  type={showPassword ? "password" : "text"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showPassword ? (
                          <VisibilityOffIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={handlePasswordVisibility}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={handlePasswordVisibility}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />
                {/* text field confirm password */}
                <TextField
                  sx={{ fontWeight: "2rem" }}
                  id="standard-basic"
                  label="Confirm Password"
                  name="confirmPassword"
                  variant="standard"
                  onChange={onChangeHandler}
                  required
                  type={showConfirmPassword ? "password" : "text"}
                  value={newUser.confirmPassword}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        {showConfirmPassword ? (
                          <VisibilityOffIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={handleConfirmPasswordVisibility}
                          />
                        ) : (
                          <VisibilityIcon
                            sx={{ color: "white", cursor: "pointer" }}
                            onClick={handleConfirmPasswordVisibility}
                          />
                        )}
                      </InputAdornment>
                    ),
                  }}
                />

               
              </Box>

               {/* validation for  password */}
               {didNotMatchPassword && (
                  <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={() => setDidNotMatchPassword(false)}
                    anchorOrigin={{ vertical: "top", horizontal: "center" }}
                  >
                    <Alert
                      onClose={() => setDidNotMatchPassword(false)}
                      severity="error"
                      sx={{ width: "100%" }}
                    >
                      Password do not match!
                    </Alert>
                  </Snackbar>
                )}
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
                  marginTop:'15px'
                }}
              >
                <Button
                  onClick={handleCreateAccnt}
                  sx={{
                    backgroundColor: "white",
                    width: "100%",
                    padding: "5px",
                    color:'#262626',
                    borderRadius: "20px",
                    fontSize: "10px",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "#EEEEEE" },
                  }}
                >
                  Create Account
                </Button>
                
              </Box>
              <Typography
              
              variant="subtitle2"
                    sx={{
                      color: "white",
                      "&:hover": { cursor: "pointer" },
    
                      fontSize: "10px",
                      textAlign:'center',fontWeight: 200,
                      fontFamily:'Poppins',
                      textShadow: '-1px 1px 2px rgba(0,0,0,0.3)',
                      textDecoration: "underline",
                      marginTop:'12px'
                    }}
                    onClick={handleBackToLogIn}
                  >
                    
                    Already have an account? Sign in
                  </Typography>
            </FormControl>
          </div>
        </div>

      
      </div>
    </>
  );
};

export default SignUpPage;
