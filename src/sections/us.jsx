import "./us.css";

export default function About() {
  return (
    <section className="about">
      <div className="container">

        <div className="about-top">

          <div className="about-label">
            <span>ABOUT QSD</span>
          </div>

          <div className="about-heading">
            <h2>
              Building products
              <span> people trust.</span>
            </h2>

            <p>
              QSD Formulations is a third-party manufacturing partner
              helping brands transform ideas into high-quality cosmetic,
              nutraceutical and personal care products.
            </p>
          </div>

        </div>


        <div className="about-main">

          <div className="about-visual">
            <div className="about-orbit">
              <span>QSD</span>
            </div>

            <div className="about-visual-text">
              QUALITY <span>•</span> SCIENCE <span>•</span> DEVELOPMENT
            </div>
          </div>


          <div className="about-content">

            <span className="about-small-title">
              OUR APPROACH
            </span>

            <h3>
              From an idea to a
              <strong> finished product.</strong>
            </h3>

            <p>
              We combine formulation expertise, modern manufacturing
              capabilities and strict quality standards to deliver
              dependable products for growing brands.
            </p>

            <p>
              From formulation and development to manufacturing and
              packaging, our integrated approach keeps the entire
              process streamlined and consistent.
            </p>

            <a href="/about" className="about-link">
              Discover QSD
              <span>↗</span>
            </a>

          </div>

        </div>


        <div className="about-stats">

          <div className="about-stat">
            <strong>10 +</strong>
            <span>Years of Expertise</span>
          </div>

          <div className="about-stat">
            <strong>5000 +</strong>
            <span>Product Formulations</span>
          </div>

          <div className="about-stat">
            <strong>2000 +</strong>
            <span>Brands</span>
          </div>

          <div className="about-stat">
            <strong>Certified </strong>
            <span>Trusted Manufacturing Partner</span>
          </div>

        </div>

      </div>
    </section>
  );
}