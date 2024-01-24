import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import LinkedInOAuth from "../LinkedInOAuth";
import {
  Button,
  TextField,
  Paper,
  Typography,
  Box,
  Container,
  FormControl,
} from "@mui/material";
import styles from "../styles";

/**
 * This function used for the Login page UI
 */
function Login({ onLogin }) {
  const handleGoogleSuccess = (response) => {
    console.log(response);
  };
  /**
   * Handles the error case when google authentication encounters error and console the error
   * @param error -  The type of error occured
   */
  const handleGoogleFailure = (error) => {
    console.log(error);
  };
  // username is a state variable which stores the user name/ login id entered by the user for traditional login method
  const [username, setUsername] = useState("");
  // password is a state variable which stores the password entered by the user for traditional login method
  const [password, setPassword] = useState("");
  // error is a state variable which stores the error message when login fails
  const [error, setError] = useState("");
  // mock data stored with user credentials
  const users = [
    { username: "admin", password: "admin" },
    { username: "user", password: "user" },
  ];
  /**
   * Handles the login functionality.if user authenticate takes to dashboard page else displays the error helper message
   * validates the user provided credentials with credentials in data base
   */
  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      setError("");
      onLogin(true);
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Box component="section" sx={{ ...styles.containerWrapper }}>
      <Container maxWidth="sm" sx={{ ...styles.container }}>
        <Paper elevation={8} sx={{ ...styles.landingContainer }}>
          <Box component="article" sx={{ ...styles.landingInnerContainer }}>
           {/* Sign in text */}
            <Typography component="h2" variant="h5">
              Sign in
            </Typography>
            <FormControl sx={{ ...styles.formContainer }}>
            {/* input field for user name */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                autoComplete="email"
                autoFocus
              />
              {/* input field for password */}
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              {/* checks if there any error accoured and displays the error message */}
              {error && (
                <Typography
                  component="p"
                  variant="h5"
                  style={{
                    ...styles.errorText,
                  }}
                >
                  {error}
                </Typography>
              )}
              {/* SignIn Button */}
              <Button
                onClick={handleLogin}
                fullWidth
                variant="contained"
                color="primary"
                style={{ margin: "24px 0 16px" }}
              >
                Sign In
              </Button>
              {/* Handles the Google login .
               *clientID: The google Auth clientID
               *OnFailure: Handles the error case when google authentication encounters any error
               *onSuccess: Handles when user authenticated successfully with google account
               */}
              <GoogleLogin
                clientId="CLIENT_ID"
                onFailure={handleGoogleFailure}
                onSuccess={handleGoogleSuccess}
                cookiePolicy="single_host_origin"
              />
              <LinkedInOAuth />
            </FormControl>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
export default Login;
