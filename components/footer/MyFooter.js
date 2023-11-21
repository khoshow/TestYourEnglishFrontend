import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

const Footer = () => {
  return (
    <footer>
       
      <AppBar
        className="sticky-top"
        style={{ padding: "10px", backgroundColor: "#6c757d", }}
      >
        <Container className=" ">
          <Box textAlign="center">
            <Typography variant="body2" color="textSecondary">
              Navigation Links:
              <Link href="#" className="nav-link">
                Home
              </Link>
              <Link href="#" className="nav-link">
                About
              </Link>
              <Link href="#" className="nav-link">
                Contact
              </Link>
            </Typography>
            <Typography variant="body2" color="textSecondary">
              © {new Date().getFullYear()} Test My English Online
            </Typography>
          </Box>
        </Container>
      </AppBar>
    </footer>
  );
};

export default Footer;
