// src/components/LandingPage.jsx
import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  useEffect(() => {

    const statsEl = document.getElementById("stats");
    if (!statsEl) return;

    const counters = statsEl.querySelectorAll(".js-counter");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (!entries[0].isIntersecting) return;
        counters.forEach((el) => {
          const target = parseInt(el.dataset.target, 10) || 0;
          let current = 0;
          const step = Math.max(1, Math.floor(target / 120));
          const tick = () => {
            current += step;
            if (current < target) {
              el.textContent = current;
              requestAnimationFrame(tick);
            } else {
              el.textContent = target;
            }
          };
          tick();
        });
        obs.disconnect();
      },
      { threshold: 0.3 }
    );
    observer.observe(statsEl);
    return () => observer.disconnect();
  }, []);

  const features = [
    ["📊", "Dynamic Dashboard", "Real-time tracking of academic & activity metrics."],
    ["🎯", "Activity Tracker", "Upload conferences, MOOCs, internships & volunteering."],
    ["✅", "Faculty Approvals", "Quick verification workflow with audit trails."],
    ["📄", "Digital Portfolio", "Auto-generated, shareable, and verified profiles."],
    ["📈", "Analytics", "Reports aligned to NAAC / AICTE / NIRF requirements."],
    ["🔗", "Integrations", "Connect with your LMS or ERP."]
  ];

  return (
    <div className="antialiased text-gray-800">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-2xl">🎓</div>
            <div className="font-bold text-primary">Smart Student Hub</div>
          </div>
          <nav className="hidden md:flex gap-6 text-gray-600">
            <a href="#features" className="hover:text-primary">Features</a>
            <a href="#benefits" className="hover:text-primary">Benefits</a>
            <a href="#stats" className="hover:text-primary">Impact</a>
            <a href="#contact" className="hover:text-primary">Contact</a>
          </nav>
          <div className="hidden md:block">
            <button className="px-4 py-2 bg-primary text-white rounded-lg">Get Started</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="bg-white pt-24">
        <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Unlock your potential with smarter{" "}
              <span className="text-primary">student management</span>
            </h1>
            <p className="mt-4 text-gray-600 max-w-xl">
              Centralize, validate and showcase every student's academic and extracurricular journey — reduce admin load and empower students.
            </p>
            <div className="mt-6 flex gap-4">
              <a className="px-5 py-3 bg-primary text-white rounded-lg shadow" href="#contact">Get Started Free</a>
              <a className="px-5 py-3 border border-gray-200 rounded-lg" href="#features">Explore Features</a>
            </div>

            {/* Trusted logos line */}
            <div className="mt-8 flex items-center gap-6 text-gray-400">
              <span className="text-sm">Trusted by</span>
              <div className="flex gap-6 items-center">
                <span className="text-sm">NAAC</span>
                <span className="text-sm">AICTE</span>
                <span className="text-sm">NIRF</span>
                <span className="text-sm">UGC</span>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto"
          >
            {/* use local asset or URL */}
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="student mock"
              className="w-80 mx-auto"
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map(([icon, title, desc], idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="text-3xl">{icon}</div>
                <h3 className="mt-4 font-semibold">{title}</h3>
                <p className="mt-2 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Why Institutions Choose Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="text-4xl">🎓</div>
              <h3 className="mt-3 font-semibold">Student Empowerment</h3>
              <p className="text-gray-600 mt-2">Verified, polished profiles for placements and higher studies.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-3 font-semibold">Admin Efficiency</h3>
              <p className="text-gray-600 mt-2">Cut paperwork and automate reports for accreditation.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl">📊</div>
              <h3 className="mt-3 font-semibold">Data-Driven Insights</h3>
              <p className="text-gray-600 mt-2">Actionable analytics to boost student outcomes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="bg-primary text-white py-14">
        <div className="max-w-4xl mx-auto px-6 text-center grid md:grid-cols-3 gap-6">
          <div>
            <div className="text-4xl font-bold js-counter" data-target="95">0</div>
            <div className="mt-2">Time Saved (%)</div>
          </div>
          <div>
            <div className="text-4xl font-bold js-counter" data-target="85">0</div>
            <div className="mt-2">Participation Increase (%)</div>
          </div>
          <div>
            <div className="text-4xl font-bold js-counter" data-target="70">0</div>
            <div className="mt-2">Accel. Accreditation (%)</div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h3 className="text-2xl font-bold">Ready to transform your institution?</h3>
          <p className="text-gray-600 mt-2">Book a demo and see Smart Student Hub in action.</p>
          <div className="mt-6">
            <a className="px-6 py-3 rounded-lg bg-primary text-white" href="#contact">Schedule Demo</a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div>© 2025 Smart Student Hub</div>
          <div className="text-gray-400 text-sm mt-2">contact@smartstudenthub.edu</div>
        </div>
      </footer>
    </div>
  );
}
