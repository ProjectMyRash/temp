import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center">
  <div
    className="text-center p-lg-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} // Increased opacity for better visibility
  >
    © 2020 Copyright: <a className="text-white text-decoration-none" href="https://mdbootstrap.com/">Myrash.com</a>
  </div>
</footer>

  );
}

export default Footer;