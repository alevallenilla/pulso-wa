import { motion } from "framer-motion";

const stats = [
  { value: "530M", label: "WhatsApp users in LatAm" },
  { value: "$18.2B", label: "commerce on messaging" },
  { value: "0", label: "infra players" },
];

const PulseWaveform = () => (
  <div className="absolute inset-0 overflow-hidden opacity-[0.06] pointer-events-none">
    <svg className="absolute top-1/2 -translate-y-1/2 w-[200%] h-40 animate-pulse-line" viewBox="0 0 1600 160" fill="none" preserveAspectRatio="none">
      <polyline
        points="0,80 100,80 140,80 160,30 180,130 200,60 220,100 240,80 400,80 500,80 540,80 560,30 580,130 600,60 620,100 640,80 800,80 900,80 940,80 960,30 980,130 1000,60 1020,100 1040,80 1200,80 1300,80 1340,80 1360,30 1380,130 1400,60 1420,100 1440,80 1600,80"
        stroke="hsl(213 93% 68%)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <PulseWaveform />
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-[1.1] tracking-tight mb-6">
            Build financial services on WhatsApp.{" "}
            <span className="text-muted-foreground">The platform LatAm already lives on.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8">
            Pulso gives developers the APIs to embed payments, identity verification, and financial workflows directly inside WhatsApp conversations.
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            <a href="#waitlist" className="px-5 py-2.5 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity">
              Request early access
            </a>
            <a href="#developers" className="px-5 py-2.5 rounded-md border-thin border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors">
              Read the docs
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3 px-4 py-2.5 rounded-full border-thin border-border bg-card">
              <span className="text-lg font-bold text-primary">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
