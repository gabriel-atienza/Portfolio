import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// Certifications.jsx — Gabriel Atienza Portfolio
// Requires the coffee tokens in tailwind.config.js
// ─────────────────────────────────────────────

function useInView() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

// ── Data — edit progress values and statuses freely ──
const CERTS = [
  {
    id:       "tryhackme",
    name:     "TryHackMe — Pre-Security",
    issuer:   "TryHackMe",
    cat:      "security",
    status:   "active",      // "active" | "planned"
    icon:     "ti-flame",
    desc:     "Hands-on labs covering web fundamentals, Linux, networking basics, and SOC workflows.",
    progress: 40,            // remove or set null if planned
  },
  {
    id:       "cisco-netacad",
    name:     "Cisco Networking Academy",
    issuer:   "Cisco",
    cat:      "network",
    status:   "active",
    icon:     "ti-router",
    desc:     "IP addressing, routing, switching — foundational prep for CCNA.",
    progress: 55,
  },
  {
    id:       "comptia-net",
    name:     "CompTIA Network+",
    issuer:   "CompTIA",
    cat:      "network",
    status:   "planned",
    icon:     "ti-circle-dashed",
    desc:     "Vendor-neutral networking cert — infrastructure, operations, and troubleshooting.",
    progress: null,
  },
  {
    id:       "comptia-sec",
    name:     "CompTIA Security+",
    issuer:   "CompTIA",
    cat:      "security",
    status:   "planned",
    icon:     "ti-circle-dashed",
    desc:     "Industry baseline for cybersecurity — threat management, cryptography, risk mitigation.",
    progress: null,
  },
  {
    id:       "ccna",
    name:     "Cisco CCNA",
    issuer:   "Cisco",
    cat:      "network",
    status:   "planned",
    icon:     "ti-circle-dashed",
    desc:     "Enterprise networking, routing protocols, VLANs, and WAN — core to my specialization.",
    progress: null,
  },
  {
    id:       "aws-ccp",
    name:     "AWS Cloud Practitioner",
    issuer:   "Amazon Web Services",
    cat:      "cloud",
    status:   "planned",
    icon:     "ti-circle-dashed",
    desc:     "Cloud fundamentals — services, security, billing, and architecture on AWS.",
    progress: null,
  },
  {
    id:       "aws-saa",
    name:     "AWS Solutions Architect",
    issuer:   "Amazon Web Services",
    cat:      "cloud",
    status:   "planned",
    icon:     "ti-circle-dashed",
    desc:     "Designing scalable, resilient cloud systems — key milestone toward cloud-security roles.",
    progress: null,
  },
];

const FILTERS = [
  { label: "All",      value: "all"      },
  { label: "Security", value: "security" },
  { label: "Network",  value: "network"  },
  { label: "Cloud",    value: "cloud"    },
];

// Category pill styles
const CAT_STYLES = {
  security: "bg-red-50   text-red-800",
  network:  "bg-blue-50  text-blue-800",
  cloud:    "bg-amber-50 text-amber-800",
};

// ── Progress bar (animates in when visible) ───
function ProgressBar({ value, visible }) {
  return (
    <div className="mt-2">
      <div className="flex justify-between text-[10px] text-coffee-muted mb-1">
        <span>Progress</span>
        <span>{value}%</span>
      </div>
      <div className="h-[3px] rounded-full bg-coffee-cream2 overflow-hidden">
        <div
          className="h-full rounded-full bg-gradient-to-r from-coffee-caramel to-coffee-caramel-soft
                     transition-all duration-700 delay-300"
          style={{ width: visible ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

// ── Single cert card ──────────────────────────
function CertItem({ cert, index, visible, isLast }) {
  const isActive = cert.status === "active";

  return (
    <div
      className={`flex gap-3 relative transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Vertical connector */}
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-px bg-coffee-border" />
      )}

      {/* Dot */}
      <div className={`
        relative z-10 w-8 h-8 rounded-full flex-shrink-0
        flex items-center justify-center text-[13px]
        border transition-transform duration-200 hover:scale-110
        ${isActive
          ? "bg-coffee-caramel text-white border-coffee-caramel shadow-[0_2px_10px_rgba(200,132,42,0.3)]"
          : "bg-coffee-card text-coffee-muted border-coffee-border"
        }
      `}>
        <i className={`ti ${cert.icon}`} aria-hidden="true" />
      </div>

      {/* Card */}
      <div className={`
        flex-1 mb-2 p-3 rounded-xl border
        bg-coffee-card
        transition-all duration-200
        hover:-translate-y-0.5 hover:shadow-[0_4px_16px_rgba(58,30,10,0.08)]
        ${isActive ? "border-coffee-caramel-soft" : "border-coffee-border"}
      `}>
        {/* Top row */}
        <div className="flex justify-between items-start gap-2 mb-1">
          <span className="text-[13px] font-semibold text-coffee-brown-deep leading-snug flex-1">
            {cert.name}
          </span>
          <span className={`
            flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full
            ${isActive
              ? "bg-amber-50 text-amber-700"
              : "bg-coffee-cream2 text-coffee-muted"
            }
          `}>
            {isActive ? "In progress" : "Planned"}
          </span>
        </div>

        {/* Issuer + category */}
        <div className="flex items-center gap-1.5 mb-1.5">
          <span className="text-[11px] text-coffee-muted">{cert.issuer}</span>
          <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full ${CAT_STYLES[cert.cat]}`}>
            {cert.cat.charAt(0).toUpperCase() + cert.cat.slice(1)}
          </span>
        </div>

        {/* Description */}
        <p className="text-[12px] text-coffee-text-mid leading-[1.55]">{cert.desc}</p>

        {/* Progress bar — only for active certs */}
        {isActive && cert.progress != null && (
          <ProgressBar value={cert.progress} visible={visible} />
        )}
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────
export default function Certifications() {
  const [ref, visible]     = useInView();
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? CERTS
    : CERTS.filter((c) => c.cat === active);

  return (
    <section
      id="certs"
      ref={ref}
      className="bg-coffee-cream border-b border-coffee-border px-5 py-7 font-sans"
    >
      {/* Header */}
      <p className={`
        text-[10px] font-semibold tracking-[0.14em] uppercase text-coffee-caramel mb-1
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        Certifications
      </p>
      <h2 className={`
        font-serif text-[22px] font-semibold text-coffee-brown-deep tracking-tight mb-4
        transition-all duration-500 delay-[50ms]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        Learning path
      </h2>

      {/* Filter pills */}
      <div className={`
        flex flex-wrap gap-1.5 mb-4
        transition-all duration-500 delay-[100ms]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setActive(f.value)}
            className={`
              text-[11px] font-medium px-3 py-1 rounded-full border
              transition-all duration-150
              ${active === f.value
                ? "border-coffee-caramel text-coffee-caramel bg-[rgba(200,132,42,0.08)] font-semibold"
                : "border-coffee-border text-coffee-muted bg-transparent hover:border-coffee-caramel-soft hover:text-coffee-brown-mid"
              }
            `}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline */}
      <div className="flex flex-col">
        {filtered.map((cert, i) => (
          <CertItem
            key={cert.id}
            cert={cert}
            index={i}
            visible={visible}
            isLast={i === filtered.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
