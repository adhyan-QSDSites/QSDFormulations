import "./services.css";

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 5c4 5.2 7 9.4 7 13a7 7 0 11-14 0c0-3.6 3-7.8 7-13z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
      </svg>
    ),
    title: "Cosmetics & personal care products",
    copy: "End-to-end manufacturing for cosmetics, nutraceuticals and personal care products, from formulation to filling.",
    href: "#cosmetics",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M8 24C8 13 17 8 25 8c0 9-5 18-16 18-2.7 0-4-1-4-1"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M9 23c3-5 7-9 12-12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Ayurvedic & herbal products",
    copy: "Launch your own brand with formulation, manufacturing and packaging built around traditional ingredients.",
    href: "#ayurvedic",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <rect
          x="6.5"
          y="12.5"
          width="19"
          height="9"
          rx="4.5"
          transform="rotate(-28 16 17)"
          stroke="currentColor"
          strokeWidth="1.4"
        />
        <path d="M14.3 12.2l3.4 9.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    title: "Nutraceutical products",
    copy: "Formulations tailored to your product requirements and target market, backed by rigorous testing.",
    href: "#nutraceutical",
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path
          d="M16 6a10 10 0 100 20c1.4 0 2.2-1 2.2-2.1 0-.6-.3-1-.6-1.4-.3-.4-.5-.7-.5-1.2 0-1 .8-1.7 1.8-1.7h2.1c2.2 0 4-1.7 4-4A9.9 9.9 0 0016 6z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="14" r="1.3" fill="currentColor" />
        <circle cx="16.5" cy="11.3" r="1.3" fill="currentColor" />
        <circle cx="12.3" cy="19" r="1.3" fill="currentColor" />
      </svg>
    ),
    title: "Colour cosmetics products",
    copy: "Packaging support across bottles, tubes, jars and custom formats, matched to your brand's finish.",
    href: "#colour",
  },
];

export default function WhatWeDo() {
  return (
    <section className="wwd">
      <div className="wwd__intro">
        <div className="wwd__eyebrow">
          <span className="wwd__eyebrow-rule" />
          What we do
        </div>
        <h2 className="wwd__heading">
          Manufacturing expertise, built around you.
        </h2>
        <p className="wwd__subhead">
          From concept to finished product, QSD provides reliable manufacturing
          solutions designed to help brands grow.
        </p>
      </div>

      <ul className="wwd__grid">
        {SERVICES.map((service) => (
          <li className="wwd__card" key={service.title}>
            <div className="wwd__icon">{service.icon}</div>
            <h3 className="wwd__card-title">{service.title}</h3>
            <p className="wwd__card-copy">{service.copy}</p>
            <a className="wwd__link" href={service.href}>
              <span>Explore service</span>
              <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3.5 8h9M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.3" />
              </svg>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
