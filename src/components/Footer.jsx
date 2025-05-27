import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        {/* Address */}
        <div className="footer-section">
          <h3 className="footer-heading">Address</h3>
          <p className="footer-text">209 Raceview Road</p>
          <p className="footer-text">Ballymena BT42 4HU</p>
        </div>

        {/* Contact */}
        <div className="footer-section">
          <h3 className="footer-heading">Contact</h3>
          <p className="footer-text">
            <a href="mailto:ballymena.cricket@gmail.com" className="footer-link">
              ballymena.cricket@gmail.com
            </a>
          </p>
        </div>

        {/* Connect */}
        <div className="footer-section">
          <h3 className="footer-heading">Connect</h3>
          <p className="footer-text footer-credit">Website by Michael Glass<br></br>magdev.contact@gmail.com</p>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        © {new Date().getFullYear()} Ballymena Cricket Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;