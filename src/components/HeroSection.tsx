import { motion } from "framer-motion";

const stats = [
  { value: "530M", label: "WhatsApp users in LatAm" },
  { value: "$18.2B", label: "commerce on messaging" },
  { value: "0", label: "infra players" },
];

const PulseWaveform = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Waveform line */}
    <svg
      className="absolute top-1/2 -translate-y-1/2 w-full h-32"
      viewBox="0 0 1200 120"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="hsl(213 93% 68%)" stopOpacity="0" />
          <stop offset="15%" stopColor="hsl(213 93% 68%)" stopOpacity="0.15" />
          <stop offset="50%" stopColor="hsl(213 93% 68%)" stopOpacity="0.3" />
          <stop offset="85%" stopColor="hsl(213 93% 68%)" stopOpacity="0.15" />
          <stop offset="100%" stopColor="hsl(213 93% 68%)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline
        points="0,60 180,60 220,60 240,60 260,20 280,100 300,40 320,75 340,60 500,60 540,60 560,60 580,20 600,100 620,40 640,75 660,60 820,60 860,60 880,60 900,20 920,100 940,40 960,75 980,60 1200,60"
        stroke="url(#waveGrad)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="animate-pulse-line"
      />
    </svg>
    {/* Glow behind the waveform */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] bg-primary/[0.03] rounded-full blur-3xl" />
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
            Pulso is the infrastructure layer for WhatsApp commerce and finance in Latin America. Deploy ordering, payments, identity, and financial workflows natively inside the channel 530M people already use. First use case live: Pulso Order.
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
          className="grid grid-cols-3 gap-4 max-w-2xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
              className="rounded-xl border border-border bg-card/60 backdrop-blur-sm px-5 py-5 text-center"
            >
              <span className="block text-3xl md:text-4xl font-extrabold text-primary mb-1">{s.value}</span>
              <span className="text-xs md:text-sm text-muted-foreground">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
