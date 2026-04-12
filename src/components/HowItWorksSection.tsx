import { motion } from "framer-motion";
import { Shield, Webhook, Users, ShieldCheck, Zap, QrCode, ClipboardList } from "lucide-react";

const StepChatMockup1 = () => (
  <div className="mt-4 rounded-xl bg-[#111b21] p-3 space-y-2">
    <div className="flex justify-start">
      <div className="max-w-[90%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
        <div className="bg-[#0b141a] rounded-lg border border-[#2a3942] p-3 mb-1">
          <div className="w-full h-20 bg-[#1a2730] rounded flex items-center justify-center mb-2">
            <QrCode className="w-10 h-10 text-[#8696a0]" />
          </div>
          <p className="text-sm font-semibold text-[#e9edef]">Bs. 350.00</p>
          <p className="text-xs text-[#8696a0]">Scan with your banking app</p>
        </div>
        <span className="text-[10px] text-[#8696a0] float-right">10:31</span>
      </div>
    </div>
  </div>
);

const StepChatMockup2 = () => (
  <div className="mt-4 rounded-xl bg-[#111b21] p-3 space-y-2">
    <div className="flex justify-end">
      <div className="max-w-[90%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
        <p className="text-[13px] text-[#e9edef]">Paid! Just sent Bs. 350 ✓</p>
        <div className="flex items-center justify-end gap-0.5 mt-0.5">
          <span className="text-[10px] text-[#8696a0]">10:32</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="#53bdeb"><path d="M1.5 5.5L4 8l7-7M5.5 5.5L8 8l7-7"/></svg>
        </div>
      </div>
    </div>
    <div className="flex justify-center">
      <span className="text-[10px] text-[#8696a0] bg-[#182229] px-3 py-0.5 rounded-md italic">verifying with $imple rail...</span>
    </div>
  </div>
);

const StepChatMockup3 = () => (
  <div className="mt-4 rounded-xl bg-[#111b21] p-3 space-y-2">
    <div className="flex justify-start">
      <div className="max-w-[90%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
        <div className="bg-[#0b141a] rounded-lg border border-[#2a3942] overflow-hidden mb-1">
          <div className="border-l-2 border-[#25d366]">
            <div className="px-3 py-2 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111b21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span className="text-sm font-bold text-[#25d366]">Payment confirmed</span>
            </div>
            <div className="px-3 pb-2 space-y-1">
              <div className="flex justify-between">
                <span className="text-[11px] text-[#8696a0]">Amount</span>
                <span className="text-sm font-bold text-[#e9edef]">Bs. 350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[11px] text-[#8696a0]">Transaction</span>
                <span className="text-[11px] text-[#8696a0] font-mono">TXN-8821</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[11px] text-[#8696a0]">Time</span>
                <span className="text-[11px] text-[#8696a0]">10:32 AM · Apr 12</span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-[10px] text-[#8696a0] float-right">10:32</span>
      </div>
    </div>
  </div>
);

const steps = [
  {
    num: "01",
    title: "Merchant creates a payment request",
    desc: "Via the Pulso API, the merchant generates a QR linked to their local payment rail, shared directly in WhatsApp.",
    Chat: StepChatMockup1,
  },
  {
    num: "02",
    title: "Customer pays via their local rail",
    desc: "The customer scans the QR in their banking app and pays through $imple, Pix, CoDi, or Transfiya.",
    Chat: StepChatMockup2,
  },
  {
    num: "03",
    title: "Both parties receive instant confirmation",
    desc: "Pulso sends a verified confirmation to both merchant and customer simultaneously — in under one second.",
    Chat: StepChatMockup3,
  },
];

const capabilities = [
  {
    icon: Webhook,
    title: "Real-time webhook verification",
    desc: "Listens to rail webhooks, verifies reference, amount, and recipient.",
  },
  {
    icon: Users,
    title: "Two-sided WhatsApp delivery",
    desc: "Merchant and customer both receive identical confirmation simultaneously.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud-proof confirmation",
    desc: "Cryptographic signature tied to real transaction, cannot be faked like screenshots.",
  },
  {
    icon: Zap,
    title: "Sub-second confirmation speed",
    desc: "From webhook receipt to WhatsApp delivery in under one second.",
  },
  {
    icon: QrCode,
    title: "QR generation included",
    desc: "Generate payment QRs linked to local rail directly from Pulso API.",
  },
  {
    icon: ClipboardList,
    title: "Full transaction audit log",
    desc: "Every event logged with timestamps for instant dispute resolution.",
  },
];

const rails = [
  { flag: "🇧🇴", name: "$imple", country: "Bolivia", available: true },
  { flag: "🇧🇷", name: "Pix", country: "Brazil", available: true },
  { flag: "🇲🇽", name: "CoDi", country: "Mexico", available: false },
  { flag: "🇨🇴", name: "Transfiya", country: "Colombia", available: false },
  { flag: "🇵🇪", name: "Yape / Plin", country: "Peru", available: false },
  { flag: "🌎", name: "More coming", country: "", available: false },
];

const HowItWorksSection = () => {
  return (
    <section id="pulso-verify" className="py-20 md:py-32 bg-[#060d1a]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="w-2 h-2 rounded-full bg-[#25d366]" />
          <Shield className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-widest text-[#25d366]">Pulso Verify</span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Payment confirmed. Both sides. Instantly.
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            No screenshots. No "did it go through?" messages. No manual reconciliation. Pulso Verify closes the loop between payment rails and WhatsApp — in under a second.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-5 mb-20">
          {steps.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl bg-[#0a1828] border border-border p-5"
            >
              <span className="text-xs font-bold text-primary tracking-wider">STEP {s.num}</span>
              <h3 className="text-base font-semibold mt-2 mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <s.Chat />
            </motion.div>
          ))}
        </div>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold mb-6">Capabilities</h3>
          <div className="grid sm:grid-cols-2 gap-5">
            {capabilities.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="flex gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <c.icon className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold mb-1">{c.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Payment Rails */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold mb-5">Supported payment rails</h3>
          <div className="flex flex-wrap gap-2.5">
            {rails.map((r) => (
              <span
                key={r.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  r.available
                    ? "bg-[#25d366]/10 border-[#25d366]/30 text-[#25d366]"
                    : "bg-muted/30 border-border text-muted-foreground"
                }`}
              >
                <span>{r.flag}</span>
                {r.name}{r.country && ` · ${r.country}`}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground mt-3">
            Green = available now · Gray = in development
          </p>
        </motion.div>

        {/* CTA Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-[#0a1828] border border-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Time to first verification</p>
            <p className="text-base font-semibold">Under 5 minutes from API key to live confirmation</p>
          </div>
          <a
            href="#waitlist"
            className="flex-shrink-0 px-6 py-3 rounded-lg bg-[#25d366] text-[#060d1a] font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Request early access
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
