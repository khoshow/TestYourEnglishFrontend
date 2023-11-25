import React from "react";
import Typography from "@mui/material/Typography";
const Footer = () => {
  

  return (
    <>
      <Footer>
        <div className="fixed-bottom">
          {" "}
          <div className="p-4">
            <div>
              {" "}
              <ul class="nav justify-content-center">
                <li class="nav-item">
                  <a class="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <Typography variant="body2" color="black">
                © {new Date().getFullYear()} Test My English Online
              </Typography>
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default Footer;