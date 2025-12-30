import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-neutral-100 overflow-hidden">
      {/* Radial spotlight */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06),transparent_60%)]
        "
      />

      {/* Subtle noise */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.12]
          mix-blend-overlay
          [background-image:url('https://grainy-gradients.vercel.app/noise.png')]
        "
      />

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
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-neutral-300 to-transparent animate-pulse" />
          </div>

          <div className="flex items-center gap-5 pt-2">
            <SocialLink
              href="https://github.com/trevor-dev-johnson"
              ariaLabel="GitHub profile"
              icon={<FaGithub size={20} />}
            />
            <SocialLink
              href="https://www.linkedin.com/in/trevor-johnson-dev/"
              ariaLabel="LinkedIn profile"
              icon={<FaLinkedin size={20} />}
            />
            <SocialLink
              href="https://x.com/whizzkee"
              ariaLabel="X profile"
              icon={<FaXTwitter size={20} />}
            />
          </div>
        </div>
      </section>
    </main>
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
      className="
        group relative flex items-center justify-center rounded-md p-2
        text-neutral-300 transition
        hover:text-white hover:bg-neutral-800/60
        hover:-translate-y-0.5
        focus:outline-none focus:ring-2 focus:ring-neutral-600
      "
    >
      <span className="transition group-hover:text-white group-hover:scale-110">
        {icon}
      </span>

      <span
        className="
          pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2
          whitespace-nowrap rounded-md bg-neutral-900/95 px-2 py-1
          text-xs text-neutral-200 shadow-xl ring-1 ring-white/10
          opacity-0 translate-y-1
          transition-all duration-150
          group-hover:opacity-100 group-hover:translate-y-0
          group-focus:opacity-100 group-focus:translate-y-0
        "
      >
        {ariaLabel}
      </span>
    </a>
  );
}
