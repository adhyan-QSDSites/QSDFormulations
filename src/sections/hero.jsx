import "./hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>

      <div className="container hero-container">
        <div className="hero-content">

          <span className="hero-tag">
            CERTIFIED THIRD-PARTY MANUFACTURER
          </span>
          <h1>
  Where <span className="highlight">Quality</span> Meets Innovation,
  <br />
  <span className="highlight">Service</span> Builds Trust and{" "}
  <span className="highlight">Determination</span> Drives Success.
</h1>

          <p className="hero-description">
            QSD Formulations is a trusted third-party manufacturing partner
            for cosmetics, nutraceuticals, Ayurvedic, herbal and personal
            care products — helping businesses transform ideas into
            high-quality, market-ready products.
          </p>

          <div className="hero-buttons">
  <a
    href="/catalog.pdf"
    download="QSD-Product-Catalog.pdf"
    className="hero-btn primary"
  >
    Get My Catalog
    <span>↗</span>
  </a>

  <a href="/catalog" className="hero-btn secondary">
    Explore Products
  </a>
</div>

          <div className="hero-trust">
            <div className="trust-item">
              <strong>100+</strong>
              <span>Products Manufactured</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>End-to-End</strong>
              <span>Manufacturing Solutions</span>
            </div>

            <div className="trust-divider"></div>

            <div className="trust-item">
              <strong>Quality</strong>
              <span>Focused Manufacturing</span>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-scroll">
        <span>SCROLL TO EXPLORE</span>
        <div className="scroll-line"></div>
      </div>
    </section>
  );
}