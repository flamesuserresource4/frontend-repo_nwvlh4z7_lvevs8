export default function ProgramsSection() {
  const programs = [
    {
      title: 'UI/UX Design',
      desc: 'Design interfaces that solve real problems. From user research to high-fidelity prototypes.',
      trainer: 'Aarav Menon — Product Designer',
      duration: '4 weekends',
      fee: '₹18,000',
      cta: 'Start Designing',
    },
    {
      title: 'Cinematography & Film Direction',
      desc: 'Blocking, lenses, lighting, and directing talent to tell cinematic stories.',
      trainer: 'Rhea Kapoor — Director',
      duration: '6 weekends',
      fee: '₹28,000',
      cta: 'Join the Set',
    },
    {
      title: 'Video Editing & Post-Production',
      desc: 'Rhythm, narrative, color, sound — edit like a storyteller across platforms.',
      trainer: 'Kabir Shah — Senior Editor',
      duration: '5 weekends',
      fee: '₹22,000',
      cta: 'Cut the Film',
    },
    {
      title: 'Product & Advertising Photography',
      desc: 'Light, compose, and shoot commercial-grade product visuals end-to-end.',
      trainer: 'Meera Iyer — Commercial Photographer',
      duration: '3 weekends',
      fee: '₹16,000',
      cta: 'Shoot It',
    },
    {
      title: 'Lighting & Camera Handling',
      desc: 'Hands-on workshop covering lights, rigs, and camera operations in studio and on set.',
      trainer: 'Vikram Rao — Gaffer',
      duration: '2 weekends',
      fee: '₹12,000',
      cta: 'Light the Scene',
    },
    {
      title: 'Film Direction & Production Workflow',
      desc: 'From script breakdown to call-sheets — build a director’s production toolkit.',
      trainer: 'Ananya Das — AD',
      duration: '4 weekends',
      fee: '₹18,000',
      cta: 'Direct It',
    },
  ];

  return (
    <section id="programs" className="bg-[#07090f] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold md:text-4xl">Learn the Craft. Live the Process.</h2>
        <p className="mt-2 max-w-3xl text-white/70">Every program at Thalam is built like a production — guided by industry mentors, powered by real tools, and focused on results you can show.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((p) => (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl transition hover:bg-white/10">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br from-blue-500/20 to-yellow-300/20 blur-2xl" />
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.desc}</p>
              <div className="mt-4 grid gap-1 text-sm text-white/80">
                <span><strong>Trainer:</strong> {p.trainer}</span>
                <span><strong>Duration:</strong> {p.duration}</span>
                <span><strong>Fee:</strong> {p.fee}</span>
              </div>
              <div className="mt-5">
                <a
                  href="https://www.zoho.com/bookings/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 px-5 py-2 text-sm font-medium text-black shadow-md transition hover:brightness-110"
                >
                  {p.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
