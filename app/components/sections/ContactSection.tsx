export default function ContactSection() {
  return (
    <section
      id="contact"
      className="space-y-6 rounded-[28px] border border-[#d6c5ae] bg-[#ede7de] p-8 shadow-[0_10px_30px_rgba(46,46,46,0.08)]"
    >
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7b6f63]">
          Contact
        </p>

        <h2 className="text-3xl font-bold tracking-tight text-[#2e2e2e] md:text-4xl">
          Let’s connect
        </h2>

        <p className="max-w-2xl text-base leading-7 text-[#4b4b4b]">
          If you would like to connect, discuss a project, or learn more about my background, feel free to get in touch.
        </p>
      </div>

      <div className="flex flex-col gap-4 text-base text-[#2e2e2e]">
        <a
          href="mailto:your@email.com"
          className="w-fit transition hover:text-[#6fa4c7]"
        >
          tobiasbpihl@gmail.com
        </a>

        <a
          href="https://www.linkedin.com/in/tobias-pihl-266649323"
          target="_blank"
          rel="noreferrer"
          className="flex w-fit items-center gap-3 rounded-full border border-[#cdb79a] bg-[#f7f3ee] px-4 py-2 text-[#2e2e2e] transition hover:border-[#8fb9d4] hover:bg-[#eef5fa]"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
            className="h-6 w-6"
          />
          <span>LinkedIn</span>
        </a>
      </div>
    </section>
  );
}