import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-purple-500/10 blur-3xl" />
      </div>

      <section className="relative z-10 w-full max-w-xl px-6">
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight">
            Trevor Johnson
          </h1>

          <p className="text-neutral-400 text-lg leading-relaxed">
            Backend-leaning engineer focused on clean architecture, data
            systems, and tools that are built to last.
          </p>

          <div className="relative h-px w-full overflow-hidden bg-neutral-800">
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-indigo-400 to-transparent animate-pulse" />
          </div>

          <div className="flex items-center gap-5 pt-2">
            <SocialLink
              href="https://github.com/trevor-dev-johnson"
              label="GitHub"
              icon={<FaGithub size={18} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/trevor-johnson-dev/"
              label="LinkedIn"
              icon={<FaLinkedin size={18} />}
            />
            <SocialLink
              href="https://x.com/whizzkee"
              label="X"
              icon={<FaTwitter size={18} />}
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function SocialLink({
  href,
  label,
  icon,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        group flex items-center gap-2 rounded-md px-3 py-2
        text-neutral-300 transition
        hover:text-white hover:bg-neutral-900
        hover:-translate-y-0.5
      "
    >
      <span className="text-neutral-400 group-hover:text-white transition">
        {icon}
      </span>
      <span>{label}</span>
    </a>
  );
}
