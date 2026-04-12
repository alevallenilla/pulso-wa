import { motion } from "framer-motion";
import WhatsAppPhoneMockup from "./WhatsAppPhoneMockup";

const stats = [
  { value: "530M", label: "WhatsApp users in LatAm" },
  { value: "$18.2B", label: "commerce on messaging" },
  { value: "0", label: "infra players" },
];

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:gap-8">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl flex-1 relative z-10"
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

          {/* Right — phone mockup */}
          <div className="flex justify-center md:justify-end flex-shrink-0 -mt-4 md:mt-0 md:-mr-4">
            <WhatsAppPhoneMockup />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mt-8 md:mt-4"
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
