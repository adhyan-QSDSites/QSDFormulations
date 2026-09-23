import "./catalogue.css";

export default function Catalogue() {
  return (
    <main className="catalogue-page">

      {/* HERO */}
      <section className="catalogue-hero">
        <div className="catalogue-hero-overlay"></div>

        <div className="catalogue-hero-content">
          <span className="catalogue-eyebrow">
            QSD FORMULATIONS
          </span>

          <h1>
            Our
            <span> Catalogue</span>
          </h1>

          <p>
            Explore our extensive range of cosmetic, skincare, haircare,
            personal care and men's grooming product formulations.
          </p>

          <div className="catalogue-actions">
            <a
              href="/QSD-Product-Catalogue.pdf"
              download
              className="catalogue-btn primary"
            >
              Download Catalogue
              <span>↓</span>
            </a>

            <a
              href="/contact"
              className="catalogue-btn secondary"
            >
              Enquire Now
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>


      {/* CATALOGUE INFO */}
      <section className="catalogue-intro">

        <div className="catalogue-container">

          <div className="catalogue-intro-grid">

            <div>
              <span className="catalogue-label">
                PRODUCT CATALOGUE
              </span>

              <h2>
                Explore Our
                <br />
                <span>Formulations.</span>
              </h2>
            </div>

            <div className="catalogue-description">
              <p>
                Discover product concepts and formulation options developed
                for modern beauty, personal care and grooming brands.
              </p>

              <div className="catalogue-meta">
                <div>
                  <strong>51</strong>
                  <span>Pages</span>
                </div>

                <div>
                  <strong>6+</strong>
                  <span>Categories</span>
                </div>

                <div>
                  <strong>100+</strong>
                  <span>Formulations</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* PDF VIEWER */}
      <section className="catalogue-viewer-section">

        <div className="catalogue-container">

          <div className="viewer-heading">
            <div>
              <span>01 — CATALOGUE</span>

              <h2>
                Browse the
                <br />
                <em>Complete Catalogue</em>
              </h2>
            </div>

            <a
              href="/QSD-Product-Catalogue.pdf"
              download
              className="viewer-download"
            >
              Download PDF
              <span>↓</span>
            </a>
          </div>


          <div className="pdf-wrapper">

            <iframe
              src="/QSD-Product-Catalogue.pdf#toolbar=1&navpanes=0&scrollbar=1"
              title="QSD Formulations Product Catalogue"
              className="pdf-viewer"
            ></iframe>

          </div>

        </div>

      </section>


      {/* PRODUCT CATEGORIES */}
      <section className="catalogue-categories">

        <div className="catalogue-container">

          <div className="categories-heading">
            <span>02 — EXPLORE</span>

            <h2>
              Product
              <br />
              <span>Categories</span>
            </h2>
          </div>


          <div className="category-grid">

            <div className="category-card">
              <span>01</span>
              <h3>Skincare</h3>
              <p>
                Cleansers, serums, moisturizers, sunscreens, masks, scrubs,
                gels, oils and lip care.
              </p>
              <a href="/contact">Explore ↗</a>
            </div>


            <div className="category-card">
              <span>02</span>
              <h3>Haircare</h3>
              <p>
                Shampoos, conditioners, hair masks, oils, serums and styling
                formulations.
              </p>
              <a href="/contact">Explore ↗</a>
            </div>


            <div className="category-card">
              <span>03</span>
              <h3>Men's Grooming</h3>
              <p>
                Beard oils, beard washes, balms, waxes, serums and men's face
                and shaving care.
              </p>
              <a href="/contact">Explore ↗</a>
            </div>


            <div className="category-card">
              <span>04</span>
              <h3>Personal Care</h3>
              <p>
                Everyday personal care formulations developed for different
                brand requirements.
              </p>
              <a href="/contact">Explore ↗</a>
            </div>


            <div className="category-card">
              <span>05</span>
              <h3>Beauty & Cosmetics</h3>
              <p>
                Cosmetic and beauty-focused product concepts for emerging and
                established brands.
              </p>
              <a href="/contact">Explore ↗</a>
            </div>


            <div className="category-card">
              <span>06</span>
              <h3>Custom Formulations</h3>
              <p>
                Develop customized products around your concept, requirements
                and target market.
              </p>
              <a href="/contact">Explore ↗</a>
            </div>

          </div>

        </div>

      </section>


      {/* CTA */}
      <section className="catalogue-cta">

        <div className="catalogue-cta-content">

          <span>HAVE A PRODUCT IDEA?</span>

          <h2>
            Let's Build Your
            <br />
            <span>Next Product.</span>
          </h2>

          <p>
            Share your requirements with our team and explore manufacturing
            possibilities for your brand.
          </p>

          <a href="/contact">
            Start Your Enquiry
            <span>↗</span>
          </a>

        </div>

      </section>

    </main>
  );
}
