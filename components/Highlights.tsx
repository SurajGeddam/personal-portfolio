"use client";
import {
  BookOpenIcon,
  BriefcaseIcon,
  FolderIcon,
  AwardIcon,
} from "lucide-react";

const stats = [
  { icon: BookOpenIcon, label: "GPA", value: "3.83/4.0" },
  { icon: BriefcaseIcon, label: "Internships", value: "3+ Years" },
  { icon: FolderIcon, label: "Projects", value: "5+" },
  { icon: AwardIcon, label: "Certifications", value: "6" },
];

export default function Highlights() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ icon: Icon, label, value }) => (
          <div
            key={label}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft hover:scale-105 transition-transform"
          >
            <Icon size={32} className="text-primary" />
            <h3 className="text-2xl font-heading mt-4">{value}</h3>
            <p className="text-body text-gray-600 dark:text-gray-400">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
} 