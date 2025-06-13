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
    company: "Cox Automotive Inc.",
    location: "Atlanta, GA · Hybrid",
    bullets: [
      "Integrated OCI Document Understanding into previous year's invoice image processing project to improve parsability by 50%.",
      "Derived statistical conclusions on service producing 70% readability and 80% data accuracy confirming project continuation.",
      "Utilized Django and REST APIs to create a robust application that increased operational efficiency by 30% for Cox."
    ],
  },
  {
    date: "May 2022 – Aug 2022",
    role: "Software Engineering Intern",
    company: "Cox Automotive Inc.",
    location: "Atlanta, GA · Hybrid",
    bullets: [
      "Spearheaded 250+ hours of research on OCI services and integration testing with multiple databases.",
      "Developed an automated invoice image processing system using OCI AI Vision technology and presented ideas to 200 executives.",
      "Performed analysis on 10,000 company invoices and compared application functionality against Cox's standard EBS database."
    ],
  },
  {
    date: "Aug 2020 – Jan 2021",
    role: "Software Engineering Intern & Data Analyst",
    company: "Octave Holdings/Invesment & Pinnacle Leasing and Management",
    location: "Alpharetta, GA",
    bullets: [
      "Built pricing model display software and analyzed incoming P&L statements.",
      "Researched investment opportunities and crafted strategies for a $100M property portfolio.",
      "Collaborated with executives to manage investor leasing agreements based on 6 months of data."
    ],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading text-center mb-12">Experience</h2>
      <div className="relative grid grid-cols-9 gap-8 items-start">
        {/* Vertical center line */}
        <div className="col-start-5 col-end-6 mx-auto w-px bg-gray-300 dark:bg-gray-600 h-full"></div>

        {experiences.map((exp, idx) => {
          const isLeft = idx % 2 === 0;
          return (
            <div
              key={exp.date}
              className={`col-span-4 ${isLeft ? "col-start-1 text-left" : "col-start-6 text-right"}`}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
              <h3 className="text-xl font-heading">{exp.role}</h3>
              <p className="font-body italic mb-2">
                {exp.company} — {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                {exp.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
} 