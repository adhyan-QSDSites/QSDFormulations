import "./faq.css";

const BRANDS = [
  "Lumière",
  "Verdant Co.",
  "Solace",
  "Haven Naturals",
  "Alto Beauty",
  "Rooted",
  "Meridian",
  "Pure Form",
];

export default function BrandsWeWorkWith() {
  // Duplicated once so the CSS animation can loop seamlessly from
  // -50% back to 0% with no visible seam.
  const track = [...BRANDS, ...BRANDS];

  return (
    <section className="bww">
      <div className="bww__intro">
        <div className="bww__eyebrow">
          <span className="bww__eyebrow-rule" />
          Trusted by
        </div>
        <h2 className="bww__heading">Brands we work with</h2>
      </div>

      <div className="bww__marquee" role="list" aria-label="Client brands">
        <div className="bww__track">
          {track.map((brand, i) => (
            <span className="bww__logo" role="listitem" key={`${brand}-${i}`}>
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
