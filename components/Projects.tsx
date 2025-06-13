"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Undergraduate Research – Collab Web",
    description:
      "Trained Google's Palm2 LLM on 10 years of Georgia Tech student records to build a chatbot for efficient data queries; organized data in MySQL and created 5 visualization tools.",
    tech: ["Python", "Aura", "Jupyter", "Neo4j", "Palm2", "SQL", "Cypher", "AI", "Tableau", "GitHub", "Jupyter", "Personal"],
    href: "https://github.com/SurajGeddam/Collab-Web",
  },
  {
    title: "SeekNSpot",
    description:
      "Published a YouTube Chrome extension powered by Llama2 for quizzes, answers, and translations; integrated YouTube APIs and OpenAI API to navigate to relevant timestamps and generate content.",
    tech: ["Python", "JavaScript", "Flask", "Streamlit", "Llama2", "OpenAI API", "YouTube API", "API's", "AI", "Personal"],
    href: "https://github.com/SurajGeddam/SeekNSpot",
  },
  {
    title: "VolunTrack",
    description:
      "Built a volunteer event sign-in and hour-logging app using QR code tech with Firebase & React; designed roles for organizers and volunteers to track hours.",
    tech: ["Firebase", "React", "Node.js", "JavaScript", "Personal"],
    href: "https://github.com/SurajGeddam/VolunTrack",
  },
  {
    title: "Personal Portfolio",
    description:
      "A modern, animated portfolio site to showcase my projects, experience, and skills. Built to establish my personal brand and provide a professional online presence. Features responsive design, dark mode, Framer Motion animations, and a clean UI. Built with Next.js, React, Tailwind CSS, and deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion", "Vercel", "Personal"],
    href: "https://github.com/SurajGeddam/personal-portfolio",
  },
  {
    title: "Ref Token (Telegram Bot)",
    description:
      "A Telegram bot for tracking group invites, running challenge events, and managing prize information with time limits. Features anti-bot protection and real-time invite tracking. Built using Python, Rust, and Telegram Bot API (python-telegram-bot, aiogram).",
    tech: ["Python", "Rust", "Telegram Bot API", "aiogram", "python-telegram-bot", "API's", "Personal"],
    href: "https://github.com/SurajGeddam/ref-token-bot",
  },
  {
    title: "Worlds-Hardest-Game-Spin-Off",
    description:
      "A spin-off of the World's Hardest Game for GameBoy Advance. Developed in C for CS 2110. Features challenging levels and retro gameplay.",
    tech: ["C/C++", "GameBoy Advance", "School"],
    href: "https://github.com/SurajGeddam/Worlds-Hardest-Game-Spin-Off",
  },
  {
    title: "Clash-Defense-Game",
    description:
      "A Clash Royale-themed Tower Defense game built for CS 2340. Developed using Java, Android Studio, and Python for scripting. Features custom levels, enemy AI, and mobile gameplay.",
    tech: ["Java", "Android Studio", "Python", "School"],
    href: "https://github.com/SurajGeddam/Clash-Defense-Game",
  },
  {
    title: "Company Project: Automated Invoice Processing (Cox Automotive)",
    description:
      "Led 250+ hours of research on OCI services and integration testing. Developed an automated invoice image processing system using OCI AI Vision, presenting to 200 executives. Analyzed 10,000 invoices, benchmarking against Cox's EBS database. Integrated OCI Document Understanding to improve parsability by 50%, achieving 70% readability and 80% data accuracy. Built robust Django and REST API applications, increasing operational efficiency by 30%.",
    tech: ["Linux", "SQL", "Python", "Oracle AI Vision", "GitHub", "REST API", "Django", "AI", "API's", "Company"],
  },
  {
    title: "Company Project: Platform API Development (Fiserv)",
    description:
      "Created an end-to-end API within an enterprise platform, including unit and integration testing. Diagnosed discrepancies between CAT and PROD DML configs using Java Spring Boot. Built entities, repositories, services, and controllers to ensure system integrity.",
    tech: ["Java", "Spring Boot", "API's", "SQL", "GitHub", "Company"],
  },
];

const categories = [
  "All",
  "Python",
  "Java",
  "SQL",
  "JavaScript",
  "C/C++",
  "API's",
  "AI",
  "Oracle AI Vision",
  "Linux",
  "REST API",
  "Spring Boot",
  "Django",
  "GitHub",
  "Tableau",
  "Company",
  "Personal",
  "School",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading mb-6">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === cat
                ? "bg-primary text-white"
                : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft"
          >
            <h3 className="text-xl font-heading mb-2">{p.title}</h3>
            <p className="text-body text-gray-600 dark:text-gray-300 mb-4">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-body hover:underline"
            >
              View Project
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 