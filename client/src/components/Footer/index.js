import React from "react";
import "../../assets/styles/footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Twiz. All rights reserved.</p>
        <nav>
          <ul>
            <li>
              <a href="/privacy-policy">Privacy Policy</a>
            </li>
            <li>
              <a href="/terms">Terms and Conditions</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Footer;
