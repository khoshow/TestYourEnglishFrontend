import React from "react";
import Typography from "@mui/material/Typography";
const Footer = () => {
  const links = [
    {
      id: 1,
      title: "Links",
      column: "col-lg-2 col-md-3 col-sm-6 mb-30",
      items: [
        { label: "Home", href: "/" },
        { label: "Pricing", href: "/pricing" },
        { label: "About us", href: "/about-v1" },
        { label: "Careers", href: "#" },
        { label: "Features", href: "#" },
        { label: "Blog", href: "/blog-v2." },
      ],
    },
    {
      id: 2,
      title: "Services",
      column: "col-lg-3 col-md-4 col-sm-6 mb-30",
      items: [
        { label: "Health Insurance Plans", href: "/service-details" },
        { label: "Car Insurance", href: "/service-details" },
        { label: "Investment", href: "/service-details" },
        { label: "Mediclaim Policy", href: "/service-details" },
        { label: "Others", href: "/service-details" },
        { label: "Health Insurance", href: "/service-details" },
      ],
    },
  ];

  const socialIcons = [
    {
      iconClass: "fab fa-facebook-f",
      link: "#",
    },
    {
      iconClass: "fab fa-twitter",
      link: "#",
    },
    {
      iconClass: "fab fa-linkedin-in",
      link: "#",
    },
  ];

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
