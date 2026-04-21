import { motion } from "framer-motion";
import { Check } from "lucide-react";

const codeLines = [
  { text: "import Pulso from '@pulso/sdk';", type: "code" },
  { text: "", type: "blank" },
  { text: "const pulso = new Pulso({", type: "code" },
  { text: "  apiKey: process.env.PULSO_API_KEY,", type: "code" },
  { text: "  region: 'us'", type: "code" },
  { text: "});", type: "code" },
  { text: "", type: "blank" },
  { text: "// Launch an order session for a customer", type: "comment" },
  { text: "const session = await pulso.order.create({", type: "code" },
  { text: "  merchantId: 'merchant_abc123',", type: "string" },
  { text: "  customerPhone: '+13125559876',", type: "string" },
  { text: "  webhook: 'https://your-app.com/webhooks/orders'", type: "string" },
  { text: "});", type: "code" },
  { text: "", type: "blank" },
  { text: "console.log(session.status); // 'active'", type: "code" },
  { text: "// Customer receives menu via WhatsApp ✓", type: "comment" },
];

const features = [
  "RESTful APIs with full OpenAPI spec",
  "Webhook-first architecture",
  "Sandbox environment with test phone numbers",
  "SDKs for Node.js, Python, and Go",
];

const DeveloperSection = () => {
  return (
    <section id="developers" className="py-20 md:py-32 border-t border-thin border-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Built for developers.{" "}
              <span className="text-muted-foreground">Five API calls to production.</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Clean abstractions over complex regulatory and messaging infrastructure. Ship WhatsApp-native financial features in hours, not months.
            </p>
            <ul className="space-y-3">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-secondary-foreground">{f}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="rounded-xl border-thin border-border bg-card overflow-hidden"
          >
            <div className="flex items-center gap-2 px-4 py-3 border-b border-thin border-border">
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/30" />
              <span className="text-xs text-muted-foreground ml-2">order-quickstart.js</span>
            </div>
            <pre className="p-5 text-[13px] leading-relaxed overflow-x-auto font-mono">
              <code>
                {codeLines.map((line, i) => {
                  if (line.type === "blank") return <span key={i} className="block h-5" />;
                  if (line.type === "comment") return <span key={i} className="block text-muted-foreground">{line.text}</span>;
                  if (line.type === "string") {
                    const parts = line.text.split(/('.*?')/g);
                    return (
                      <span key={i} className="block text-foreground">
                        {parts.map((p, j) =>
                          p.startsWith("'") ? <span key={j} className="text-primary">{p}</span> : p
                        )}
                      </span>
                    );
                  }
                  const highlighted = line.text
                    .replace(/(import|from|const|await|new)/g, '___KW___$1___/KW___');
                  const parts = highlighted.split(/(___KW___|___\/KW___)/g);
                  let inKeyword = false;
                  return (
                    <span key={i} className="block text-foreground">
                      {parts.map((p, j) => {
                        if (p === '___KW___') { inKeyword = true; return null; }
                        if (p === '___/KW___') { inKeyword = false; return null; }
                        if (inKeyword) return <span key={j} className="text-primary">{p}</span>;
                        const strParts = p.split(/('.*?')/g);
                        return strParts.map((s, k) =>
                          s.startsWith("'") ? <span key={`${j}-${k}`} className="text-primary">{s}</span> : s
                        );
                      })}
                    </span>
                  );
                })}
              </code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeveloperSection;
