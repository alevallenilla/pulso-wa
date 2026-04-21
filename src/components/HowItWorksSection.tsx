import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, Users, Zap, Languages, ClipboardList, Store } from "lucide-react";

const StepChatMockup1 = () => (
  <div className="mt-4 rounded-xl bg-[#111b21] p-3 space-y-2">
    <div className="flex justify-start">
      <div className="max-w-[92%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
        <p className="text-[12px] text-[#e9edef] mb-2">Hola! Here's today's menu 🌮</p>
        <div className="space-y-1.5">
          {["Tacos Al Pastor · $7", "Burrito Carnitas · $10", "Quesadilla · $8"].map((item) => (
            <div key={item} className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-lg px-3 py-1.5 text-[11px] text-[#25d366] font-medium">
              {item}
            </div>
          ))}
        </div>
        <p className="text-[11px] text-[#8696a0] mt-2">Reply with your order or tap an item ↑</p>
        <span className="text-[10px] text-[#8696a0] float-right mt-0.5">10:31</span>
      </div>
    </div>
  </div>
);

const StepChatMockup2 = () => (
  <div className="mt-4 rounded-xl bg-[#111b21] p-3 space-y-2">
    <div className="flex justify-end">
      <div className="max-w-[80%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
        <p className="text-[13px] text-[#e9edef]">2x Tacos Al Pastor please 🙏</p>
        <div className="flex items-center justify-end gap-0.5 mt-0.5">
          <span className="text-[10px] text-[#8696a0]">10:32</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="#53bdeb"><path d="M1.5 5.5L4 8l7-7M5.5 5.5L8 8l7-7"/></svg>
        </div>
      </div>
    </div>
    <div className="flex justify-start">
      <div className="max-w-[92%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
        <p className="text-[12px] text-[#e9edef] mb-1.5">Got it! Your order:</p>
        <div className="bg-[#0b141a] rounded-lg border border-[#2a3942] p-2.5 mb-2">
          <div className="flex justify-between text-[11px]">
            <span className="text-[#8696a0]">2× Tacos Al Pastor</span>
            <span className="text-[#e9edef] font-semibold">$14.00</span>
          </div>
        </div>
        <div className="bg-[#25d366]/10 border border-[#25d366]/30 rounded-lg px-3 py-1.5 text-center">
          <span className="text-[12px] text-[#25d366] font-semibold">💳 Pay $14.00 via Stripe →</span>
        </div>
        <span className="text-[10px] text-[#8696a0] float-right mt-1">10:32</span>
      </div>
    </div>
  </div>
);

const StepChatMockup3 = () => (
  <div className="mt-4 rounded-xl bg-[#111b21] p-3 space-y-2">
    <div className="flex justify-start">
      <div className="max-w-[92%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
        <div className="bg-[#0b141a] rounded-lg border border-[#2a3942] overflow-hidden mb-1">
          <div className="border-l-2 border-[#25d366]">
            <div className="px-3 py-2 flex items-center gap-2">
              <div className="w-5 h-5 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#111b21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span className="text-sm font-bold text-[#25d366]">Order confirmed</span>
            </div>
            <div className="px-3 pb-2 space-y-1">
              <div className="flex justify-between">
                <span className="text-[11px] text-[#8696a0]">Order</span>
                <span className="text-[11px] text-[#e9edef]">2× Tacos Al Pastor</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[11px] text-[#8696a0]">Total</span>
                <span className="text-sm font-bold text-[#e9edef]">$14.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[11px] text-[#8696a0]">Ref</span>
                <span className="text-[11px] text-[#8696a0] font-mono">ORD-4K82X</span>
              </div>
            </div>
          </div>
        </div>
        <span className="text-[10px] text-[#8696a0] float-right">10:33</span>
      </div>
    </div>
  </div>
);

const steps = [
  {
    num: "01",
    title: "Customer messages the merchant's WhatsApp",
    desc: "Pulso bot receives the message and presents the merchant's menu — with quick-reply buttons or a structured list. No app required.",
    Chat: StepChatMockup1,
  },
  {
    num: "02",
    title: "Customer places order and pays via Stripe",
    desc: "The bot confirms the order summary and generates a Stripe payment link — sent directly inside the chat thread.",
    Chat: StepChatMockup2,
  },
  {
    num: "03",
    title: "Merchant and customer receive instant receipts",
    desc: "Stripe webhook fires to Pulso. Both sides get a confirmed order receipt via WhatsApp in under a second.",
    Chat: StepChatMockup3,
  },
];

const capabilities = [
  {
    icon: ShoppingBag,
    title: "Conversational ordering",
    desc: "Natural language and quick-reply buttons. Handles 'two pepperonis, no onions' without any custom logic.",
  },
  {
    icon: Languages,
    title: "Auto language detection",
    desc: "English and Spanish handled automatically — no setup required. Merchant and customer each get their preferred language.",
  },
  {
    icon: CreditCard,
    title: "Stripe checkout in chat",
    desc: "Stripe payment link generated per order, sent inside WhatsApp. No POS terminal or separate app needed.",
  },
  {
    icon: Store,
    title: "POS sync",
    desc: "Orders pushed automatically to Square and Toast — merchant's existing workflow stays intact.",
  },
  {
    icon: Users,
    title: "Two-sided WhatsApp receipts",
    desc: "Merchant and customer both receive identical confirmed receipts the moment Stripe webhook fires.",
  },
  {
    icon: ClipboardList,
    title: "Full order audit log",
    desc: "Every order, payment, and status change logged with timestamps for instant dispute resolution.",
  },
];

const integrations = [
  { flag: "🇺🇸", name: "Stripe", region: "United States", available: true },
  { flag: "🇲🇽", name: "DiMo", region: "Mexico", available: false },
  { flag: "🇧🇷", name: "Pix", region: "Brazil", available: false },
  { flag: "🇧🇴", name: "$imple", region: "Bolivia", available: false },
  { flag: "🇨🇴", name: "Transfiya", region: "Colombia", available: false },
  { flag: "🌎", name: "More coming", region: "", available: false },
];

const HowItWorksSection = () => {
  return (
    <section id="pulso-order" className="py-20 md:py-32 bg-[#060d1a]">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-4 rounded-xl border border-border bg-card p-4 mb-8"
        >
          <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">Pulso Order</h3>
              <span className="text-xs font-medium text-primary">First use case · Live</span>
            </div>
            <p className="text-xs text-muted-foreground">WhatsApp order management and Stripe checkout for US Latino merchants.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Order placed. Payment collected. Receipt delivered. Under 60 seconds.
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            No app, no website, no POS terminal. Customers order and pay entirely inside WhatsApp. Merchants get structured orders, Stripe payments, and instant receipts — all without changing how they work.
          </p>
        </motion.div>

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

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h3 className="text-xl font-bold mb-5">Payment integrations</h3>
          <div className="flex flex-wrap gap-2.5">
            {integrations.map((r) => (
              <span
                key={r.name}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border ${
                  r.available
                    ? "bg-[#25d366]/10 border-[#25d366]/30 text-[#25d366]"
                    : "bg-muted/30 border-border text-muted-foreground"
                }`}
              >
                <span>{r.flag}</span>
                {r.name}{r.region && ` · ${r.region}`}
              </span>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground mt-3">
            Green = available now · Gray = in development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl bg-[#0a1828] border border-border p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Time to first order</p>
            <p className="text-base font-semibold">Under 10 minutes from setup to live</p>
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
