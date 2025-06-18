"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Undergraduate Research – Collab Web",
    description:
      "Trained Google's Palm2 LLM on 10 years of Georgia Tech student records to build a chatbot for efficient data queries; organized data in MySQL and created 5 visualization tools.",
    tech: ["Python", "Aura", "Jupyter", "Neo4j", "Palm2", "SQL", "Cypher", "AI", "Tableau", "GitHub", "Jupyter", "School"],
  },
  {
    title: "SeekNSpot",
    description:
      "Published a YouTube Chrome extension powered by Llama2 for quizzes, answers, and translations; integrated YouTube APIs and OpenAI API to navigate to relevant timestamps and generate content.",
    tech: ["Python", "JavaScript", "Flask", "Streamlit", "Llama2", "OpenAI API", "YouTube API", "API's", "AI", "Personal"],
    href: "https://devpost.com/software/seeknspot",
  },
  {
    title: "VolunTrack",
    description:
      "Built a volunteer event sign-in and hour-logging app using QR code tech with Firebase & React; designed roles for organizers and volunteers to track hours.",
    tech: ["Firebase", "React", "Node.js", "JavaScript", "Personal"],
    href: "https://devpost.com/software/voluntrack",
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
    href: "https://github.com/SurajGeddam/REF",
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
      "Automated invoice image processing system using OCI AI Vision and Document Understanding; improved parsability by 50% and achieved 80% data accuracy. Led research, analysis, and presented to 200 executives.",
    tech: ["Linux", "SQL", "Python", "Oracle AI Vision", "GitHub", "Django", "AI", "API's", "Company"],
  },
  {
    title: "Company Project: Platform API Development (Fiserv)",
    description:
      "Developed and tested end-to-end APIs using Java Spring Boot; resolved DML config issues and built robust service layers for system integrity.",
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
  "GitHub",
  "Company",
  "Personal",
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.tech.includes(filter));

  return (
    <section className="max-w-5xl mx-auto py-16 px-4 bg-black text-white">
      <h2 className="text-3xl font-heading mb-6">Projects</h2>
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              filter === cat
                ? "bg-white text-black"
                : "bg-black text-white border border-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 xl:gap-10 px-2 sm:px-4 md:px-8">
        {filtered.map((p) => (
          <motion.div
            key={p.title}
            whileHover={{ scale: 1.05 }}
            className="bg-black p-4 sm:p-6 rounded-lg shadow-soft flex flex-col h-full min-h-[320px] transition-transform border border-white"
          >
            <h3 className="text-lg sm:text-xl font-heading mb-2 break-words">{p.title}</h3>
            <p className="text-body mb-4 text-sm sm:text-base">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs px-2 py-1 bg-white text-black border border-white rounded-full mb-1"
                >
                  {t}
                </span>
              ))}
            </div>
            {p.href ? (
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-body hover:underline"
              >
                View Project
              </a>
            ) : (
              <span className="inline-flex items-center text-white font-body">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 17a2 2 0 100-4 2 2 0 000 4zm6-6V9a6 6 0 10-12 0v2a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2zm-2 0H8V9a4 4 0 118 0v2z" />
                </svg>
                Restricted
              </span>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
} 