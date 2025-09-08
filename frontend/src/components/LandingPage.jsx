"use client"

import { useEffect } from "react"

export default function ProfessionalLandingPage() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.target.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const targetElement = document.querySelector(href)
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    }

    // Add smooth scroll listeners to navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]')
    navLinks.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    const statsEl = document.getElementById("stats")
    if (!statsEl) return

    const counters = statsEl.querySelectorAll(".js-counter")
    const observer = new IntersectionObserver(
      (entries, obs) => {
        if (!entries[0].isIntersecting) return
        counters.forEach((el) => {
          const target = Number.parseInt(el.dataset.target, 10) || 0
          let current = 0
          const step = Math.max(1, Math.floor(target / 120))
          const tick = () => {
            current += step
            if (current < target) {
              el.textContent = current
              requestAnimationFrame(tick)
            } else {
              el.textContent = target
            }
          }
          tick()
        })
        obs.disconnect()
      },
      { threshold: 0.3 },
    )
    observer.observe(statsEl)

    return () => {
      observer.disconnect()
      navLinks.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  const features = [
    {
      icon: "📊",
      title: "Dynamic Dashboard",
      desc: "Real-time tracking of academic & activity metrics with comprehensive analytics.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "🎯",
      title: "Activity Tracker",
      desc: "Seamlessly upload conferences, MOOCs, internships & volunteering experiences.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "✅",
      title: "Faculty Approvals",
      desc: "Streamlined verification workflow with complete audit trails and transparency.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "📄",
      title: "Digital Portfolio",
      desc: "Auto-generated, shareable, and professionally verified student profiles.",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "📈",
      title: "Analytics & Reporting",
      desc: "Comprehensive reports aligned with NAAC, AICTE & NIRF requirements.",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      icon: "🔗",
      title: "System Integration",
      desc: "Seamless connectivity with existing LMS, ERP, and institutional systems.",
      gradient: "from-teal-500 to-cyan-500",
    },
  ]

  const benefits = [
    {
      icon: "🎓",
      title: "Student Empowerment",
      desc: "Create verified, professional profiles that enhance placement opportunities and academic advancement.",
      stat: "90% better placement rates",
    },
    {
      icon: "⚡",
      title: "Administrative Excellence",
      desc: "Eliminate paperwork bottlenecks and automate complex reporting for accreditation bodies.",
      stat: "75% reduction in admin time",
    },
    {
      icon: "📊",
      title: "Data-Driven Decisions",
      desc: "Access actionable insights and comprehensive analytics to optimize student outcomes.",
      stat: "3x faster decision making",
    },
  ]

  return (
    <div className="antialiased text-gray-900 bg-white scroll-smooth">
      {/* NAVIGATION */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <div className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Smart Student Hub
              </div>
            </div>

            <nav className="hidden lg:flex items-center space-x-8 text-gray-600 font-medium">
              <a
                href="#features"
                className="text-gray-600 focus:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                Features
              </a>
              <a
                href="#benefits"
                className="text-gray-600 focus:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                Benefits
              </a>
              <a
                href="#stats"
                className="text-gray-600 focus:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                Impact
              </a>
              <a
                href="#contact"
                className="text-gray-600 focus:text-blue-600 focus:outline-none transition-colors duration-300"
              >
                Contact
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              <button className="px-5 py-2.5 text-gray-700 font-medium focus:text-blue-600 focus:outline-none transition-colors duration-300">
                Login
              </button>
              <button className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl focus:from-blue-700 focus:to-purple-700 focus:outline-none transition-all duration-300 shadow-lg">
                Start Free Trial
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                  🚀 Trusted by 500+ Educational Institutions
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">
                  Transform Your{" "}
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Student Management
                  </span>{" "}
                  Experience
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-2xl text-pretty">
                  Centralize, validate, and showcase every student's academic journey with our comprehensive platform.
                  Reduce administrative overhead while empowering students to excel.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl focus:from-blue-700 focus:to-purple-700 focus:outline-none transition-all duration-300 shadow-xl">
                  Schedule Free Demo
                </button>
                <button className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl focus:border-blue-300 focus:text-blue-600 focus:outline-none transition-all duration-300">
                  Explore Features
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 mb-4">Compliance & Recognition</p>
                <div className="flex items-center space-x-8 text-gray-400">
                  <div className="text-sm font-semibold">NAAC Approved</div>
                  <div className="text-sm font-semibold">AICTE Compliant</div>
                  <div className="text-sm font-semibold">NIRF Ready</div>
                  <div className="text-sm font-semibold">UGC Recognized</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transition-shadow duration-300">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800">Student Dashboard</h3>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <span className="text-sm text-gray-600">Activities Completed</span>
                      <span className="text-sm font-semibold text-blue-600">12/15</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <span className="text-sm text-gray-600">Certificates Earned</span>
                      <span className="text-sm font-semibold text-green-600">8</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <span className="text-sm text-gray-600">Portfolio Score</span>
                      <span className="text-sm font-semibold text-purple-600">95%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Powerful Features for Modern Education
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
              Comprehensive tools designed to streamline student management and enhance educational outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon, title, desc, gradient }, idx) => (
              <div
                key={idx}
                className="group relative bg-white p-8 rounded-2xl shadow-lg transition-shadow duration-300 border border-gray-100 focus-within:border-gray-200"
              >
                <div className="relative space-y-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-r ${gradient} rounded-xl flex items-center justify-center text-2xl shadow-lg`}
                  >
                    {icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed text-pretty">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">Why Leading Institutions Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join hundreds of educational institutions that have transformed their student management approach
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {benefits.map(({ icon, title, desc, stat }, idx) => (
              <div key={idx} className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-3xl mx-auto shadow-xl">
                  {icon}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm mx-auto">{desc}</p>
                  <div className="inline-flex items-center px-4 py-2 bg-white rounded-full text-sm font-semibold text-blue-600 shadow-md">
                    {stat}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATISTICS SECTION */}
      <section id="stats" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Measurable Impact Across Institutions</h2>
            <p className="text-xl text-blue-100">Real results from real institutions using Smart Student Hub</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-3">
              <div className="text-5xl lg:text-6xl font-bold text-white js-counter" data-target="95">
                0
              </div>
              <div className="text-xl text-blue-100 font-medium">Time Saved</div>
              <div className="text-blue-200 text-sm">Average reduction in administrative workload</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl lg:text-6xl font-bold text-white js-counter" data-target="85">
                0
              </div>
              <div className="text-xl text-blue-100 font-medium">Participation Increase</div>
              <div className="text-blue-200 text-sm">More students engaging in activities</div>
            </div>
            <div className="space-y-3">
              <div className="text-5xl lg:text-6xl font-bold text-white js-counter" data-target="70">
                0
              </div>
              <div className="text-xl text-blue-100 font-medium">Faster Accreditation</div>
              <div className="text-blue-200 text-sm">Accelerated compliance reporting</div>
            </div>
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <div className="space-y-4">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 text-balance">
              Ready to Transform Your Institution?
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto text-pretty">
              Join the education revolution. Schedule a personalized demo and see how Smart Student Hub can elevate your
              institution.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl focus:from-blue-700 focus:to-purple-700 focus:outline-none transition-all duration-300 shadow-xl">
              Schedule Free Demo
            </button>
            <button className="px-10 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl focus:border-blue-300 focus:text-blue-600 focus:outline-none transition-all duration-300">
              Start Free Trial
            </button>
          </div>

          <div className="pt-8 text-sm text-gray-500">
            ✨ No credit card required • 30-day free trial • Setup in under 10 minutes
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="text-lg font-bold">Smart Student Hub</div>
              </div>
              <p className="text-gray-400 leading-relaxed text-pretty">
                Empowering educational institutions with intelligent student management solutions.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div>📧 contact@smartstudenthub.edu</div>
                <div>📞 +91 88400 47057</div>
                <div>☎️ +91 11223 44556</div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Office Address</h4>
              <div className="text-gray-400">
                🏢 4th Floor, Main Building ,Smart Tech LTD.
                <br />
                Lucknow, UP, India
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center focus:bg-blue-600 focus:outline-none transition-colors duration-300"
                >
                  🌐
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center focus:bg-blue-600 focus:outline-none transition-colors duration-300"
                >
                  💼
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center focus:bg-blue-600 focus:outline-none transition-colors duration-300"
                >
                  🐦
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <div>© 2025 Smart Student Hub. All rights reserved.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
