import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);

  const [value, setvalue] = useState();
  const navigate = useNavigate();
  return (
    <AppBar
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(105,9,121,1) 35%, rgba(255,0,168,1) 100%)",
        position: "sticky",
      }}
    >
      <Toolbar>
        <Typography variant="h4">BlogApp</Typography>
        {isLoggedIn && (
          <Box display="flex" marginLeft="auto" marginRight="auto">
            <Tabs
              textColor="inherit"
              value={value}
              onChange={(e, val) => {
                setvalue(val);
              }}
            >
              <Tab onClick={() => navigate("/blogs")} label="All Blogs " />

              <Tab onClick={() => navigate("/myblogs")} label="My Blogs " />
            </Tabs>
          </Box>
        )}

        <Box display="flex" marginLeft="auto">
          {!isLoggedIn && (
            <>
              <Link to="/login">
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                >
                  Login
                </Button>
              </Link>
              <Link to="/login">
                <Button
                  variant="contained"
                  sx={{ margin: 1, borderRadius: 10 }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
          {isLoggedIn && (
            <Link to="">
              <Button variant="contained" sx={{ margin: 1, borderRadius: 10 }}>
                Log Out
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
