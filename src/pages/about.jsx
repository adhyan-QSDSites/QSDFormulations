import "./about.css";

export default function About() {
  return (
    <section className="about-page">

      {/* ================= HERO ================= */}
      <div className="about-hero">
        <div className="about-hero-overlay"></div>

        <div className="container about-hero-content">
          <span className="about-eyebrow">
            ABOUT QSD FORMULATIONS
          </span>

          <h1>
            Building Brands Through
            <span> Better Manufacturing.</span>
          </h1>

          <p>
            From formulation to finished products, QSD Formulations provides
            reliable third-party manufacturing solutions for cosmetics,
            skincare, personal care, haircare, nutraceutical and wellness
            brands.
          </p>

          <div className="about-hero-actions">
            <a href="#our-story" className="about-btn primary">
              Discover QSD
            </a>

            <a href="#manufacturing-process" className="about-btn secondary">
              Our Process
            </a>
          </div>
        </div>
      </div>


      {/* ================= INTRO ================= */}
      <div className="container">

        <div className="about-intro" id="our-story">

          <div className="intro-label">
            <span>01</span>
            <p>WHO WE ARE</p>
          </div>

          <div className="intro-content">

            <h2>
              Your Product.
              <br />
              <span>Our Expertise.</span>
            </h2>

            <div className="intro-description">
              <p>
                QSD Formulations is a third-party manufacturing partner
                helping businesses transform product ideas into market-ready
                products.
              </p>

              <p>
                We combine formulation expertise, modern manufacturing
                infrastructure and quality-focused processes to deliver
                products that are built around each brand's unique
                requirements.
              </p>

              <p>
                Whether you are launching your first product or expanding an
                existing portfolio, our team works closely with you across
                formulation, manufacturing, filling, packaging and
                product development.
              </p>
            </div>

          </div>
        </div>


        {/* ================= STATS ================= */}
        <div className="about-stats">

          <div className="stat-item">
            <strong>100+</strong>
            <span>Products Developed</span>
          </div>

          <div className="stat-item">
            <strong>6+</strong>
            <span>Product Categories</span>
          </div>

          <div className="stat-item">
            <strong>360°</strong>
            <span>Manufacturing Support</span>
          </div>

          <div className="stat-item">
            <strong>100%</strong>
            <span>Brand-Focused Approach</span>
          </div>

        </div>


        {/* ================= CAPABILITIES ================= */}
        <div className="about-section-heading">

          <div className="section-number">02</div>

          <div>
            <span>WHAT WE DO</span>

            <h2>
              Manufacturing Built
              <br />
              Around Your Brand.
            </h2>
          </div>

        </div>


        <div className="capability-grid">

          <div className="capability-card large">
            <span className="card-number">01</span>

            <h3>Cosmetics</h3>

            <p>
              Product development and manufacturing solutions for modern
              cosmetic brands, including creams, lotions, serums and more.
            </p>

            <div className="card-arrow">↗</div>
          </div>


          <div className="capability-card">
            <span className="card-number">02</span>

            <h3>Skincare</h3>

            <p>
              Formulation and manufacturing support for face and body care
              products designed around your brand requirements.
            </p>

            <div className="card-arrow">↗</div>
          </div>


          <div className="capability-card">
            <span className="card-number">03</span>

            <h3>Haircare</h3>

            <p>
              Shampoos, conditioners, hair oils, serums and other haircare
              product manufacturing solutions.
            </p>

            <div className="card-arrow">↗</div>
          </div>


          <div className="capability-card">
            <span className="card-number">04</span>

            <h3>Personal Care</h3>

            <p>
              Flexible manufacturing solutions for personal hygiene and
              everyday care product categories.
            </p>

            <div className="card-arrow">↗</div>
          </div>


          <div className="capability-card">
            <span className="card-number">05</span>

            <h3>Wellness</h3>

            <p>
              Manufacturing support for wellness-focused products and
              innovative formulations.
            </p>

            <div className="card-arrow">↗</div>
          </div>


          <div className="capability-card">
            <span className="card-number">06</span>

            <h3>Custom Development</h3>

            <p>
              Customized product development based on your concept, target
              market, packaging and business objectives.
            </p>

            <div className="card-arrow">↗</div>
          </div>

        </div>


        {/* ================= WHY QSD ================= */}
        <div className="why-qsd">

          <div className="why-qsd-image">
            <img
              src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85"
              alt="QSD manufacturing facility"
            />

            <div className="image-badge">
              <strong>QSD</strong>
              <span>FORMULATIONS</span>
            </div>
          </div>


          <div className="why-qsd-content">

            <div className="section-number">03</div>

            <span className="small-heading">
              WHY PARTNER WITH QSD
            </span>

            <h2>
              More Than
              <br />
              <span>A Manufacturer.</span>
            </h2>

            <p className="main-description">
              We believe successful manufacturing is not just about producing
              a product. It is about understanding your brand, your market and
              your customers.
            </p>


            <div className="why-list">

              <div className="why-item">
                <div className="why-icon">01</div>

                <div>
                  <h3>Quality Driven</h3>
                  <p>
                    Quality-focused processes throughout product development
                    and manufacturing.
                  </p>
                </div>
              </div>


              <div className="why-item">
                <div className="why-icon">02</div>

                <div>
                  <h3>Flexible Manufacturing</h3>
                  <p>
                    Manufacturing solutions designed around your product and
                    business requirements.
                  </p>
                </div>
              </div>


              <div className="why-item">
                <div className="why-icon">03</div>

                <div>
                  <h3>End-to-End Support</h3>
                  <p>
                    Support from product concept and formulation to packaging
                    and final production.
                  </p>
                </div>
              </div>


              <div className="why-item">
                <div className="why-icon">04</div>

                <div>
                  <h3>Long-Term Partnership</h3>
                  <p>
                    We aim to build lasting relationships with brands rather
                    than simply fulfill individual orders.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>


        {/* ================= PROCESS ================= */}
        <div
          className="manufacturing-process"
          id="manufacturing-process"
        >

          <div className="about-section-heading process-heading">

            <div className="section-number">04</div>

            <div>
              <span>HOW WE WORK</span>

              <h2>
                From Idea
                <br />
                To Finished Product.
              </h2>
            </div>

          </div>


          <div className="process-grid">

            <div className="process-step">
              <span>01</span>
              <h3>Concept</h3>
              <p>
                We understand your product idea, target audience and market
                requirements.
              </p>
            </div>

            <div className="process-step">
              <span>02</span>
              <h3>Formulation</h3>
              <p>
                Our team works on developing the product according to your
                desired specifications.
              </p>
            </div>

            <div className="process-step">
              <span>03</span>
              <h3>Manufacturing</h3>
              <p>
                Products move into controlled manufacturing and production
                processes.
              </p>
            </div>

            <div className="process-step">
              <span>04</span>
              <h3>Filling & Packaging</h3>
              <p>
                Finished products are filled, packed and prepared according to
                your requirements.
              </p>
            </div>

            <div className="process-step">
              <span>05</span>
              <h3>Quality Check</h3>
              <p>
                Products undergo relevant quality checks before dispatch.
              </p>
            </div>

            <div className="process-step">
              <span>06</span>
              <h3>Delivery</h3>
              <p>
                Finished orders are prepared for reliable and timely
                fulfillment.
              </p>
            </div>

          </div>

        </div>


        {/* ================= VALUES ================= */}
        <div className="values-section">

          <div className="values-heading">

            <span>05 — OUR VALUES</span>

            <h2>
              Principles That
              <br />
              <span>Drive Everything We Do.</span>
            </h2>

          </div>


          <div className="values-grid">

            <div className="value-card">
              <span>01</span>
              <h3>Integrity</h3>
              <p>
                Transparent communication and dependable business
                relationships.
              </p>
            </div>

            <div className="value-card">
              <span>02</span>
              <h3>Innovation</h3>
              <p>
                Continuously exploring better product ideas and manufacturing
                solutions.
              </p>
            </div>

            <div className="value-card">
              <span>03</span>
              <h3>Precision</h3>
              <p>
                Attention to detail across formulation, production and
                packaging.
              </p>
            </div>

            <div className="value-card">
              <span>04</span>
              <h3>Partnership</h3>
              <p>
                Working alongside brands to support sustainable long-term
                growth.
              </p>
            </div>

          </div>

        </div>


        {/* ================= CTA ================= */}
        <div className="about-cta">

          <div className="cta-content">

            <span>LET'S BUILD SOMETHING BETTER</span>

            <h2>
              Have a Product
              <br />
              <span>In Mind?</span>
            </h2>

            <p>
              Talk to our team about your product idea and discover how QSD
              Formulations can help bring it to life.
            </p>

            <a href="/contact" className="cta-button">
              Start a Conversation
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}