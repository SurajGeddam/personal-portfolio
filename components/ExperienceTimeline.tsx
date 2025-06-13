"use client";

const experiences = [
  {
    date: "May 2024 – Aug 2024",
    role: "Software Engineering Intern",
    company: "Fiserv",
    location: "Alpharetta, GA",
    bullets: [
      "Created an end-to-end API within the existing platform, with unit and integration tests.",
      "Located discrepancies between CAT and PROD DML configurations using Java Spring Boot.",
      "Built entities, repositories, service, and controller classes to maintain system integrity."
    ],
  },
  {
    date: "May 2023 – May 2024",
    role: "Software Engineering Intern",
    company: "Cox Automotive",
    location: "Atlanta, GA",
    bullets: [
      "Spearheaded 250+ hours of research on OCI services and presented use cases to 200 executives.",
      "Automated invoice image processing for 10,000 invoices using OCI AI Vision.",
      "Developed SQL & Python tests validating AI service metrics at 70% readability and 80% accuracy."
    ],
  },
  {
    date: "May 2022 – Aug 2022",
    role: "Software Engineering Intern",
    company: "Cox Automotive",
    location: "Atlanta, GA",
    bullets: [
      "Same as above (continued internship)."
    ],
  },
  {
    date: "Aug 2020 – Jan 2021",
    role: "Software Engineering Intern & Data Analyst",
    company: "Octave Holdings / Pinnacle Leasing",
    location: "Alpharetta, GA",
    bullets: [
      "Built pricing model display software and analyzed incoming P&L statements.",
      "Researched investment opportunities and crafted strategies for $100M property portfolio.",
      "Collaborated with executives to manage investor leasing agreements using 6 months of data."
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading mb-8">Experience</h2>
      <div className="relative">
        {experiences.map((exp, idx) => (
          <div
            key={exp.date}
            className={`mb-12 flex flex-col md:flex-row items-start ${
              idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse text-right"
            }`}
          >
            <div className="md:w-1/2">
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
              <h3 className="text-xl font-heading">{exp.role}</h3>
              <p className="font-body italic mb-2">{exp.company} — {exp.location}</p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block w-1/2">
              {/* Spacer for alternating layout */}
            </div>
          </div>
        ))}
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 dark:bg-gray-600"></div>
      </div>
    </section>
  );
} 