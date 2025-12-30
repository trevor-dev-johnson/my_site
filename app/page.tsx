import {
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaTerminal,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-emerald-500/30">
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay [background-image:url('https://grainy-gradients.vercel.app/noise.png')]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 space-y-32 pb-24">
        <section className="pt-32 space-y-10">
          <div className="space-y-6">
            {" "}
            <h1 className="text-5xl sm:text-7xl font-bold tracking-tighter text-white">
              Trevor Johnson
            </h1>
            <p className="text-neutral-400 text-lg sm:text-xl leading-relaxed max-w-xl">
              Backend engineer specializing in{" "}
              <span className="text-neutral-200 italic font-medium">
                Python
              </span>{" "}
              and{" "}
              <span className="text-neutral-200 font-medium">
                APIs & Backend Systems
              </span>
              . Focused on building reliable services, clear architecture, and
              code that’s easy to reason about.
            </p>
          </div>

          <div className="flex items-center gap-5">
            <SocialLink
              href="https://github.com/trevor-dev-johnson"
              ariaLabel="GitHub"
              icon={<FaGithub size={22} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/trevor-johnson-dev/"
              ariaLabel="LinkedIn"
              icon={<FaLinkedin size={22} />}
            />
            <SocialLink
              href="https://x.com/whizzkee"
              ariaLabel="X"
              icon={<FaXTwitter size={22} />}
            />
            <div className="h-4 w-px bg-neutral-800 mx-1" />
            <a
              href="/resume.pdf"
              className="text-xs font-mono tracking-widest text-neutral-500 hover:text-emerald-400 transition-colors uppercase"
            >
              Resume
            </a>
          </div>
        </section>

        <section className="space-y-8">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <span className="h-px w-8 bg-neutral-800" /> core_capabilities
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-x-12">
            <StackItem
              icon={<FaTerminal size={18} />}
              title="Languages"
              list="Python, TypeScript, Rust (learning)"
            />

            <StackItem
              icon={<FaDatabase size={18} />}
              title="Databases & Storage"
              list="PostgreSQL, SQLAlchemy, Alembic — exploring Redis
"
            />

            <StackItem
              icon={<FaCode size={18} />}
              title="Backend"
              list="FastAPI, RESTful Design, Pydantic, Dependency Injection"
            />

            <StackItem
              icon={<FaCheckCircle size={18} />}
              title="Reliability"
              list="Pytest, Docker, GitHub Actions, Structured Logging
"
            />
          </div>
        </section>

        <section className="space-y-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-neutral-500 flex items-center gap-2">
            <span className="h-px w-8 bg-neutral-800" /> system_endpoints
          </h2>

          <div className="space-y-24">
            <Project
              method="SERVICE"
              path="/v1/taskforge"
              title="TaskForge Architecture"
              description="Backend designed around clear separation of concerns. Business logic is isolated from storage through repositories, with centralized validation and consistent error handling."
              specs={[
                { label: "Focus", value: "Clean Architecture Principles" },
                { label: "Validation", value: "Pydantic Models" },
                { label: "Workflow", value: "Service / Repository Layers" },
              ]}
              tech={["FastAPI", "Postgres", "SQLAlchemy"]}
              link="https://github.com/trevor-dev-johnson/taskforge"
            />

            <Project
              method="ASYNC"
              path="/v1/pingr"
              title="Pingr Monitoring"
              description="Asynchronous uptime monitor that performs scheduled health checks without blocking. Persists state and avoids duplicate alerts while keeping the system simple and reliable."
              specs={[
                { label: "Concurrency", value: "Asyncio + Httpx" },
                { label: "Scheduling", value: "Interval-Based Checks" },
                { label: "State", value: "Lightweight Persistence" },
              ]}
              tech={["Python", "Asyncio", "SQLite"]}
              link="https://github.com/trevor-dev-johnson/pingr"
            />

            <Project
              method="CRON"
              path="/v1/data-pipeline"
              title="Stateless Crawler"
              description="Automation pipeline that fetches job listings, deduplicates results, and persists them safely. Designed for idempotent runs using GitHub Actions as the execution environment."
              specs={[
                { label: "Runner", value: "GitHub Actions" },
                { label: "Behavior", value: "Idempotent Processing" },
                { label: "Storage", value: "Structured JSON" },
              ]}
              tech={["Python", "GitHub Actions", "JSON"]}
              link="https://github.com/trevor-dev-johnson/python-job-monitor"
            />
          </div>
        </section>

        <footer className="pt-12 border-t border-neutral-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-neutral-600 text-[10px] font-mono tracking-widest uppercase">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Connection Established: Open for Roles</span>
          </div>
          <p>© {new Date().getFullYear()} Trevor Johnson</p>
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
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-neutral-200">
        <span className="text-emerald-500/50">{icon}</span>
        <h3 className="text-sm font-semibold font-mono tracking-tight underline underline-offset-4 decoration-neutral-800">
          {title}
        </h3>
      </div>
      <p className="text-sm text-neutral-500 leading-relaxed font-sans">
        {list}
      </p>
    </div>
  );
}

function Project({ method, path, title, description, specs, tech, link }: any) {
  return (
    <div className="group grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
      <div className="md:col-span-4 space-y-4">
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span
            className={`px-2 py-0.5 rounded ${
              method === "SERVICE"
                ? "bg-emerald-500/10 text-emerald-400"
                : method === "ASYNC"
                ? "bg-blue-500/10 text-blue-400"
                : "bg-amber-500/10 text-amber-400"
            } border border-current/20 font-bold`}
          >
            {method}
          </span>
          <span className="text-neutral-600 tracking-tighter">{path}</span>
        </div>

        <h3 className="text-2xl font-bold text-neutral-100 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>

        <div className="flex gap-4">
          <a
            href={link}
            target="_blank"
            className="flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white transition-colors"
          >
            <FaGithub /> SOURCE_CODE
          </a>
        </div>
      </div>

      <div className="md:col-span-8 bg-neutral-900/40 border border-neutral-800/50 rounded-lg p-6 space-y-6 hover:border-neutral-700 transition-colors">
        <p className="text-neutral-400 text-sm leading-relaxed font-sans">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4 border-t border-neutral-800 pt-6">
          {specs.map((spec: any) => (
            <div key={spec.label}>
              <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">
                {spec.label}
              </p>
              <p className="text-xs text-neutral-300 font-medium">
                {spec.value}
              </p>
            </div>
          ))}

          <div>
            <p className="text-[10px] font-mono text-neutral-600 uppercase tracking-tighter">
              Stack
            </p>
            <p className="text-xs text-neutral-300 font-medium">
              {tech.join(", ")}
            </p>
          </div>
        </div>
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
      <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-neutral-900 px-2 py-1 text-[10px] text-neutral-200 opacity-0 transition-all group-hover:opacity-100 border border-neutral-800 font-mono">
        {ariaLabel}
      </span>
    </a>
  );
}
