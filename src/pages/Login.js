import React from "react";
import styles from "../pagecss/Login.module.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className={styles.login_container}>
      <div className={styles.login_box}>
        <div className={styles.login_txt}>
          <h1>Leave Tracker</h1>
          <h2>Login</h2>
        </div>
        <div className={styles.login_box_inputs}>
          <form onSubmit={handleSubmit}>
            <div>
              <TextField
                label="Email"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                type="email"
                required
                sx={{
                  width: "100%",
                  marginTop: "15px",
                }}
              />
            </div>
            <div>
              <TextField
                label="Password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                type="password"
                required
                sx={{
                  width: "100%",
                  marginTop: "15px",
                }}
              />
            </div>
            <Link to="/home" className={styles.link}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  width: "100%",
                  marginTop: "15px",
                }}
              >
                login
              </Button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
