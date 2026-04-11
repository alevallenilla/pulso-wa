import { motion } from "framer-motion";
import { Check } from "lucide-react";

const codeSnippet = `import Pulso from '@pulso/sdk';

const pulso = new Pulso({
  apiKey: process.env.PULSO_API_KEY,
  region: 'mx'
});

// Start a KYC verification via WhatsApp
const verification = await pulso.verify.create({
  phone: '+5215512345678',
  type: 'ine',
  webhook: 'https://your-app.com/webhooks/kyc'
});

console.log(verification.status); // 'pending'
// User completes the flow in WhatsApp ✓`;

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
                  <div className="w-5 h-5 rounded-full bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
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
              <span className="text-xs text-muted-foreground ml-2">quickstart.js</span>
            </div>
            <pre className="p-5 text-sm leading-relaxed overflow-x-auto">
              <code>{codeSnippet.split('\n').map((line, i) => (
                <span key={i} className="block">
                  {colorize(line)}
                </span>
              ))}</code>
            </pre>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

function colorize(line: string) {
  if (line.startsWith('//') || line.includes('// ')) {
    const commentIndex = line.indexOf('//');
    return (
      <>
        {commentIndex > 0 && <span>{line.slice(0, commentIndex)}</span>}
        <span className="text-muted-foreground">{line.slice(commentIndex)}</span>
      </>
    );
  }
  if (line.startsWith('import ') || line.startsWith('const ') || line.startsWith('await ')) {
    return <span>{line.replace(/(import|from|const|await|new)/g, (m) => `\u200B`).split('\u200B').reduce((acc: any[], part, i, arr) => {
      if (i === 0) return [<span key={i} className="text-primary">{line.match(/(import|from|const|await|new)/)?.[0]}</span>, part];
      return acc;
    }, [])}{line}</span>;
  }
  return <span className="text-foreground">{line}</span>;
}

export default DeveloperSection;
