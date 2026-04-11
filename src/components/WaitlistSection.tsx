import { motion } from "framer-motion";
import { useState } from "react";

const options = [
  "Payments / Lending",
  "Identity / KYC",
  "Insurance",
  "Commerce / Marketplace",
  "Other",
];

const WaitlistSection = () => {
  const [email, setEmail] = useState("");
  const [building, setBuilding] = useState("");

  return (
    <section id="waitlist" className="py-20 md:py-32 border-t border-thin border-border">
      <div className="max-w-xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the first to build on Pulso.</h2>
          <p className="text-muted-foreground mb-10">
            We're onboarding design partners now. Request early access and we'll reach out within 48 hours.
          </p>

          <form
            onSubmit={(e) => { e.preventDefault(); }}
            className="space-y-4 text-left"
          >
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border-thin border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <select
              value={building}
              onChange={(e) => setBuilding(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border-thin border-border text-sm text-foreground appearance-none focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value="" disabled>What are you building?</option>
              {options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              Request early access
            </button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            No spam. No pitch decks. Just API keys when you're ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default WaitlistSection;
