import "./contact.css";

export default function Contact() {
  return (
    <section className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>
            We'd love to hear from you. Reach out to us for product inquiries,
            manufacturing solutions, or business partnerships.
          </p>
        </div>

        <div className="contact-wrapper">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Get In Touch</h2>

            <div className="info-box">
              <h4>📍 Address</h4>
              <p>
                QSD Formulations Pvt. Ltd.
                <br />
                Panipat, Haryana, India
              </p>
            </div>

            <div className="info-box">
              <h4>📞 Phone</h4>
              <p>+91 8222936424</p>
            </div>

            <div className="info-box">
              <h4>📧 Email</h4>
              <p>Marketinghead@qsdformulations.in</p>
            </div>

            <div className="info-box">
              <h4>🌐 Website</h4>
              <p>www.qsdformulations.com</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Send a Message</h2>

            <form>
              <input
                type="text"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                placeholder="Email Address"
                required
              />

              <input
                type="text"
                placeholder="Phone Number"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                required
              ></textarea>

              <button type="submit">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-section">
          <h2>Our Location</h2>

          <iframe
            title="QSD Formulations Location"
            src="https://www.google.com/maps?q=Panipat,Haryana&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}