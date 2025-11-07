import { Quote, Star } from 'lucide-react';

export default function CrewAndStories() {
  const crew = [
    { name: 'Aadhil Rahman', role: 'Film Director', quote: 'Stories are shot, not told.' },
    { name: 'Niya Joseph', role: 'UI/UX Designer', quote: 'Design is a conversation with the user.' },
    { name: 'Rahul Nair', role: 'Cinematographer', quote: 'Light is emotion. Shape it.' },
  ];

  const testimonials = [
    {
      text: 'Thalam changed how I learn — the set became my classroom.',
      author: 'Ananya, Film Direction',
    },
    {
      text: 'Built a real portfolio that landed me freelance gigs in 6 weeks.',
      author: 'Samar, UI/UX',
    },
    {
      text: 'Mentors treated us like crew — best learning experience.',
      author: 'Divya, Cinematography',
    },
  ];

  return (
    <section id="crew" className="bg-[#06080d] py-24 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-3xl font-bold md:text-4xl">Creators. Mentors. Industry Insiders.</h2>
        <p className="mt-2 max-w-3xl text-white/70">Each member of The Crew brings a different lens — film, design, storytelling, or strategy — but one goal: turn learners into creators ready for real projects.</p>

        {/* Crew Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {crew.map((m) => (
            <div key={m.name} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-blue-500/20 to-yellow-300/20 blur-2xl" />
              <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-blue-500/30 to-yellow-300/30" />
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-white/70">{m.role}</p>
              <p className="mt-3 text-sm italic text-white/80">“{m.quote}”</p>
            </div>
          ))}
        </div>

        {/* Stories + Moments */}
        <div id="moments" className="mt-16 grid items-start gap-6 md:grid-cols-2">
          <div className="grid gap-4">
            {testimonials.map((t, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <Quote className="mb-3 text-yellow-300" size={20} />
                <p className="text-white/90">{t.text}</p>
                <p className="mt-2 text-sm text-white/60">{t.author}</p>
              </div>
            ))}
            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-6">
              <Star className="text-yellow-300" />
              <p className="text-sm text-white/80">100+ Careers Launched | 800+ Learners Trained</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-blue-500/30 to-yellow-300/20" />
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-tr from-blue-500/30 to-yellow-300/30" />
            <div className="aspect-square w-full rounded-2xl bg-gradient-to-tr from-yellow-300/30 to-blue-500/30" />
            <div className="aspect-[4/5] w-full rounded-2xl bg-gradient-to-br from-blue-500/20 to-yellow-300/20" />
          </div>
        </div>
      </div>
    </section>
  );
}
