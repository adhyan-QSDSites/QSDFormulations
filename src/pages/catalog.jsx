import "../styles/catalog.css";
const categories = [
  {
    id: 1,
    title: "Skin Care",
    description: "Premium skincare formulations including creams, serums, face wash, lotions, and more.",
  },
  {
    id: 2,
    title: "Hair Care",
    description: "Shampoos, conditioners, hair oils, masks, and complete hair care solutions.",
  },
  {
    id: 3,
    title: "Body Care",
    description: "Body lotions, scrubs, body wash, moisturizers, and personal care products.",
  },
  {
    id: 4,
    title: "Baby Care",
    description: "Safe and gentle baby care formulations designed for delicate skin.",
  },
  {
    id: 5,
    title: "Men's Grooming",
    description: "Face wash, beard oil, shaving cream, after shave, and grooming essentials.",
  },
  {
    id: 6,
    title: "Cosmetics",
    description: "Complete cosmetic manufacturing solutions with customized formulations.",
  },
];

export default function Catalog() {
  return (
    <section className="catalog">
      <div className="container">
        <div className="catalog-heading">
          <h1>Our Product Catalog</h1>
          <p>
            Explore our wide range of high-quality cosmetic and personal care
            manufacturing solutions.
          </p>
        </div>

        <div className="catalog-grid">
          {categories.map((item) => (
            <div className="catalog-card" key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <button>View Products</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}