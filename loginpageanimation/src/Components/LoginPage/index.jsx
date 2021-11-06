import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import { Button, Grid, Typography } from "@material-ui/core";
import data from "./dummyLogin.json";
import { Link, BrowserRouter as Router } from "react-router-dom";

function Login({ history }) {
  const [states, setStates] = useState({
    email: "",
    password: "",
    errorMessage: "",
  });

  const { email, password, errorMessage } = states;
  const handleChange = (event) => {
    const { name, value } = event.target || {};
    setStates((c) => ({
      ...c,
      [name]: value,
      errorMessage: "",
    }));
  };

  const handleNavigation = () => {
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("password");
    if (email === "" && password === "") {
      history.push("");
    }
  };

  useEffect(() => {
    handleNavigation();
    return () => {
      handleNavigation();
    };
  }, []);

  const handleClick = () => {
    if (email === data.email && password === data.password) {
      localStorage.setItem("email", data.email);
      localStorage.setItem("password", data.password);
      history.push("/menuPage");
    } else {
      setStates((c) => ({
        ...c,
        errorMessage: "Please enter valid email and password!",
      }));
    }
  };

  return (
    <Router>
      <div>
        <div style={{ display: "flex",justifyContent:'end',padding:'30px' }}>
          <Typography>Don't have an account?</Typography>
          <Button
            style={{
              background: "linear-gradient(to right, #3eb4e1, #1A2980)",
              color:'white'
            }}
          >
            Sign Up
          </Button>
        </div>
      <div className={styles.rootStyle}>
        <Grid xs={4} sm={4} md={6} lg={10} className={styles.cardStyle}>
          <h3>Welcome Back!</h3>
          <div style={{ position: "absolute", top: "60px" }}>
            <Grid>
              <Typography>Email</Typography>
              <input
                type="text"
                value={email}
                name="email"
                onChange={handleChange}
                style={{
                  paddingTop: "20px",
                  width: "55vh",
                  borderRadius: "7px",
                  border: "1px solid rgb(0 0 0 / 12%)",
                  boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
                }}
              />
            </Grid>
            <Grid style={{ paddingTop: "20px" }}>
              <Typography>Password</Typography>
              <input
                type="password"
                value={password}
                name="password"
                onChange={handleChange}
                style={{
                  paddingTop: "20px",
                  width: "55vh",
                  borderRadius: "7px",
                  border: "1px solid rgb(0 0 0 / 12%)",
                  boxShadow: "0 3px 10px rgb(0 0 0 / 20%)",
                }}
              />
            </Grid>
            <Grid style={{ display: "flex", paddingTop: "5px" }}>
              <input type="checkbox" style={{ border: "2px" }} />
              <Typography style={{ fontSize: "13px" }}>Remember me</Typography>
            </Grid>
          </div>

          {errorMessage ? (
            <Typography
              color="secondary"
              style={{ fontSize: "12px", position: "absolute", top: "42vh" }}
            >
              {errorMessage}
            </Typography>
          ) : null}
          <Button
            style={{
              position: "absolute",
              top: "43vh",
              background: "linear-gradient(to right, #3eb4e1, #1A2980)",
              width: "57vh",
            }}
            variant="contained"
            onClick={handleClick}
          >
            Login
          </Button>
          <Grid style={{ top: "50vh", position: "absolute" }}>
            <Typography style={{ fontSize: "11px" }}>
              This site is protected by Privacy policy and Terms of conditions
            </Typography>
          </Grid>
        </Grid>
        <Grid xs={10} sm={10} md={10} lg={10} className={`${styles.imageStyle}`}>
          <Link
            to="/"
            style={{ position: "absolute", bottom: "25vh", color: "white" }}
          >
            Forgot your Password?
          </Link>
          <Button
            style={{
              position: "absolute",
              bottom: "15vh",
              background: "white",
              color: "blue",
              width: "60vh",
            }}
            variant="contained"
          >
            Login With Google
          </Button>
        </Grid>
      </div>
      </div>
    </Router>
  );
}

export default Login;
