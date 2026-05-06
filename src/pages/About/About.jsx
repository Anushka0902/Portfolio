

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Gen AI Developer, Software Engineer 
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/601014116770475.6068beff4640a.gif"
                  className="rounded-[15px] shadow block"
                  alt="coding illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <p className="text-white">
                Hello! I'm 
ANUSHKA JOSHI, I'm a Gen AI Developer who builds AI systems that actually work in production — not just demos.{" "}
                <span className="font-bold text-white">
                  As the developer multi-agent research systems
                </span>
                , specialize in agentic pipelines, RAG architectures, and full-stack LLM applications.
              </p>
              <p className="text-white">
                I've built self-correcting multi-agent research systems using LangGraph, hybrid multi-modal RAG pipelines combining semantic and keyword search, and LLM-powered automation tools that deliver measurable real-world impact.
              </p>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    On the full-stack side I build end-to-end applications using React.js, Node.js and MongoDB — from data-driven SPAs with real-time dashboards to scalable REST APIs and optimized database architectures. I bring the same engineering rigour to frontend and backend as I do to AI systems.
I care deeply about the engineering behind AI — reliable pipelines, clean architecture, and systems that scale. Every project I build is designed to solve a real problem, not just showcase a technology.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Currently building with: LangGraph · LLMs · FastAPI · RAG · ChromaDB · Pinecone · Groq
Full-stack: React.js · Node.js · MongoDB · REST APIs
Interested in: Agentic AI · Multi-agent systems · LLM deployment · Vector search
                    </cite>
                    <div className="flex items-center gap-2">
                      
                      <span className="text-white">AJ</span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
