export default function AboutSection() {
  const values = [
    { title: 'Real Projects, Not Assignments', desc: 'Work on briefs that mirror industry challenges and deliver outcomes you can show.' },
    { title: 'Mentors Who Actually Create', desc: 'Guided by practitioners shipping films, products, and campaigns.' },
    { title: 'Studio-Like Setup', desc: 'Learn inside a production environment with pro tools, lights, and workflows.' },
    { title: 'Multi-Discipline Exposure', desc: 'Photography, film, design, editing — understand how disciplines collaborate.' },
    { title: 'Build What You’ll Be Hired For', desc: 'Portfolio-first learning with deliverables that matter to recruiters.' },
    { title: 'Community of Doers', desc: 'Be part of an active creator network sharing gigs, feedback, and growth.' },
  ];

  return (
    <section id="inside" className="relative bg-[#05060a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-yellow-300/5" />
      <div className="relative mx-auto max-w-7xl px-4">
        <h2 className="text-center text-3xl font-bold md:text-4xl">A space built for creators who learn by doing.</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">At Thalam, you don’t attend classes. You enter production.</p>

        <div className="mt-12 grid items-start gap-6 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-white/10 bg-white/5 p-5 shadow-xl backdrop-blur-sm transition hover:bg-white/10">
              <h3 className="text-lg font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-white/70">{v.desc}</p>
            </div>
          ))}
        </div>

        {/* Center video placeholder (can be replaced with real video) */}
        <div className="mt-12 aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-blue-500/20 to-yellow-300/20">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&controls=1"
            title="Inside Thalam"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
