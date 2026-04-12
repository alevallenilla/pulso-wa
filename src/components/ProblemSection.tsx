import { motion } from "framer-motion";

const BeforePhone = () => (
  <div className="w-[260px] rounded-[2rem] border-[3px] border-[hsl(216,30%,20%)] bg-[#111b21] shadow-2xl overflow-hidden">
    {/* Status bar */}
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-[#8696a0]">
      <span>10:28</span>
      <div className="flex items-center gap-1">
        <svg width="14" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="6" width="4" height="12" rx="1"/><rect x="7" y="4" width="4" height="14" rx="1"/><rect x="13" y="2" width="4" height="16" rx="1"/><rect x="19" y="0" width="4" height="18" rx="1"/></svg>
        <svg width="18" height="10" viewBox="0 0 28 14" fill="none"><rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="currentColor"/><rect x="2" y="2" width="16" height="10" rx="2" fill="currentColor"/><rect x="25" y="4" width="2.5" height="6" rx="1" fill="currentColor"/></svg>
      </div>
    </div>
    {/* Header */}
    <div className="flex items-center gap-2 px-3 py-2 bg-[#1f2c34]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      <div className="w-7 h-7 rounded-full bg-[#2a3942] flex items-center justify-center">
        <span className="text-[10px] text-[#8696a0]">M</span>
      </div>
      <span className="text-sm font-semibold text-[#e9edef]">Merchant</span>
    </div>
    {/* Chat */}
    <div className="px-3 py-3 space-y-2 min-h-[280px]" style={{ background: '#0b141a' }}>
      <div className="flex justify-center mb-1">
        <span className="text-[10px] bg-[#182229] text-[#8696a0] px-3 py-0.5 rounded-md">TODAY</span>
      </div>
      {/* User sends screenshot */}
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">Just paid! Here's the screenshot 📸</p>
          <span className="text-[10px] text-[#8696a0] float-right ml-2 mt-0.5">10:31</span>
        </div>
      </div>
      {/* Blurry image placeholder */}
      <div className="flex justify-end">
        <div className="max-w-[70%] bg-[#005c4b] rounded-lg rounded-tr-sm p-1.5">
          <div className="w-full h-20 rounded bg-[#003d33] flex items-center justify-center">
            <span className="text-[10px] text-[#8696a0] italic">blurry_receipt.jpg</span>
          </div>
          <div className="flex items-center justify-end gap-0.5 mt-1 pr-1">
            <span className="text-[10px] text-[#8696a0]">10:31</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="#53bdeb"><path d="M1.5 5.5L4 8l7-7M5.5 5.5L8 8l7-7"/></svg>
          </div>
        </div>
      </div>
      {/* Merchant confused */}
      <div className="flex justify-start">
        <div className="max-w-[80%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">Hmm can't read it... did it go through? 🤔</p>
          <span className="text-[10px] text-[#8696a0] float-right ml-2 mt-0.5">10:38</span>
        </div>
      </div>
      {/* Waiting */}
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">I think so? Let me check my bank app...</p>
          <span className="text-[10px] text-[#8696a0] float-right ml-2 mt-0.5">10:45</span>
        </div>
      </div>
      {/* Unresolved */}
      <div className="flex justify-start">
        <div className="max-w-[80%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">Still nothing on my end 😅</p>
          <span className="text-[10px] text-[#8696a0] float-right ml-2 mt-0.5">11:12</span>
        </div>
      </div>
    </div>
    {/* Input */}
    <div className="flex items-center gap-2 px-2 py-2 bg-[#111b21]">
      <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5">
        <span className="text-[11px] text-[#8696a0]">Type a message</span>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
    </div>
  </div>
);

const AfterPhone = () => (
  <div className="w-[260px] rounded-[2rem] border-[3px] border-[hsl(216,30%,20%)] bg-[#111b21] shadow-2xl overflow-hidden">
    {/* Status bar */}
    <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-[#8696a0]">
      <span>10:31</span>
      <div className="flex items-center gap-1">
        <svg width="14" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="6" width="4" height="12" rx="1"/><rect x="7" y="4" width="4" height="14" rx="1"/><rect x="13" y="2" width="4" height="16" rx="1"/><rect x="19" y="0" width="4" height="18" rx="1"/></svg>
        <svg width="18" height="10" viewBox="0 0 28 14" fill="none"><rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="currentColor"/><rect x="2" y="2" width="16" height="10" rx="2" fill="#25d366"/><rect x="25" y="4" width="2.5" height="6" rx="1" fill="currentColor"/></svg>
      </div>
    </div>
    {/* Header */}
    <div className="flex items-center gap-2 px-3 py-2 bg-[#1f2c34]">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
      <div className="w-7 h-7 rounded-full bg-[#25d366] flex items-center justify-center">
        <span className="text-[10px] font-bold text-[#111b21]">P</span>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-semibold text-[#e9edef]">Pulso</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="#53bdeb"><path d="M12 2L3.5 7.5v9L12 22l8.5-5.5v-9L12 2zm-1.3 14.3l-3.5-3.5 1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4-6.5 6.5z"/></svg>
      </div>
    </div>
    {/* Chat */}
    <div className="px-3 py-3 space-y-2 min-h-[280px]" style={{ background: '#0b141a' }}>
      <div className="flex justify-center mb-1">
        <span className="text-[10px] bg-[#182229] text-[#8696a0] px-3 py-0.5 rounded-md">TODAY</span>
      </div>
      {/* User pays */}
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">Just paid! Here's the screenshot 📸</p>
          <span className="text-[10px] text-[#8696a0] float-right ml-2 mt-0.5">10:31</span>
        </div>
      </div>
      {/* Bot confirms instantly */}
      <div className="flex justify-start">
        <div className="max-w-[88%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
          <div className="bg-[#111b21] rounded-lg border border-[#2a3942] overflow-hidden mb-1">
            <div className="bg-[#25d366]/10 px-3 py-2 flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111b21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <span className="text-[13px] font-semibold text-[#25d366]">Payment confirmed</span>
            </div>
            <div className="px-3 py-2 space-y-1">
              <div className="flex justify-between items-baseline">
                <span className="text-[10px] text-[#8696a0]">Amount</span>
                <span className="text-sm font-bold text-[#e9edef]">Bs. 350</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-[#8696a0]">Merchant</span>
                <span className="text-[11px] text-[#e9edef]">Café Mondongo</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[10px] text-[#8696a0]">Transaction</span>
                <span className="text-[10px] text-[#8696a0] font-mono">PLS-8X29K</span>
              </div>
            </div>
          </div>
          <span className="text-[10px] text-[#8696a0] float-right ml-2">10:31</span>
        </div>
      </div>
      {/* User reply */}
      <div className="flex justify-end">
        <div className="max-w-[80%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">Instant! Love this ⚡</p>
          <div className="flex items-center justify-end gap-0.5 mt-0.5">
            <span className="text-[10px] text-[#8696a0]">10:32</span>
            <svg width="16" height="10" viewBox="0 0 16 10" fill="#53bdeb"><path d="M1.5 5.5L4 8l7-7M5.5 5.5L8 8l7-7"/></svg>
          </div>
        </div>
      </div>
      {/* Merchant happy */}
      <div className="flex justify-start">
        <div className="max-w-[80%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
          <p className="text-[12px] text-[#e9edef]">Confirmed on my end too ✅ Thanks!</p>
          <span className="text-[10px] text-[#8696a0] float-right ml-2 mt-0.5">10:32</span>
        </div>
      </div>
    </div>
    {/* Input */}
    <div className="flex items-center gap-2 px-2 py-2 bg-[#111b21]">
      <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5">
        <span className="text-[11px] text-[#8696a0]">Type a message</span>
      </div>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/></svg>
    </div>
  </div>
);

const ProblemSection = () => {
  return (
    <section id="why-whatsapp" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
            WhatsApp is the operating system of Latin America.{" "}
            <span className="text-muted-foreground">Financial infrastructure isn't.</span>
          </h2>
          <p className="text-muted-foreground">
            400 million people use WhatsApp daily to run businesses, pay friends, and negotiate with vendors. But there's no programmable layer to build real financial products on top of it. Pulso is the missing infrastructure.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col md:flex-row items-start justify-center gap-8 md:gap-12"
        >
          {/* Before */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Before Pulso</span>
            <BeforePhone />
          </div>

          {/* After */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#25d366]">With Pulso</span>
            <AfterPhone />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
