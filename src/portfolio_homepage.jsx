import { useState } from "react";

// Simple inline icons to avoid external dependency issues
const IconMail = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16v16H4z" />
    <path d="M4 4l8 8 8-8" />
  </svg>
);

const IconGithub = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 21.13V24" />
  </svg>
);

const IconExternal = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <path d="M15 3h6v6" />
    <path d="M10 14L21 3" />
  </svg>
);

const IconMenu = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 6h18" />
    <path d="M3 12h18" />
    <path d="M3 18h18" />
  </svg>
);

export default function Portfolio() {
  const [open, setOpen] = useState(false);

  const projects = [
    {
      title: "Password Generator CLI",
      desc: "A simple Python tool that generates strong, customizable passwords.",
      tags: ["Python", "Security", "CLI"],
      link: "https://github.com/yourname/password-generator"
    },
    {
      title: "Local Network Scanner",
      desc: "Scans local network devices and identifies open ports (learning project).",
      tags: ["Networking", "Python", "Cybersecurity"],
      link: "https://github.com/yourname/network-scanner"
    },
    {
      title: "System Monitor Dashboard",
      desc: "Displays CPU, RAM, and disk usage in real time.",
      tags: ["Python", "OS", "Automation"],
      link: "https://github.com/yourname/system-monitor"
    }
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* NAV */}
      <div className="flex justify-between items-center px-6 py-4 border-b border-zinc-800">
        <div className="font-semibold">Gabriel Atienza</div>
        <div className="hidden md:flex gap-6 text-sm text-zinc-400">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <IconMenu />
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 py-3 border-b border-zinc-800 text-sm space-y-2">
          <a href="#projects" className="block">Projects</a>
          <a href="#about" className="block">About</a>
          <a href="#contact" className="block">Contact</a>
        </div>
      )}

      {/* HERO */}
      <section className="px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">
          IT Student & Aspiring Cybersecurity Engineer
        </h1>
        <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
          I build small security tools, learn systems, and document my progress as I work toward a career in IT and cybersecurity.
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <a className="px-4 py-2 bg-white text-black rounded-xl flex items-center gap-2" href="mailto:your@email.com">
            <IconMail /> Email
          </a>
          <a className="px-4 py-2 border border-zinc-700 rounded-xl flex items-center gap-2" href="https://github.com/yourname">
            <IconGithub /> GitHub
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-16 max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-zinc-400">
          I am currently building foundational skills in IT, networking, Linux, and Python.
          My focus is cybersecurity and systems engineering, with an emphasis on hands-on learning and practical projects.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div key={i} className="p-5 border border-zinc-800 rounded-2xl bg-zinc-900">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm text-zinc-400 mt-2">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-3">
                {p.tags.map((t, idx) => (
                  <span key={idx} className="text-xs bg-zinc-800 px-2 py-1 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={p.link}
                className="inline-flex items-center gap-1 mt-4 text-sm text-blue-400"
              >
                View <IconExternal />
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16 text-center">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-zinc-400 mt-2">Open to internships, collaborations, and learning opportunities.</p>
        <a
          href="mailto:your@email.com"
          className="inline-block mt-4 px-6 py-3 bg-white text-black rounded-xl"
        >
          Send Email
        </a>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10 text-center text-zinc-600 text-sm">
        Built by Gabriel Atienza • IT Student Portfolio
      </footer>
    </div>
  );
}
