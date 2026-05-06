import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";

const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Gen AI Developer & Developing projects",
    "Full-Stack Developer & frontend Enthusiast",
    "Prompt Engineering",
    "MERN stack & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: 'Anushka Joshi',
    title: 'Gen AI Developer | LLM Engineer | RAG Specialist',
    skills: [
        'Python', 'LangChain', 'LangGraph',
        'RAG', 'Agentic AI', 'OpenAI', 'Prompting',
        'Pinecone', 'ChromaDB', 'FastAPI',
        'Node.js', 'React.js', 'Azure',
        'Streamlit', 'MongoDB', 'JavaScript'
    ],
    impactMetrics: {
        triageReduction: '40%',
        retrievalAccuracy: '+28% MRR',
        uptime: '99.9%',
        automationBoost: '25%'
    },
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 1,
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.impactMetrics.triageReduction === '40%'
        );
    }
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }

      @keyframes fadeSlideUp {
        from { opacity: 0; transform: translateY(32px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes fadeSlideLeft {
        from { opacity: 0; transform: translateX(-40px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeSlideRight {
        from { opacity: 0; transform: translateX(40px); }
        to   { opacity: 1; transform: translateX(0); }
      }
      @keyframes fadeSlideDown {
        from { opacity: 0; transform: translateY(-24px); }
        to   { opacity: 1; transform: translateY(0); }
      }
      @keyframes popIn {
        0%   { opacity: 0; transform: scale(0.7); }
        70%  { transform: scale(1.08); }
        100% { opacity: 1; transform: scale(1); }
      }
      @keyframes glowPulse {
        0%, 100% { box-shadow: 0 0 0 0 rgba(96,165,250,0); }
        50%       { box-shadow: 0 0 18px 4px rgba(96,165,250,0.35); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-10px); }
      }
      @keyframes floatSlow {
        0%, 100% { transform: translateY(0px); }
        50%       { transform: translateY(-6px); }
      }
      @keyframes shimmer {
        0%   { background-position: -200% center; }
        100% { background-position: 200% center; }
      }
      @keyframes scanline {
        0%   { top: -10%; }
        100% { top: 110%; }
      }

      .hero-badge    { opacity: 0; animation: fadeSlideDown  0.6s ease forwards 0.2s; }
      .hero-name     { opacity: 0; animation: fadeSlideLeft  0.7s ease forwards 0.45s; }
      .hero-flip     { opacity: 0; animation: fadeSlideUp   0.6s ease forwards 0.7s; }
      .hero-desc     { opacity: 0; animation: fadeSlideUp   0.6s ease forwards 0.9s; }
      .hero-btns     { opacity: 0; animation: fadeSlideUp   0.6s ease forwards 1.1s; }
      .hero-badge-f1 { opacity: 0; animation: popIn         0.5s ease forwards 1.3s; }
      .hero-badge-f2 { opacity: 0; animation: popIn         0.5s ease forwards 1.5s; }
      .hero-badge-f3 { opacity: 0; animation: popIn         0.5s ease forwards 1.7s; }
      .hero-code-win { opacity: 0; animation: fadeSlideRight 0.8s ease forwards 0.5s; }

      .animate-float      { animation: float     3.5s ease-in-out infinite; }
      .animate-float-slow { animation: floatSlow 5s   ease-in-out infinite; }

      .badge-glow { animation: glowPulse 2.5s ease-in-out infinite; }

      .name-shimmer {
        background: linear-gradient(
          90deg,
          #60a5fa 0%, #34d399 30%, #a78bfa 60%, #60a5fa 100%
        );
        background-size: 200% auto;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        animation: shimmer 4s linear infinite;
      }

      .btn-glow:hover { animation: glowPulse 1.2s ease-in-out infinite; }

      .code-scanline {
        position: absolute; left: 0; right: 0; height: 3px;
        background: linear-gradient(90deg, transparent, rgba(96,165,250,0.25), transparent);
        animation: scanline 4s linear infinite;
        pointer-events: none;
        z-index: 10;
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTarget =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;
      document.documentElement.style.setProperty(
        "--hero-padding-top",
        isTarget ? "12rem" : "0"
      );
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);
    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <main className="bg-[#020617] text-white min-h-screen">
      <section
        className="hero min-h-screen flex items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0"
        style={{ paddingTop: "var(--hero-padding-top, 0)" }}
      >
        <GridBackground />

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={10} />
        </div>

        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">

          {/* ── Left column ── */}
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 relative">

            <div className="absolute hidden lg:block lg:-top-20 lg:-left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
            <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl"></div>

            {/* Welcome badge */}
            <div className="hero-badge inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 mb-6 sm:mb-8 badge-glow">
              <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
              <span className="text-gray-300 text-xs sm:text-sm font-medium">
                Welcome to my portfolio
              </span>
            </div>

            {/* Name */}
            <div className="hero-name relative mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <SparklesText text="Hello" />
                <span className="relative inline-block">
                  I&apos;m
                  <span className="name-shimmer"> ANUSHKA JOSHI</span>
                </span>
              </h1>
              <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
            </div>

            {/* Flip words */}
            <div className="hero-flip inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-6 sm:mb-8 backdrop-blur-sm">
              <i className="fas fa-rocket text-blue-400 animate-bounce text-sm sm:text-base"></i>
              <FlipWords
                className="text-lg sm:text-xl text-blue-400 font-medium"
                words={words}
              />
            </div>

            {/* Description */}
            <div className="hero-desc relative mb-8 sm:mb-12 max-w-xl">
              <p className="text-base sm:text-xl text-gray-300/90 leading-relaxed border-l-2 border-blue-500/30 pl-4">
                GEN AI 💻 | LLM 🔧 | RAG 📈 | Langchain
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="hero-btns flex flex-col sm:flex-row gap-4 sm:gap-6">
              <a
                href="https://github.com/Anushka0902"
                className="btn-glow group relative inline-flex items-center justify-center bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                  <span className="flex items-center justify-center gap-2 text-white font-medium">
                    <span>Learn More</span>
                    <i className="fas fa-arrow-right transition-all duration-300 group-hover:translate-x-1"></i>
                  </span>
                </span>
              </a>

              <a
                href="https://drive.google.com/file/d/1aRHWdZIHAuHejNwM8MSJ2tjjaMIDaY1Z/view?usp=sharing"
                className="btn-glow group relative inline-flex items-center justify-center p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105"
              >
                <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                  <span className="flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white">
                    <span>Get Resume</span>
                    <i className="fas fa-envelope transition-all duration-300 group-hover:rotate-12"></i>
                  </span>
                </span>
              </a>
            </div>

            {/* Floating badges */}
            <div className="hero-badge-f1 hidden lg:block absolute left-[5.5rem] top-[2.3rem] animate-float-slow">
              <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                <i className="fas fa-wand-magic-sparkles"></i>&nbsp;&nbsp;Developer
              </div>
            </div>
            <div className="hero-badge-f2 hidden lg:block absolute right-10 top-20 animate-float">
              <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Code
              </div>
            </div>
            <div className="hero-badge-f3 hidden lg:block absolute top-[17rem] left-[70%] transform -translate-x-1/2 animate-float">
              <div className="px-4 py-2 rounded-lg bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 text-amber-400">
                <i className="fas fa-lightbulb"></i>&nbsp;&nbsp;Innovation
              </div>
            </div>
          </div>

          {/* ── Right column — Code window ── */}
          <div className="hero-code-win w-full lg:w-1/2">
            <div className="gradient-border">
              <div className="code-window bg-[#091121] relative overflow-hidden">
                <div className="code-scanline"></div>
                <div className="window-header">
                  <div className="window-dot bg-red-500"></div>
                  <div className="window-dot bg-yellow-500"></div>
                  <div className="window-dot bg-green-500"></div>
                  <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                    <i className="fas fa-code"></i>
                    anushka.js
                  </span>
                </div>
                <pre className="language-javascript">
                  <code className="language-javascript">{code}</code>
                </pre>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center gap-2">
        <span className="text-gray-400 text-sm flex items-center gap-2">
          <i className="fas fa-mouse text-blue-400"></i>
          About me
        </span>
        <i className="fas fa-chevron-down text-blue-400 text-xl"></i>
      </div>

      <PortfolioPage />
    </main>
  );
}