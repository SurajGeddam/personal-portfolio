"use client";
import React from "react";

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
      <h2 className="text-3xl font-heading mb-8 text-center">Experience</h2>
      <div className="relative">
        <div className="absolute left-1/2 top-0 w-1 h-full bg-gray-300 dark:bg-gray-600 -translate-x-1/2 z-0" />
        <div className="grid grid-cols-3 gap-y-16 relative z-10">
          {experiences.map((exp, idx) => (
            <React.Fragment key={exp.date}>
              {/* Left card */}
              <div className={`col-span-1 flex justify-end ${idx % 2 !== 0 ? "opacity-0 pointer-events-none" : ""}`}>
                {idx % 2 === 0 && (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft w-full max-w-md text-right">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                    <h3 className="text-xl font-heading">{exp.role}</h3>
                    <p className="font-body italic mb-2">{exp.company} — {exp.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              {/* Center dot */}
              <div className="col-span-1 flex flex-col items-center relative">
                <div className="w-5 h-5 bg-primary rounded-full border-4 border-white dark:border-gray-900 z-10" />
              </div>
              {/* Right card */}
              <div className={`col-span-1 flex justify-start ${idx % 2 === 0 ? "opacity-0 pointer-events-none" : ""}`}>
                {idx % 2 !== 0 && (
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft w-full max-w-md text-left">
                    <p className="text-sm text-gray-500 dark:text-gray-400">{exp.date}</p>
                    <h3 className="text-xl font-heading">{exp.role}</h3>
                    <p className="font-body italic mb-2">{exp.company} — {exp.location}</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {exp.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
} 