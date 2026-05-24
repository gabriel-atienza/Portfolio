export default function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-gray-500">
          IT Student • Future Cybersecurity Specialist
        </p>

        <h1 className="text-5xl font-bold md:text-7xl">
          Gabriel Atienza
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-400 md:text-xl">
          Building my path into IT and cybersecurity while learning modern
          development, networking, and digital systems.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="rounded-2xl border border-white px-6 py-3 transition hover:bg-white hover:text-black"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-300"
          >
            Contact Me
          </a>
        </div>
      </section>

      {/* About */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">About Me</h2>

          <p className="mt-6 max-w-3xl text-gray-400 leading-8">
            I’m currently pursuing a future in IT with long-term goals focused
            on cybersecurity, networking, and systems. I enjoy learning modern
            tools, building projects, and continuously improving my technical
            skills.
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="border-t border-white/10 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">Skills</h2>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Git & GitHub",
              "Networking Basics",
              "Cybersecurity Fundamentals",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold md:text-4xl">Projects</h2>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30">
              <h3 className="text-2xl font-semibold">Personal Portfolio</h3>

              <p className="mt-4 text-gray-400 leading-7">
                Responsive portfolio website built with React, Vite, and
                Tailwind CSS.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 transition hover:border-white/30">
              <h3 className="text-2xl font-semibold">Future Security Lab</h3>

              <p className="mt-4 text-gray-400 leading-7">
                Planned homelab project focused on networking, Linux, and
                cybersecurity learning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="border-t border-white/10 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Contact</h2>

          <p className="mt-6 text-gray-400">
            Open to collaborations, internships, and opportunities to learn.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com"
              className="rounded-2xl border border-white px-6 py-3 transition hover:bg-white hover:text-black"
            >
              GitHub
            </a>

            <a
              href="mailto:your@email.com"
              className="rounded-2xl bg-white px-6 py-3 font-medium text-black transition hover:bg-gray-300"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}