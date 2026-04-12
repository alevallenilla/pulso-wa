import { motion } from "framer-motion";
import { Shield, CreditCard, Fingerprint, GitBranch } from "lucide-react";

const products = [
  {
    icon: Shield,
    name: "Pulso Verify",
    tag: "Beta in progress",
    tagColor: "text-primary",
    description: "KYC and identity verification flows delivered entirely within WhatsApp. INE/CURP validation, liveness checks, and document capture — no app download required.",
  },
  {
    icon: CreditCard,
    name: "Pulso Pay",
    tag: "Coming soon",
    tagColor: "text-muted-foreground",
    description: "Programmable payments inside WhatsApp threads. SPEI, PIX, and card-on-file — triggered by a single API call. Real-time settlement webhooks.",
  },
  {
    icon: Fingerprint,
    name: "Pulso ID",
    tag: "Coming soon",
    tagColor: "text-muted-foreground",
    description: "Portable identity primitive. Once verified, users carry their Pulso ID across merchants. Reduce onboarding friction from days to seconds.",
  },
  {
    icon: GitBranch,
    name: "Pulso Flow",
    tag: "Coming soon",
    tagColor: "text-muted-foreground",
    description: "Visual workflow builder for financial conversations. Design branching logic for loan applications, insurance claims, and payment reminders.",
  },
];

const ProductSection = () => {
  return (
    <section id="products" className="py-20 md:py-32 border-t border-thin border-border">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Product suite</h2>
          <p className="text-muted-foreground max-w-lg">
            Four primitives. One platform. Everything you need to build financial products where your users already are.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((p, i) => {
            const isVerify = p.name === "Pulso Verify";
            const Wrapper = isVerify ? "a" : "div";
            const wrapperProps = isVerify ? { href: "#pulso-verify" } : {};
            return (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className={`block rounded-xl border-thin border-border bg-card p-6 hover:border-primary/30 transition-colors ${isVerify ? "cursor-pointer" : ""}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <p.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className={`text-xs font-medium ${p.tagColor}`}>{p.tag}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{p.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </Wrapper>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
