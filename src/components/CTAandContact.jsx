import { ArrowRight, Mail, Phone, Instagram, Linkedin } from 'lucide-react';

export default function CTAandContact() {
  return (
    <footer id="connect" className="bg-[#05060a] py-20 text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* CTA Banner */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/30 via-blue-500/20 to-yellow-400/20 p-8 shadow-xl">
          <h3 className="text-2xl font-bold md:text-3xl">Step Out of Theory. Step Into the Set.</h3>
          <p className="mt-2 max-w-3xl text-white/80">Thalam isn’t about lectures — it’s where creators learn by doing. Every workshop puts you in real production environments guided by working professionals.</p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="https://www.zoho.com/bookings/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-yellow-400 px-6 py-3 font-medium text-black shadow-md"
            >
              Join the Set
              <ArrowRight size={18} />
            </a>
            <span className="text-xs text-white/70">Seats are limited — build your opportunity.</span>
          </div>
        </div>

        {/* Contact */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h4 className="text-xl font-semibold">Connect</h4>
            <div className="mt-4 grid gap-2 text-white/80">
              <p className="flex items-center gap-2"><Phone size={16} /> +91 95005 02524</p>
              <p className="flex items-center gap-2"><Mail size={16} /> thalam@tapecassette.in</p>
              <div className="mt-2 flex items-center gap-4">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Instagram size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/80 hover:text-white"><Linkedin size={18} /></a>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Quick Enquiry</h4>
            <EnquiryForm />
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/60">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-4">
              <a href="#inside" className="hover:text-white">Inside Thalam</a>
              <a href="#programs" className="hover:text-white">Programs</a>
              <a href="#crew" className="hover:text-white">The Crew</a>
              <a href="#moments" className="hover:text-white">Moments</a>
              <a href="#connect" className="hover:text-white">Connect</a>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-white">Terms & Conditions</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
            </div>
          </div>
          <p className="mt-4">© 2025 Thalam by Tape Cassette Media</p>
        </div>
      </div>
    </footer>
  );
}

function EnquiryForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.name.value;
    const phone = form.phone.value;
    const message = form.message.value;
    alert(`Thank you, ${name}! We will reach out at ${phone}.\nMessage: ${message}`);
    form.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <input name="name" required placeholder="Your name" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
      <input name="phone" required placeholder="Phone" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
      <textarea name="message" rows="3" placeholder="What would you like to learn?" className="rounded-lg border border-white/10 bg-white/5 px-4 py-3 placeholder:text-white/50 outline-none focus:ring-2 focus:ring-blue-500" />
      <button type="submit" className="rounded-lg bg-white px-5 py-3 font-medium text-black transition hover:bg-white/90">Send Enquiry</button>
      <p className="text-xs text-white/60">For instant booking and payments, use Zoho Bookings.</p>
    </form>
  );
}
