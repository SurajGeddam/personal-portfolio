"use client";
import { motion } from "framer-motion";
import { parse, format } from "date-fns";

const timelineItems = [
  // Education
  { type: "education", date: "2025-05", year: 2025, title: "MS in Machine Learning", organization: "Georgia Tech", location: "Atlanta, GA", bullets: [
    "GPA: 3.83",
    "Machine Learning",
    "Knowledge-Based AI",
    "Computer Vision",
    "Deep Learning"
  ] },
  { type: "education", date: "2024-05", year: 2024, title: "BS in Computer Science", organization: "Georgia Tech", location: "Atlanta, GA", bullets: [
    "GPA: 4.0",
    "Design & Analysis of Algorithms",
    "Embodied Intelligence",
    "Advanced Info Management",
    "Data Structures & Algorithms",
    "Systems & Networks"
  ] },
  { type: "experience", date: "2024-05_2024-08", year: 2024, title: "Software Eng Intern", organization: "Fiserv", location: "Alpharetta, GA", bullets: ["End-to-end API development with unit & integration tests", "Debugged CAT vs PROD DML configs in Spring Boot", "Built service/controller layers to maintain system integrity"] },
  { type: "experience", date: "2023-05_2024-05", year: 2023, title: "Software Eng Intern", organization: "Cox Automotive", location: "Atlanta, GA", bullets: ["Integrated OCI Document Understanding, improving parsability by 50%", "Derived 70% readability & 80% accuracy metrics to justify project continuation", "Built Django/REST API to boost operational efficiency by 30%"] },
  { type: "experience", date: "2022-05_2022-08", year: 2022, title: "Software Eng Intern", organization: "Cox Automotive", location: "Atlanta, GA", bullets: ["Spearheaded 250+ hours of research on OCI services and integration testing", "Developed automated invoice processing using OCI AI Vision for 10,000 invoices", "Analyzed results against Cox's EBS database for accuracy benchmarks"] },
  { type: "education", date: "2021-05", year: 2021, title: "Dual Enrollment Complete", organization: "Georgia Tech", location: "Atlanta, GA", bullets: [
    "Non-Degree in Computational & Applied Mathematics",
    "Applied Combinatorics",
    "Linear Algebra",
    "Multivariable Calculus",
    "Differential Calculus"
  ] },
  { type: "education", date: "2021-05", year: 2021, title: "Graduated High School", organization: "Lambert High School", location: "Alpharetta, GA", bullets: ["Rank: 4/763", "Weighted GPA: 4.71, Unweighted GPA: 4.0"] },
  { type: "experience", date: "2020-08_2021-01", year: 2020, title: "Software Eng Intern & Data Analyst", organization: "Octave Holdings / Pinnacle Leasing", location: "Alpharetta, GA", bullets: ["Built pricing model visualizer & analyzed P&L statements", "Researched $100M property investments & crafted strategy", "Managed investor leasing agreements using 6 months of data"] },
];

// Sort by date descending (most recent first)
const sortedTimeline = [...timelineItems].sort((a, b) => (a.date < b.date ? 1 : -1));

// Group by year
const groupedByYear: Record<string, typeof timelineItems> = sortedTimeline.reduce((acc, item) => {
  acc[item.year] = acc[item.year] || [];
  acc[item.year].push(item);
  return acc;
}, {} as Record<string, typeof timelineItems>);
const years = Object.keys(groupedByYear).sort((a, b) => Number(b) - Number(a));

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

// Helper to format dates
function formatTimelineDate(item: typeof timelineItems[number]) {
  if (item.type === "experience") {
    const [start, end] = item.date.split("_");
    const startDate = parse(start, "yyyy-MM", new Date());
    const endDate = parse(end, "yyyy-MM", new Date());
    return `${format(startDate, "MMM yyyy")} – ${format(endDate, "MMM yyyy")}`;
  } else {
    const date = parse(item.date, "yyyy-MM", new Date());
    return format(date, "MMM yyyy");
  }
}

export default function ExperienceTimeline() {
  let blockIdx = 0;
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading text-center mb-12">Timeline</h2>
      <div className="relative">
        {/* vertical center line */}
        <div className="absolute left-1/2 top-0 w-px h-full bg-gray-300 dark:bg-gray-600" />
        <motion.div
          className="grid grid-cols-9 gap-8 items-start relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {years.map((year) => (
            <>
              <div key={year} className="col-span-9 text-center mb-4 mt-8">
                <span className="inline-block bg-primary text-white rounded-full px-4 py-1 text-lg font-heading shadow-soft">
                  {year}
                </span>
              </div>
              {groupedByYear[year].map((item: typeof timelineItems[number]) => {
                const isLeft = blockIdx++ % 2 === 0;
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
                      (isLeft ? "col-start-1 text-left" : "col-start-6 text-right")
                    }
                    variants={itemVariants}
                  >
                    <p className="text-sm text-gray-500 dark:text-gray-400">{formatTimelineDate(item)}</p>
                    <h3 className="text-xl font-heading">{item.title}</h3>
                    <p className="font-body italic mb-2">
                      {item.organization} — {item.location}
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                      {item.bullets.map((b: string, i: number) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 