import "./about.css";

export default function About() {
  return (
    <section className="about-page">
      <div className="container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>
            Delivering innovative cosmetic, personal care, and skincare
            manufacturing solutions with quality, precision, and trust.
          </p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <h2>Your Trusted Manufacturing Partner</h2>

            <p>
              We specialize in third-party manufacturing of cosmetics,
              skincare, haircare, personal care, and wellness products.
              Our advanced manufacturing facilities and experienced team
              ensure every product meets the highest industry standards.
            </p>

            <p>
              From concept development to packaging, we provide complete
              end-to-end manufacturing solutions tailored to your brand's
              requirements.
            </p>

            <button className="about-btn">
              Learn More
            </button>
          </div>

          <div className="about-image">
            <img
              src="https://placehold.co/600x450"
              alt="Manufacturing Facility"
            />
          </div>
        </div>

        <div className="about-features">
          <div className="feature-card">
            <h3>Quality Assurance</h3>
            <p>
              Every product undergoes strict quality checks before delivery.
            </p>
          </div>

          <div className="feature-card">
            <h3>Modern Infrastructure</h3>
            <p>
              Equipped with advanced manufacturing and filling facilities.
            </p>
          </div>

          <div className="feature-card">
            <h3>Customized Solutions</h3>
            <p>
              Flexible product development according to your business needs.
            </p>
          </div>

          <div className="feature-card">
            <h3>On-Time Delivery</h3>
            <p>
              Reliable production planning and timely order fulfillment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}