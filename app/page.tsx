import {
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaTerminal,
  FaCode,
  FaExternalLinkAlt,
  FaCheckCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.png')]" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto px-6 py-24 space-y-24">
        <section className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-semibold tracking-tight tracking-tighter">
              Trevor Johnson
            </h1>
            <p className="text-neutral-400 text-lg leading-relaxed">
              Backend engineer specializing in{" "}
              <span className="text-neutral-200">Python</span> and{" "}
              <span className="text-neutral-200">APIs & Backend Systems</span>.
              Building resilient APIs and data pipelines with a focus on
              type-safety and architectural integrity.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <SocialLink
              href="https://github.com/trevor-dev-johnson"
              ariaLabel="GitHub"
              icon={<FaGithub size={20} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/trevor-johnson-dev/"
              ariaLabel="LinkedIn"
              icon={<FaLinkedin size={20} />}
            />
            <SocialLink
              href="https://x.com/whizzkee"
              ariaLabel="X"
              icon={<FaXTwitter size={20} />}
            />
            <div className="h-4 w-px bg-neutral-800 mx-2" />
            <a
              href="/resume.pdf"
              className="text-xs font-mono text-neutral-500 hover:text-white transition-colors"
            >
              RESUME.PDF
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Technical Stack
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-12">
            <StackItem
              icon={<FaTerminal size={18} />}
              title="Languages"
              list="Python, TypeScript, Bash, Rust"
            />
            <StackItem
              icon={<FaDatabase size={18} />}
              title="Data"
              list="PostgreSQL, Redis, Migrations (Alembic), SQLAlchemy"
            />
            <StackItem
              icon={<FaCode size={18} />}
              title="Backend"
              list="FastAPI, RESTful Design, Pydantic, Dependency Injection"
            />
            <StackItem
              icon={<FaCheckCircle size={18} />}
              title="Quality & Ops"
              list="Pytest (TDD), Docker, CI/CD, Structured Logging"
            />
          </div>
        </section>

        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500">
              Projects
            </h2>
          </div>

          <div className="space-y-16">
            <Project
              title="TaskForge — Domain-Driven API"
              description="A backend designed with production architecture principles. Implements Clean Architecture patterns to decouple business logic from external dependencies. Features custom middleware for request validation and global error handling."
              tech={["FastAPI", "PostgreSQL", "Pytest", "Docker"]}
              link="https://github.com/trevor-dev-johnson/taskforge"
              highlight="Architecture: Repository Pattern & DI"
            />

            <Project
              title="Pingr — Async Uptime Monitor"
              description="High-performance monitoring engine utilizing Python's 'asyncio' for non-blocking I/O. Orchestrates periodic health checks across multiple endpoints with state persistence and failure-alerting logic."
              tech={["Python", "Asyncio", "SQLite", "Httpx"]}
              link="https://github.com/trevor-dev-johnson/pingr"
              highlight="Concept: Concurrent Task Scheduling"
            />

            <Project
              title="Automated Data Pipeline"
              description="A stateless job-board crawler designed for idempotency. Uses GitHub Actions as a runner to fetch, deduplicate, and store data without requiring a dedicated server."
              tech={["Python", "JSON Storage", "GitHub Actions", "Cron"]}
              link="https://github.com/trevor-dev-johnson/python-job-monitor"
              highlight="Concept: Idempotent Data Processing"
            />
          </div>
        </section>

        <footer className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 text-xs font-mono">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>OPEN TO BACKEND & INFRASTRUCTURE ROLES</span>
          </div>
          <p>© {new Date().getFullYear()} — Trevor Johnson</p>
        </footer>
      </div>
    </main>
  );
}

function StackItem({
  icon,
  title,
  list,
}: {
  icon: React.ReactNode;
  title: string;
  list: string;
}) {
  return (
    <div className="group space-y-2">
      <div className="flex items-center gap-2 text-neutral-200">
        {icon}
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed">{list}</p>
    </div>
  );
}

function Project({
  title,
  description,
  tech,
  link,
  highlight,
}: {
  title: string;
  description: string;
  tech: string[];
  link: string;
  highlight: string;
}) {
  return (
    <div className="group space-y-4">
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="text-xl font-medium group-hover:text-white transition-colors">
            {title}
          </h3>
          <p className="text-[10px] font-mono text-emerald-500/80 uppercase tracking-widest">
            {highlight}
          </p>
        </div>
        <a
          href={link}
          target="_blank"
          className="p-2 text-neutral-600 hover:text-white transition-colors border border-neutral-800 rounded-md"
        >
          <FaExternalLinkAlt size={12} />
        </a>
      </div>

      <p className="text-neutral-400 leading-relaxed text-sm sm:text-base max-w-xl">
        {description}
      </p>

      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-neutral-900 text-neutral-500 border border-neutral-800"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({
  href,
  icon,
  ariaLabel,
}: {
  href: string;
  icon: React.ReactNode;
  ariaLabel: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="group relative text-neutral-400 hover:text-white transition-all hover:-translate-y-0.5"
    >
      {icon}
      <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] text-neutral-200 opacity-0 transition-all group-hover:opacity-100 border border-neutral-800">
        {ariaLabel}
      </span>
    </a>
  );
}
