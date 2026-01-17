import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaTerminal,
  FaCode,
  FaCheckCircle,
  FaChevronRight,
  FaEnvelope,
  FaFileAlt,
} from "react-icons/fa";

interface ProjectRowProps {
  title: string;
  path: string;
  method: "SERVICE" | "ASYNC" | "CRON";
  link: string;
  tech: string;
  description: string;
}

interface StackCardProps {
  icon: React.ReactNode;
  title: string;
  list: string;
}

interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
  label?: string;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-neutral-300 selection:bg-emerald-500/30 font-sans pb-32">
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-emerald-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.png')] opacity-[0.15] mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-xl mx-auto px-4 pt-16 space-y-4">
        <section className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono mb-6 animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            AVAILABLE FOR NEW ROLES
          </div>

          <div className="w-20 h-20 bg-linear-to-br from-neutral-800 to-neutral-950 rounded-2xl mx-auto border border-neutral-800 flex items-center justify-center shadow-2xl mb-6">
            <FaTerminal size={32} className="text-emerald-500" />
          </div>

          <div className="space-y-1 mb-4">
            <h1 className="text-3xl font-bold text-white tracking-tight">
              Trevor Johnson
            </h1>
            <p className="text-neutral-500 font-mono text-xs font-bold uppercase tracking-widest">
              Backend Engineer
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2 mb-6 max-w-sm mx-auto">
            {["Python", "FastAPI", "Distributed Systems", "SQLAlchemy"].map(
              (tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-neutral-900/50 border border-neutral-800 text-[10px] font-mono text-neutral-500"
                >
                  {tech}
                </span>
              )
            )}
          </div>

          <p className="text-sm text-neutral-400 max-w-75 mx-auto leading-relaxed">
            I build robust backend systems with a focus on
            <span className="text-neutral-200"> architectural integrity </span>
            and scalable data patterns.
          </p>
        </section>

        <div className="space-y-3">
          <div className="flex justify-between items-end px-2">
            <h2 className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em]">
              Selected Work
            </h2>
            <span className="text-[9px] font-mono text-neutral-700 italic">
              Click to view source & docs
            </span>
          </div>

          <ProjectRow
            title="TaskForge Architecture"
            path="/v1/taskforge"
            method="SERVICE"
            link="https://github.com/trevor-dev-johnson/taskforge"
            tech="FastAPI • Postgres"
            description="Clean architecture implementation with repository patterns."
          />

          <ProjectRow
            title="Pingr Monitoring"
            path="/v1/pingr"
            method="ASYNC"
            link="https://github.com/trevor-dev-johnson/pingr"
            tech="Asyncio • SQLite"
            description="High-concurrency uptime engine using non-blocking I/O."
          />

          <ProjectRow
            title="Stateless Crawler"
            path="/v1/data-pipeline"
            method="CRON"
            link="https://github.com/trevor-dev-johnson/python-job-monitor"
            tech="Python • GH Actions"
            description="Automated ETL pipeline with idempotent processing."
          />
        </div>

        <div className="pt-8 space-y-3">
          <h2 className="text-[10px] font-mono text-neutral-600 uppercase tracking-[0.2em] pl-2">
            System Capabilities
          </h2>
          <div className="grid grid-cols-2 gap-3">
            <StackCard
              icon={<FaCode />}
              title="Languages"
              list="Python, TypeScript, Rust"
            />
            <StackCard
              icon={<FaDatabase />}
              title="Storage"
              list="Postgres, Redis, SQLite"
            />
            <StackCard
              icon={<FaTerminal />}
              title="Backend"
              list="FastAPI, Asyncio, Pydantic"
            />
            <StackCard
              icon={<FaCheckCircle />}
              title="Reliability"
              list="Pytest, Docker, CI/CD"
            />
          </div>
        </div>

        <footer className="fixed bottom-6 left-1/2 -translate-x-1/2 w-max px-6 py-3 bg-neutral-900/90 backdrop-blur-xl border border-neutral-800 rounded-full flex items-center gap-6 shadow-2xl">
          <SocialIcon
            href="https://github.com/trevor-dev-johnson"
            icon={<FaGithub size={20} />}
            label="GitHub"
          />
          <SocialIcon
            href="https://www.linkedin.com/in/trevor-johnson-dev/"
            icon={<FaLinkedin size={20} />}
            label="LinkedIn"
          />
          <div className="h-4 w-px bg-neutral-700" />
          <a
            href="mailto:tjohnsonace@outlook.com"
            className="text-neutral-500 hover:text-emerald-400 transition-colors flex items-center gap-2"
          >
            <FaEnvelope size={18} />
            <span className="text-[10px] font-mono font-bold uppercase hidden sm:inline">
              Contact
            </span>
          </a>
          <div className="h-4 w-px bg-neutral-700" />
          <a
            href="/resume.pdf"
            className="text-neutral-500 hover:text-white transition-colors"
          >
            <FaFileAlt size={18} />
          </a>
        </footer>
      </div>
    </main>
  );
}

function ProjectRow({
  title,
  path,
  method,
  link,
  tech,
  description,
}: ProjectRowProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center justify-between p-4 bg-neutral-900/40 border border-neutral-800/50 rounded-2xl hover:bg-neutral-800/60 hover:border-emerald-500/30 transition-all duration-300"
    >
      <div className="flex flex-col gap-1 text-left">
        <div className="flex items-center gap-2">
          <span
            className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${
              method === "SERVICE"
                ? "text-emerald-400 border-emerald-400/20"
                : method === "ASYNC"
                  ? "text-blue-400 border-blue-400/20"
                  : "text-amber-400 border-amber-400/20"
            }`}
          >
            {method}
          </span>
          <span className="text-[10px] font-mono text-neutral-600">{path}</span>
        </div>
        <h3 className="text-white font-semibold group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        <p className="text-[11px] text-neutral-400 line-clamp-1 group-hover:text-neutral-300 transition-colors">
          {description}
        </p>
        <p className="text-[10px] text-neutral-600 font-mono uppercase mt-1">
          {tech}
        </p>
      </div>
      <FaChevronRight
        size={14}
        className="text-neutral-700 group-hover:text-emerald-500 group-hover:translate-x-1 transition-all"
      />
    </a>
  );
}

function StackCard({ icon, title, list }: StackCardProps) {
  return (
    <div className="p-4 bg-neutral-900/20 border border-neutral-900 rounded-2xl space-y-2 text-left">
      <div className="flex items-center gap-2 text-emerald-500">
        {icon}
        <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-widest">
          {title}
        </span>
      </div>
      <p className="text-xs text-neutral-500 leading-tight">{list}</p>
    </div>
  );
}

function SocialIcon({ href, icon, label }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-neutral-500 hover:text-white transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
