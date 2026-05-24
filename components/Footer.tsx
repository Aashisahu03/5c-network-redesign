const columns = [
  {
    title: "Platform",
    links: ["For Hospitals", "For Enterprises", "For Radiologists", "Bionic AI", "Bionic Flow"]
  },
  {
    title: "Company",
    links: ["About", "Research", "Case Studies", "News", "Careers"]
  },
  {
    title: "Resources",
    links: ["Compare 5C", "Clinical Evidence", "Setup Guide", "FAQ", "Contact"]
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Cookie Policy", "Security"]
  }
];

export default function Footer() {
  return (
    <footer className="bg-[#050916] py-16 text-white/65">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_repeat(4,1fr)]">
          <div>
            <a href="#" className="flex items-center gap-2.5 font-syne text-xl font-extrabold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-blue5c text-sm font-bold text-white">
                5C
              </span>
              5C Network
            </a>
            <p className="mt-5 max-w-sm leading-7">
              India&apos;s largest AI-native radiology platform, combining specialist radiologists with
              state-of-the-art AI to deliver world-class diagnostics anywhere.
            </p>
          </div>
          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase text-white">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a className="transition hover:text-white" href="#">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <span>© 2026 5C Network. All rights reserved.</span>
          <span>Bengaluru - India - Remote reporting network</span>
        </div>
      </div>
    </footer>
  );
}
