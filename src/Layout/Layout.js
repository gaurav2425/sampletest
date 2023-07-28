import { Outlet, Link } from "react-router-dom";
import styles from "../pagecss/Layout.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useState } from "react";
const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  return (
    <div className={styles.layout_container}>
      <div className={styles.navbar_container}>
        <div
          style={{
            display: "flex",
            flex: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1>ChatGpt</h1>
          <IconButton
            onClick={() => {
              setShowSidebar(!showSidebar);
            }}
          >
            <MenuIcon
              style={{
                color: "white",
              }}
            ></MenuIcon>
          </IconButton>
        </div>

        <Link
          to="/"
          style={{
            fontSize: "20px",
            color: "red",
            textDecoration: "none",
            marginRight: "10px",
          }}
        >
          Logout
        </Link>
      </div>
      <div className={styles.sidebar_container}>
        {showSidebar ? (
          <div className={styles.sidebar}>
            <nav>
              <ul>
                <li>
                  <Link to="/home" className={styles.link}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={styles.link}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={styles.link}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        ) : (
          <></>
        )}

        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
