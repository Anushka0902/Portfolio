import React from "react";
import { Network } from "lucide-react";

const ExperienceCard = ({ title, company, period, description, icon: Icon }) => (
  <div className="group relative overflow-hidden transition-all duration-300 w-full">
    {/* Animated gradient border */}
    <div className="absolute -inset-[2px] bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-lg opacity-70 animate-gradient-xy" />

    <div className="relative bg-gray-900/95 rounded-lg p-10 border border-gray-800/50 shadow-xl backdrop-blur-xl">
      {/* Top row */}
      <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
        {/* Icon */}
        <div className="relative shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl animate-pulse" />
          <Icon className="w-14 h-14 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
        </div>

        {/* Title & Company */}
        <div className="flex-1 min-w-[220px]">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
            {title}
          </h3>
          <span className="font-semibold text-blue-400 text-lg">{company}</span>
        </div>

        {/* Period badge */}
        <span className="text-sm font-mono bg-blue-500/10 border border-blue-500/30 text-blue-300 px-4 py-2 rounded-full shrink-0">
          {period}
        </span>
      </div>

      {/* Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent mb-8" />

      {/* Bullet points */}
      <ul className="space-y-4">
        {description.map((point, i) => (
          <li
            key={i}
            className="flex gap-4 items-start p-5 rounded-xl bg-white/[0.025] border border-white/5 border-l-2 border-l-transparent hover:border-l-cyan-400 hover:bg-cyan-500/5 hover:translate-x-1.5 transition-all duration-300"
          >
            
            <span className="w-2 h-2 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 mt-2 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
            <p className="text-gray-300 leading-relaxed text-sm">{point}</p>
          </li>
        ))}
      </ul>

      {/* Corner decorations */}
      <div className="absolute top-4 right-4">
        <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
        <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
      </div>
      <div className="absolute bottom-4 left-4">
        <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
        <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  const experiences = [
    {
      icon: Network,
      title: "Gen AI Developer",
      company: "Tata Consultancy Services",
      period: "April 2025 - Present",
      description: [
        "Architected and deployed an enterprise Generative AI solution using Python and LangChain to process and classify ServiceNow incidents, establishing a predictive model for ticket automation potential.",
        "Developed the full-stack application architecture, utilizing Streamlit to deliver an actionable dashboard that reduced initial ticket triage time by 40% through real-time LLM-generated predictions.",
        "Established secure and robust API integration with the core ServiceNow platform, ensuring a 99.9% uptime and demonstrating proficiency in connecting high-volume business systems to AI workflows.",
        "Delivered a key automation enablement capability that directly informed resource allocation, positioned to increase workflow automation adoption by an estimated 25% and drive measurable efficiency gains in ITSM.",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen relative overflow-hidden pt-32 pb-20">
        {/* Dark background */}
        <div className="absolute inset-0 bg-[#04081A]" />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Animated particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content container */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-8 mb-20">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Professional Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              ""
            </p>
          </div>

          {/* Single full-width card */}
          <div className="w-full max-w-5xl mx-auto">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </div>

        {/* Background glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>
    </>
  );
};

export default ExperienceSection;