import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, Fingerprint, GitBranch } from "lucide-react";

const products = [
  {
    icon: ShoppingBag,
    name: "Pulso Order",
    tag: "Available · Beta",
    tagColor: "text-primary",
    description: "WhatsApp order management and Stripe checkout for US Latino merchants. Customers browse, order, and pay entirely inside WhatsApp — no app, no website, no POS hardware required.",
  },
  {
    icon: CreditCard,
    name: "Pulso Pay",
    tag: "Coming soon",
    tagColor: "text-muted-foreground",
    description: "Programmable payments inside WhatsApp threads. DiMo, Pix, and card-on-file across Latin America — triggered by a single API call. Real-time settlement webhooks.",
  },
  {
    icon: Fingerprint,
    name: "Pulso ID",
    tag: "Coming soon",
    tagColor: "text-muted-foreground",
    description: "Financial identity built from transaction history. Every order through Pulso builds a merchant profile — the foundation for credit, working capital, and insurance products.",
  },
  {
    icon: GitBranch,
    name: "Pulso Flow",
    tag: "Coming soon",
    tagColor: "text-muted-foreground",
    description: "Visual workflow builder for financial conversations. Design branching logic for loan applications, payment reminders, and custom commerce flows.",
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
            One platform. Multiple use cases. Everything you need to build commerce and financial products where your customers already are.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-5">
          {products.map((p, i) => {
            const isOrder = p.name === "Pulso Order";
            const Wrapper = isOrder ? "a" : "div";
            const wrapperProps = isOrder ? { href: "#pulso-order" } : {};
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
                  className={`block rounded-xl border-thin border-border bg-card p-6 hover:border-primary/30 transition-colors ${isOrder ? "cursor-pointer" : ""}`}
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
