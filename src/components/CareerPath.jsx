import { useEffect, useRef, useState } from "react";

// ─────────────────────────────────────────────
// CareerPath.jsx — Gabriel Atienza Portfolio
// Requires the coffee tokens in tailwind.config.js
// (same ones from Hero.jsx)
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

// ── Career steps data — edit freely ──────────
const STEPS = [
  {
    id:    "helpdesk",
    icon:  "ti-headset",
    title: "IT Help Desk / Support",
    sub:   "Entry-level target — troubleshooting, ticketing, user support",
    badge: "Target now",
    now:   true,
  },
  {
    id:    "sysadmin",
    icon:  "ti-server",
    title: "Systems / Network Administrator",
    sub:   "Build on networking specialization and CCNA",
    badge: "Next step",
    now:   false,
  },
  {
    id:    "cloud",
    icon:  "ti-cloud",
    title: "Cloud / DevOps Engineer",
    sub:   "AWS, infrastructure as code, CI/CD pipelines",
    badge: "Long-term",
    now:   false,
  },
  {
    id:    "security",
    icon:  "ti-shield-check",
    title: "Cybersecurity Engineer",
    sub:   "Threat detection, network security, incident response",
    badge: "Long-term",
    now:   false,
  },
];

// ── Single step row ───────────────────────────
function TrackItem({ step, index, visible }) {
  const isLast = index === STEPS.length - 1;

  const itemFade = `transition-all duration-500 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;

  // Each item staggers by 100ms
  const delay = `delay-[${index * 100}ms]`;

  return (
    <div className={`flex gap-3 relative ${itemFade} ${delay}`}>

      {/* Vertical connector line (hidden on last item) */}
      {!isLast && (
        <div className="absolute left-4 top-8 bottom-0 w-px bg-coffee-border" />
      )}

      {/* Icon bubble */}
      <div className={`
        relative z-10 w-8 h-8 rounded-full flex-shrink-0
        flex items-center justify-center text-[15px]
        border transition-transform duration-200 hover:scale-110
        ${step.now
          ? "bg-coffee-brown-deep text-coffee-cream border-coffee-brown-deep shadow-[0_2px_10px_rgba(58,30,10,0.22)]"
          : "bg-coffee-card text-coffee-muted border-coffee-border"
        }
      `}>
        <i className={`ti ${step.icon}`} aria-hidden="true" />
      </div>

      {/* Text body */}
      <div className={`pb-5 flex-1 ${isLast ? "pb-0" : ""}`}>
        <p className="text-[13px] font-semibold text-coffee-brown-deep mb-0.5">
          {step.title}
        </p>
        <p className="text-[12px] text-coffee-muted leading-snug mb-1.5">
          {step.sub}
        </p>
        <span className={`
          inline-block text-[10px] font-semibold px-2.5 py-0.5 rounded-full
          ${step.now
            ? "bg-coffee-brown-deep text-coffee-cream"
            : "bg-coffee-cream2 text-coffee-brown-mid"
          }
        `}>
          {step.badge}
        </span>
      </div>

    </div>
  );
}

// ── Main component ────────────────────────────
export default function CareerPath() {
  const [ref, visible] = useInView();

  return (
    <section
      id="career"
      ref={ref}
      className="bg-coffee-cream border-b border-coffee-border px-5 py-7 font-sans"
    >
      {/* Section header */}
      <p className={`
        text-[10px] font-semibold tracking-[0.14em] uppercase
        text-coffee-caramel mb-1
        transition-all duration-500
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        Career path
      </p>

      <h2 className={`
        font-serif text-[22px] font-semibold text-coffee-brown-deep
        tracking-tight mb-5
        transition-all duration-500 delay-[50ms]
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
      `}>
        Where I'm headed
      </h2>

      {/* Steps */}
      <div className="flex flex-col">
        {STEPS.map((step, i) => (
          <TrackItem key={step.id} step={step} index={i} visible={visible} />
        ))}
      </div>
    </section>
  );
}
