import { motion } from "framer-motion";

const WhatsAppPhoneMockup = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40, y: 20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3 }}
      className="relative"
    >
      {/* Phone frame */}
      <div className="w-[280px] md:w-[300px] rounded-[2rem] border-[3px] border-[hsl(216,30%,20%)] bg-[#111b21] shadow-2xl overflow-hidden">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pt-3 pb-1 text-[10px] text-[#8696a0]">
          <span>9:41</span>
          <div className="flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0 1 19 12.55M5 12.55a10.94 10.94 0 0 1 5.17-2.39M10.71 5.05A16 16 0 0 1 22.56 9M1.42 9a15.91 15.91 0 0 1 4.7-2.88M8.53 16.11a6 6 0 0 1 6.95 0M12 20h.01"/></svg>
            <svg width="14" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="1" y="6" width="4" height="12" rx="1"/><rect x="7" y="4" width="4" height="14" rx="1"/><rect x="13" y="2" width="4" height="16" rx="1"/><rect x="19" y="0" width="4" height="18" rx="1"/></svg>
            <svg width="18" height="10" viewBox="0 0 28 14" fill="none"><rect x="0.5" y="0.5" width="23" height="13" rx="3" stroke="currentColor"/><rect x="2" y="2" width="16" height="10" rx="2" fill="#25d366"/><rect x="25" y="4" width="2.5" height="6" rx="1" fill="currentColor"/></svg>
          </div>
        </div>

        {/* Chat header */}
        <div className="flex items-center gap-2.5 px-3 py-2 bg-[#1f2c34]">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          <div className="w-8 h-8 rounded-full bg-[#25d366] flex items-center justify-center">
            <span className="text-xs font-bold text-[#111b21]">P</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-1">
              <span className="text-sm font-semibold text-[#e9edef]">Pulso</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#53bdeb"><path d="M12 2L3.5 7.5v9L12 22l8.5-5.5v-9L12 2zm-1.3 14.3l-3.5-3.5 1.4-1.4 2.1 2.1 5.1-5.1 1.4 1.4-6.5 6.5z"/></svg>
            </div>
            <span className="text-[10px] text-[#8696a0]">online</span>
          </div>
          <div className="flex items-center gap-3 text-[#8696a0]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.09 5.18 2 2 0 0 1 5.05 3h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.59 11.4a16 16 0 0 0 6.01 6.01l1.76-1.71a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 23 17.92z"/></svg>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
          </div>
        </div>

        {/* Chat area */}
        <div
          className="px-3 py-4 space-y-2 min-h-[320px]"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'200\' height=\'200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'p\' width=\'40\' height=\'40\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M20 0v40M0 20h40\' stroke=\'%23ffffff\' stroke-width=\'.15\' opacity=\'.04\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect fill=\'%230b141a\' width=\'200\' height=\'200\'/%3E%3Crect fill=\'url(%23p)\' width=\'200\' height=\'200\'/%3E%3C/svg%3E")' }}
        >
          {/* Date chip */}
          <div className="flex justify-center mb-2">
            <span className="text-[10px] bg-[#182229] text-[#8696a0] px-3 py-0.5 rounded-md">TODAY</span>
          </div>

          {/* Bot greeting */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-1.5">
              <p className="text-[13px] text-[#e9edef]">Hi María! Your payment is being processed... 🔄</p>
              <span className="text-[10px] text-[#8696a0] float-right ml-3 mt-0.5">10:31</span>
            </div>
          </div>

          {/* Payment confirmation card */}
          <div className="flex justify-start">
            <div className="max-w-[85%] bg-[#202c33] rounded-lg rounded-tl-sm px-2.5 py-2">
              {/* Card */}
              <div className="bg-[#111b21] rounded-lg border border-[#2a3942] overflow-hidden mb-1">
                <div className="bg-[#25d366]/10 px-3 py-2.5 flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-[#25d366] flex items-center justify-center flex-shrink-0">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#111b21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                  </div>
                  <span className="text-sm font-semibold text-[#25d366]">Payment confirmed</span>
                </div>
                <div className="px-3 py-2.5 space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <span className="text-[11px] text-[#8696a0]">Amount</span>
                    <span className="text-base font-bold text-[#e9edef]">Bs. 350</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#8696a0]">Merchant</span>
                    <span className="text-[12px] text-[#e9edef]">Café Mondongo</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#8696a0]">Transaction</span>
                    <span className="text-[11px] text-[#8696a0] font-mono">PLS-8X29K</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[11px] text-[#8696a0]">Time</span>
                    <span className="text-[11px] text-[#8696a0]">10:32 AM · Apr 12</span>
                  </div>
                </div>
              </div>
              <span className="text-[10px] text-[#8696a0] float-right ml-3">10:32</span>
            </div>
          </div>

          {/* User reply */}
          <div className="flex justify-end">
            <div className="max-w-[85%] bg-[#005c4b] rounded-lg rounded-tr-sm px-2.5 py-1.5">
              <p className="text-[13px] text-[#e9edef]">Got it, thanks! Super fast ⚡</p>
              <div className="flex items-center justify-end gap-0.5 mt-0.5">
                <span className="text-[10px] text-[#8696a0]">10:32</span>
                <svg width="16" height="10" viewBox="0 0 16 10" fill="#53bdeb"><path d="M1.5 5.5L4 8l7-7M5.5 5.5L8 8l7-7"/></svg>
              </div>
            </div>
          </div>
        </div>

        {/* Input bar */}
        <div className="flex items-center gap-2 px-2 py-2 bg-[#111b21]">
          <div className="flex items-center gap-2 text-[#8696a0]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/></svg>
          </div>
          <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5">
            <span className="text-[12px] text-[#8696a0]">Type a message</span>
          </div>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v4M8 23h8"/></svg>
        </div>
      </div>
    </motion.div>
  );
};

export default WhatsAppPhoneMockup;
