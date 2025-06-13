"use client";
import { motion } from "framer-motion";

const timelineItems = [
  // Education
  {
    type: "education",
    date: "May 2021",
    title: "Graduated High School",
    organization: "Lambert High School",
    location: "Alpharetta, GA",
    bullets: [
      "Rank: 4/763",
      "Weighted GPA: 4.71, Unweighted GPA: 4.0",
    ],
  },
  {
    type: "education",
    date: "May 2021",
    title: "Dual Enrollment Complete",
    organization: "Georgia Tech",
    location: "Atlanta, GA",
    bullets: [
      "Non-Degree in Computational & Applied Mathematics",
      "GPA: 4.0",
    ],
  },
  {
    type: "education",
    date: "May 2024",
    title: "BS in Computer Science",
    organization: "Georgia Tech",
    location: "Atlanta, GA",
    bullets: [
      "GPA: 4.0",
      "Core: Algorithms, Systems & Networks, Computational Complexity",
    ],
  },
  {
    type: "education",
    date: "May 2025",
    title: "MS in Machine Learning",
    organization: "Georgia Tech",
    location: "Atlanta, GA",
    bullets: [
      "GPA: 3.83",
      "Core: Computer Vision, Deep Learning, Knowledge-Based AI",
    ],
  },

  // Experience
  {
    type: "experience",
    date: "May 2024 – Aug 2024",
    title: "Software Eng Intern",
    organization: "Fiserv",
    location: "Alpharetta, GA",
    bullets: [
      "End-to-end API development with unit & integration tests",
      "Debugged CAT vs PROD DML configs in Spring Boot",
      "Built service/controller layers to maintain system integrity",
    ],
  },
  {
    type: "experience",
    date: "May 2023 – May 2024",
    title: "Software Eng Intern",
    organization: "Cox Automotive",
    location: "Atlanta, GA",
    bullets: [
      "Integrated OCI Document Understanding, improving parsability by 50%",
      "Derived 70% readability & 80% accuracy metrics to justify project continuation",
      "Built Django/REST API to boost operational efficiency by 30%",
    ],
  },
  {
    type: "experience",
    date: "May 2022 – Aug 2022",
    title: "Software Eng Intern",
    organization: "Cox Automotive",
    location: "Atlanta, GA",
    bullets: [
      "Spearheaded 250+ hours of research on OCI services and integration testing",
      "Developed automated invoice processing using OCI AI Vision for 10,000 invoices",
      "Analyzed results against Cox's EBS database for accuracy benchmarks",
    ],
  },
  {
    type: "experience",
    date: "Aug 2020 – Jan 2021",
    title: "Software Eng Intern & Data Analyst",
    organization: "Octave Holdings / Pinnacle Leasing",
    location: "Alpharetta, GA",
    bullets: [
      "Built pricing model visualizer & analyzed P&L statements",
      "Researched $100M property investments & crafted strategy",
      "Managed investor leasing agreements using 6 months of data",
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function ExperienceTimeline() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading text-center mb-12">Timeline</h2>

      {/* wrapper for line + items */}
      <div className="relative">
        {/* vertical center line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 dark:bg-gray-600" />

        {/* grid of items */}
        <motion.div
          className="grid grid-cols-9 gap-8 items-start relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {timelineItems.map((item, idx) => {
            const isLeft = idx % 2 === 0;
            const base = "col-span-4 p-6 rounded-lg";
            const style =
              item.type === "education"
                ? "border-2 border-accent bg-accent/10"
                : "bg-white dark:bg-gray-800 shadow-soft";
            return (
              <motion.div
                key={item.date + item.title}
                className={
                  base +
                  " " +
                  style +
                  " " +
                  (isLeft
                    ? "col-start-1 text-left"
                    : "col-start-6 text-right")
                }
                variants={itemVariants}
              >
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.date}
                </p>
                <h3 className="text-xl font-heading">{item.title}</h3>
                <p className="font-body italic mb-2">
                  {item.organization} — {item.location}
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  {item.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
} 