import { useState } from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Instagram, Linkedin } from 'lucide-react';

export default function HeroSection() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header id="top" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      {/* Background Spline Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Blue→Gold cinematic gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#000814]/60 via-[#001d3d]/40 to-[#0a0a0a]/80" />

      {/* Navbar */}
      <nav className="sticky top-0 z-20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <a href="#top" className="flex items-center gap-2 font-semibold tracking-wide">
            <span className="inline-block h-8 w-8 rounded-md bg-gradient-to-br from-blue-400 to-yellow-400" />
            <span>Thalam</span>
          </a>

          <button
            className="md:hidden rounded-md border border-white/20 px-3 py-2 text-sm backdrop-blur-sm"
            onClick={() => setNavOpen((s) => !s)}
            aria-label="Toggle navigation"
          >
            Menu
          </button>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#inside" className="text-sm text-white/90 hover:text-white">Inside Thalam</a>
            <a href="#programs" className="text-sm text-white/90 hover:text-white">Programs</a>
            <a href="#crew" className="text-sm text-white/90 hover:text-white">The Crew</a>
            <a href="#moments" className="text-sm text-white/90 hover:text-white">Moments</a>
            <a href="#connect" className="text-sm text-white/90 hover:text-white">Connect</a>
            <a
              href="https://www.zoho.com/bookings/"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 px-5 py-2 text-sm font-medium text-black shadow-lg transition hover:brightness-110"
            >
              Join the Set <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>

        {/* Mobile nav */}
        {navOpen && (
          <div className="mx-4 mb-3 rounded-lg border border-white/10 bg-black/60 p-4 backdrop-blur-md md:hidden">
            <div className="grid gap-3">
              <a href="#inside" className="text-white/90" onClick={() => setNavOpen(false)}>Inside Thalam</a>
              <a href="#programs" className="text-white/90" onClick={() => setNavOpen(false)}>Programs</a>
              <a href="#crew" className="text-white/90" onClick={() => setNavOpen(false)}>The Crew</a>
              <a href="#moments" className="text-white/90" onClick={() => setNavOpen(false)}>Moments</a>
              <a href="#connect" className="text-white/90" onClick={() => setNavOpen(false)}>Connect</a>
              <a
                href="https://www.zoho.com/bookings/"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 px-5 py-2 text-sm font-medium text-black shadow-lg"
                onClick={() => setNavOpen(false)}
              >
                Join the Set <ArrowRight size={16} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl flex-col items-start justify-end px-4 py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-sm text-white/70">800+ creators trained | 100+ careers launched</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            Learn the Art by Living It.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Thalam – The House of Advanced Learning in Arts & Media by Tape Cassette Media.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="https://www.zoho.com/bookings/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 px-6 py-3 font-medium text-black shadow-xl"
            >
              Join the Set
              <ArrowRight size={18} />
            </a>
            <a
              href="#programs"
              className="rounded-full border border-white/30 px-6 py-3 text-white/90 backdrop-blur-sm transition hover:bg-white/10"
            >
              Discover Programs
            </a>
            <div className="ml-auto hidden items-center gap-3 md:flex">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
