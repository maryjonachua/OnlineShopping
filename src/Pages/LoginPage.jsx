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

const LoginPage = ({setLogin}) => {
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

  // handle Log In submit
  const handleLogIn = (e) => {
    e.preventDefault();

        // -----Form validation
    if (!newUser.email || !newUser.password || !newUser.confirmPassword) {
      setShowAlert(true);
      setOpen(true);
    } else if (newUser.password !== newUser.confirmPassword) {
      setDidNotMatchPassword(true);

      setOpen(true);
    } else {
      setDidNotMatchPassword(false);
      setShowAlert(false);
      setOpen(false);
      navigate("/home");
      setLogin(true)
    }


  };

  // handle sign up button on the page
  const handleSignUp = () => {
    navigate("/signup");
  };

  
  // handle Forgot button on the page
  const handleForgotPass = () => {
    navigate("/forgotPassword");
  };

  // for show password
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // for show confirm password
  const handleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // onchangeHandler for the text box
  const onChangeHandler = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };
  return (
    <>
      {/* container of the body for log in page */}
      <div>
       

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
          <div className="form" style={{ zIndex: 2,width: "100%", maxWidth: "400px", padding:'0px 20px' }}>
            <br />
            <p className="Title-form">Login</p>
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

              {/* container for remember me and forgot paass */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: "-20px",
                }}
              >
                <div >
                  {/* Remember Me Component */}
                 
                    <Typography
                      sx={{color:'white',
                        fontFamily: 'Poppins', fontSize:'12px',
                        textShadow: '-1px 1px 2px rgba(0,0,0,0.3)',
                      }}
                    >
                      Remember me
                    </Typography>
                  
                </div>
                <div style={{ flexGrow: 0.3 }}></div>
                <div>
                  <Typography
                  onClick={handleForgotPass}
                    sx={{
                      color: "white",
                      "&:hover": { cursor: "pointer" },
                      marginLeft: "10px",
                      fontSize: "12px",
                      fontFamily:'Poppins',
                      textShadow: '-1px 1px 2px rgba(0,0,0,0.3)',
                      
                    }}
                  >
                    Forgot Password?
                  </Typography>
                </div>
              </div>


              {/* container for Log In and Sign Up Btn */}
              <Box
                sx={{
                  margin:'10px'
                }}
              >
                {/* container for Log In Btn */}
                <div>
                  <Button
                    onClick={handleLogIn}
                    sx={{
                      backgroundColor: "white",
                      color:'#262626',
                      width: "250px",
                      padding: "5px",
                      borderRadius: "20px",
                      fontSize: "10px",
                      fontWeight: "bold",
                      "&:hover": {  
                        
                        backgroundColor: "#EEEEEE",
                      },
                    }}
                  >
                    Log In
                  </Button>
                </div>

                {/* container for Sign Up Btn */}
               
              <Typography
              
              variant="subtitle2"
                    sx={{
                      color: "white",
                      "&:hover": { cursor: "pointer" },
                      fontSize: "10px",
                      fontWeight: 200,
                      fontFamily:'Poppins',
                      textShadow: '-1px 1px 2px rgba(0,0,0,0.3)',
                      textDecoration: "underline",
                      marginTop:'16px',
                      marginBottom:'16px',
                      textAlign:'center'
                    }}
                    onClick={handleSignUp}
                  >
                    
                    Don't have an account? Sign Up
                  </Typography>
              </Box>
            </FormControl>
          </div>
        </div>

        
      </div>
    </>
  );
};

export default LoginPage;
