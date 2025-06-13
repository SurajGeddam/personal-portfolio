"use client";
import Image from "next/image";

const bubbles = [
  {
    type: "profile",
    size: "w-40 h-40",
    bg: "bg-primary",
    content: <Image src="/face.jpg" alt="Suraj Geddam" className="rounded-full" width={160} height={160} />,  // placeholder
    caption: "MS in ML @ Georgia Tech",
  },
  {
    type: "education",
    size: "w-32 h-32",
    bg: "bg-accent",
    title: "MS in Machine Learning",
    subtitle: "Georgia Tech, 3.83 GPA",
  },
  {
    type: "education",
    size: "w-28 h-28",
    bg: "bg-indigo-500",
    title: "BS in CS",
    subtitle: "Georgia Tech, 4.0 GPA",
  },
  {
    type: "education",
    size: "w-24 h-24",
    bg: "bg-purple-500",
    title: "Dual Enrollment",
    subtitle: "Comp & Applied Math",
  },
  {
    type: "education",
    size: "w-20 h-20",
    bg: "bg-pink-500",
    title: "High School",
    subtitle: "4.71 Wtd GPA",
  },
  {
    type: "stats",
    size: "w-28 h-28",
    bg: "bg-yellow-500",
    title: "SAT",
    subtitle: "1500",
  },
  {
    type: "stats",
    size: "w-28 h-28",
    bg: "bg-green-500",
    title: "Projects",
    subtitle: "5+",
  },
  {
    type: "stats",
    size: "w-28 h-28",
    bg: "bg-blue-500",
    title: "Certifications",
    subtitle: "6",
  },
  {
    type: "link",
    size: "w-32 h-32",
    bg: "bg-gray-700",
    title: "GitHub",
    subtitle: "SurajGeddam",
    href: "https://github.com/SurajGeddam",
  },
];

export default function EducationBubbles() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-heading text-center mb-8">About & Education</h2>
      <div className="relative flex flex-wrap justify-center items-center gap-8">
        {bubbles.map((b, i) => (
          <div
            key={i}
            className={`${b.size} ${b.bg} rounded-full flex flex-col justify-center items-center text-white p-4 shadow-soft hover:scale-105 transition-transform`}>
            {b.content || (
              <><h3 className="font-heading text-sm text-center">{b.title}</h3><p className="text-xs text-center mt-1">{b.subtitle}</p></>
            )}
            {b.href && (
              <a href={b.href} target="_blank" rel="noopener noreferrer" className="absolute inset-0 rounded-full"></a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
} 