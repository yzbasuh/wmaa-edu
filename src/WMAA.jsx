import React from "react";

export default function WMAA() {
  const NAV = [
    { id: "about", label: "About" },
    { id: "philosophy", label: "Philosophy" },
    { id: "mission", label: "Mission & Vision" },
    { id: "objectives", label: "Objectives" },
    { id: "corevalues", label: "Core Values" },
    { id: "admin", label: "Administration" },
    { id: "services", label: "Services" },
    { id: "strands", label: "SHS Strands" },
    { id: "alumni", label: "Alumni" },
    { id: "activities", label: "AY 2025–2026" },
  ];

  const objectives = [
    "Strengthen faith and Christian character.",
    "Promote academic excellence and critical thinking.",
    "Develop leadership, discipline, and a healthy lifestyle.",
    "Encourage community service and citizenship.",
    "Prepare learners for higher education and global competence.",
  ];

  const coreValues = [
    { title: "Love to God", desc: "Honor God through faith, devotion, and obedience." },
    { title: "Respect", desc: "Treat everyone with dignity, courtesy, and fairness." },
    { title: "Honesty", desc: "Practice truthfulness, accountability, and integrity." },
    { title: "Service", desc: "Serve God and others with compassion and willingness." },
  ];

  const admin = [
    { name: "Principal", note: "School Head", img: "", email: "" },
    { name: "Academic Head", note: "Curriculum & Instruction", img: "", email: "" },
    { name: "Finance Officer", note: "Treasury & Operations", img: "", email: "" },
    { name: "Chaplain", note: "Campus Ministry", img: "", email: "" },
    { name: "Guidance Counselor", note: "Student Support", img: "", email: "" },
  ];

  const services = [
    "Campus Ministry & Spiritual Life",
    "Guidance & Counseling",
    "Learning Resource Center / Library",
    "Computer Laboratory",
    "Sports & Wellness Programs",
    "Student Organizations & Clubs",
  ];

  const strands = [
    { track: "Academic", list: ["ABM", "HUMSS", "STEM"] },
    { track: "Tech-Voc", list: ["ICT", "HE / Cookery", "Bread & Pastry"] },
  ];

  const alumni = [
    { name: "Alumnus A", field: "Education", note: "Teacher & community leader" },
    { name: "Alumna B", field: "Health", note: "Nurse / Allied Health professional" },
    { name: "Alumnus C", field: "Ministry", note: "Mission worker and youth mentor" },
  ];

  const activities = [
    { title: "Spiritual Emphasis Week / Week of Prayer", when: "Q1 & Q3" },
    { title: "Leadership Training & Student Ministry", when: "Throughout the Year" },
    { title: "Academic Fairs & Recognition", when: "Per Term" },
    { title: "Sports Festival & Intramurals", when: "Mid-Year" },
    { title: "Community Outreach & Service", when: "Quarterly" },
    { title: "Cultural & Talent Events", when: "Per Semester" },
    { title: "Career Guidance & College Readiness", when: "Q4" },
  ];

  return (
    <div className="min-h-screen scroll-smooth bg-[#0b1026] text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-[#0b1026]/70 border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="/wmaa-logo.jpg"
              onError={(e) => { e.currentTarget.style.display = "none"; }}
              alt="WMAA Logo"
              className="h-10 w-10 rounded-full ring-2 ring-[#d4a017]/70 bg-white object-cover"
            />
            <div>
              <p className="font-semibold tracking-wide">Western Mindanao Adventist Academy</p>
              <p className="text-xs text-white/70">“The School for Better Future”</p>
            </div>
          </div>

          <nav className="hidden md:flex gap-6 text-sm">
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} className="hover:text-[#d4a017] transition-colors">
                {n.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex rounded-xl px-4 py-2 bg-[#d4a017] text-[#0b1026] font-semibold shadow-md hover:opacity-90"
          >
            Enroll / Inquire
          </a>
        </div>
      </header>

      <Section id="philosophy" title="Philosophy">
        <p>
          Education must develop the whole person—spiritual, mental, physical, and social—guided by
          Christian values and service to God and community.
        </p>
      </Section>

      {/* (sections omitted here to save space — keep your existing middle content!) */}

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-white/70 flex flex-col md:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Western Mindanao Adventist Academy</span>
          <span className="text-white/60">“The School for Better Future”</span>
        </div>
      </footer>
    </div>
  );
}

/* ✅ FIXED — Valid JSX Section component */
function Section({ id, title, children }) {
  return (
    <section id={id} className="mx-auto max-w-7xl px-4 py-12 md:py-16">
      <div className="mb-6 flex items-center gap-3">
        <div className="h-7 w-1.5 rounded-full bg-[#d4a017]" />
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
      </div>
      <div className="text-white/90 leading-relaxed">{children}</div>
    </section>
  );
}
