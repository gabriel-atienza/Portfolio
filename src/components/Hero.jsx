import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// Hero.jsx — Gabriel Atienza Portfolio
// Requires Tailwind v3 with coffee tokens in
// tailwind.config.js (see bottom of this file)
// ─────────────────────────────────────────────

// Fires callback once when element enters viewport
function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// Avatar: shows photo if src provided, falls back to initials
function Avatar({ src, initials = "GA" }) {
  const [err, setErr] = useState(false);
  return (
    <div className="w-20 h-20 rounded-full flex-shrink-0 flex items-center justify-center
                    bg-gradient-to-br from-coffee-caramel to-coffee-brown-mid
                    border-[3px] border-coffee-cream2
                    shadow-[0_4px_20px_rgba(58,30,10,0.18)]
                    overflow-hidden
                    font-serif text-2xl font-semibold text-coffee-cream">
      {src && !err
        ? <img
            src={src}
            alt="Profile photo"
            onError={() => setErr(true)}
            className="w-full h-full object-cover rounded-full"
          />
        : <span>{initials}</span>
      }
    </div>
  );
}

// Smooth scroll helper
function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

// ── Main Hero component ──────────────────────
export default function Hero({
  name           = "Gabriel Atienza",
  role           = "BS IT · Networking Specialization",
  location       = "Angeles, Pampanga, PH",
  avatarSrc      = "",        // e.g. "/gabriel.jpg" from your public/ folder
  avatarInitials = "GA",
  onViewProjects = () => scrollTo("projects"),
  onContact      = () => scrollTo("contact"),
}) {
  const [ref, visible] = useInView();

  // Tailwind v3 can't do dynamic class names, so we use
  // a transition + opacity/translate trick via data attributes
  const fadeClass = (delay) =>
    `transition-all duration-500 ${delay} ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
    }`;

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-coffee-cream border-b border-coffee-border
                 px-5 pt-8 pb-7 font-sans"
    >
      {/* Warm ambient glow — decorative */}
      <div className="pointer-events-none absolute -top-12 -right-12 w-52 h-52 rounded-full
                      bg-[radial-gradient(circle,rgba(200,132,42,0.13)_0%,transparent_70%)]" />

      {/* ── Avatar + name ── */}
      <div className={`flex items-start gap-4 mb-5 ${fadeClass("delay-[0ms]")}`}>
        <Avatar src={avatarSrc} initials={avatarInitials} />

        <div className="flex-1 min-w-0">
          <h1 className="font-serif text-[clamp(26px,8vw,34px)] font-semibold leading-[1.05]
                         text-coffee-brown-deep tracking-tight mb-1">
            {name.split(" ")[0]}
            <br />
            {name.split(" ").slice(1).join(" ")}
          </h1>

          <p className="text-[11px] font-semibold tracking-[0.08em] uppercase
                        text-coffee-caramel mb-1.5">
            {role}
          </p>

          <p className="flex items-center gap-1 text-[12px] text-coffee-muted">
            {/* Tabler icon — add CDN or @tabler/icons-react to your project */}
            <i className="ti ti-map-pin text-[13px]" aria-hidden="true" />
            {location}
          </p>
        </div>
      </div>

      {/* ── Bio ── */}
      <p className={`text-[13px] leading-[1.78] text-coffee-text-mid mb-[18px]
                     ${fadeClass("delay-[120ms]")}`}>
        IT student at{" "}
        <strong className="text-coffee-brown-deep font-semibold">Holy Angel University</strong>{" "}
        specializing in networking. I work best independently — researching, building, and figuring
        things out at depth. Aiming for a career in{" "}
        <strong className="text-coffee-brown-deep font-semibold">
          cloud infrastructure or cybersecurity
        </strong>
        , starting from the help desk up.
      </p>

      {/* ── CTA buttons ── */}
      <div className={`flex flex-wrap gap-2 ${fadeClass("delay-[220ms]")}`}>
        <button
          onClick={onViewProjects}
          className="px-5 py-2.5 rounded-full text-[13px] font-semibold tracking-wide
                     bg-coffee-brown-deep text-coffee-cream
                     shadow-[0_2px_10px_rgba(58,30,10,0.22)]
                     hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(58,30,10,0.3)]
                     transition-all duration-150"
        >
          View Projects
        </button>

        <button
          onClick={onContact}
          className="px-5 py-2.5 rounded-full text-[13px] font-medium
                     bg-transparent text-coffee-brown-mid
                     border border-coffee-border
                     hover:bg-coffee-cream2 hover:border-coffee-brown-light
                     transition-all duration-150"
        >
          Contact Me
        </button>
      </div>
    </section>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// ADD THIS TO YOUR tailwind.config.js → theme.extend.colors
// ─────────────────────────────────────────────────────────────────────────────
//
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {
//       colors: {
//         coffee: {
//           cream:          "#FDF6EE",
//           cream2:         "#F5EBD8",
//           caramel:        "#C8842A",
//           "caramel-soft": "#E8A84A",
//           "brown-deep":   "#3B1F0A",
//           "brown-mid":    "#7A4A1E",
//           "brown-light":  "#B07840",
//           "text-mid":     "#6B4423",
//           muted:          "#A07850",
//           border:         "#E0C9A8",
//           card:           "#FFFDF9",
//         },
//       },
//       fontFamily: {
//         sans:  ["DM Sans", "sans-serif"],
//         serif: ["Playfair Display", "serif"],
//       },
//     },
//   },
//   plugins: [],
// };
//
// Also add to your index.html <head>:
// <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;600&family=DM+Sans:wght@400;500;600&display=swap" />
// <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/tabler-icons.min.css" />
// ─────────────────────────────────────────────────────────────────────────────
