import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
                 
        {/* Company Info */}
        <div className="footer-column">
          <h2 className="footer-logo">
            QSD<span> Formulations Pvt Ltd.</span>
          </h2>

          <p>
            QSD Formulations is a trusted third-party manufacturer of
            cosmetics, skincare, haircare, personal care, and wellness
            products, delivering premium quality solutions.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/catalog">Catalog</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h3>Our Products</h3>

          <ul>
            <li>Skin Care</li>
            <li>Hair Care</li>
            <li>Body Care</li>
            <li>Baby Care</li>
            <li>Men's Grooming</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-column">
          <h3>Contact</h3>

          <p>-📍 PLOT NO.1256, INDUSTRIAL ESTATE, HSIIDC,RAI,SONEPAT , 131029</p>
          <p>-📞 +91 99105 06665</p>
          <p>-📧 marketinghead@qsdformulations.in</p>
          
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} QSD Formulations Pvt. Ltd. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}