import { motion } from "framer-motion";

const ChatBubble = ({ text, sent, time }: { text: string; sent?: boolean; time: string }) => (
  <div className={`flex ${sent ? "justify-end" : "justify-start"}`}>
    <div className={`max-w-[75%] rounded-xl px-3.5 py-2 text-sm ${sent ? "bg-accent/20 text-foreground rounded-br-sm" : "bg-secondary text-foreground rounded-bl-sm"}`}>
      <p>{text}</p>
      <span className="block text-[10px] text-muted-foreground mt-1 text-right">{time}</span>
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
          <p className="text-muted-foreground mb-4">
            400 million people in Latin America use WhatsApp daily — to run businesses, pay friends, negotiate with vendors. But there's no programmable layer to build real financial products on top of it.
          </p>
          <p className="text-muted-foreground">
            Pulso is the missing infrastructure. We give developers the tools to embed identity, payments, and credit workflows into the conversations where commerce already happens.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Before */}
          <div className="rounded-xl border-thin border-border bg-card p-5">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 block">Before Pulso</span>
            <div className="space-y-3">
              <ChatBubble text="Hey, can I pay you for the order?" sent time="10:31" />
              <ChatBubble text="Sure, send it to my bank account. CLABE: 0123456789..." time="10:32" />
              <ChatBubble text="Done! Here's my screenshot 📸" sent time="10:38" />
              <ChatBubble text="Hmm I don't see it yet, let me check..." time="10:45" />
              <ChatBubble text="Still nothing 😅 can you send again?" time="11:12" />
            </div>
          </div>

          {/* After */}
          <div className="rounded-xl border-thin border-border bg-card p-5">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 block">With Pulso</span>
            <div className="space-y-3">
              <ChatBubble text="Hey, can I pay you for the order?" sent time="10:31" />
              <ChatBubble text="Sure! Here's the payment link:" time="10:31" />
              <div className="flex justify-start">
                <div className="max-w-[75%] rounded-xl bg-secondary px-3.5 py-3 rounded-bl-sm">
                  <div className="border-thin border-border rounded-lg p-3 bg-background">
                    <div className="flex items-center gap-2 mb-1">
                      <div className="w-5 h-5 rounded bg-primary/20 flex items-center justify-center">
                        <span className="text-[10px] text-primary font-bold">P</span>
                      </div>
                      <span className="text-xs font-semibold">Pulso Pay</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Pay MXN $450.00 →</p>
                  </div>
                  <span className="block text-[10px] text-muted-foreground mt-1.5 text-right">10:31</span>
                </div>
              </div>
              <ChatBubble text="Paid ✅ Got instant confirmation!" sent time="10:32" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
