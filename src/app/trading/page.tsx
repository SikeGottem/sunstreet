"use client";
import { motion } from "framer-motion";
import PageNav from "@/components/PageNav";
import PageFooter from "@/components/PageFooter";
import TiltCard from "@/components/TiltCard";
import TextScramble from "@/components/TextScramble";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  );
}

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <p className="text-[11px] tracking-[0.4em] uppercase text-[#011E41]/40 mb-8 font-mono">
      <span className="text-[#C9A84C]">{number}</span>
      <span className="mx-3 text-[#011E41]/20">—</span>
      {label}
    </p>
  );
}

const countries = ["Hong Kong", "China", "Indonesia", "Japan", "Singapore", "Thailand", "Korea", "Taiwan"];

export default function TradingPage() {
  const services = [
    { num: "01", title: "Full Service Distribution", desc: "End-to-end brand distribution services from sales, warehousing, fulfilment and after-sales support" },
    { num: "02", title: "Retail Strategy", desc: "Development of your brand\u2019s retail strategy by leveraging existing retail knowledge and networks to ensure correct brand positioning" },
    { num: "03", title: "Market Entry Consultation", desc: "Development of market entry strategies and assistance in finding the right partners to succeed" },
  ];

  return (
    <main className="bg-white text-[#011E41] font-sans">
      <PageNav />

      {/* Hero — split screen with decorative 02 */}
      <section className="pt-32 pb-24 px-6 bg-white relative overflow-hidden">
        {/* Decorative "02" background element on right */}
        <motion.span
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 0.05, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#011E41] text-[300px] md:text-[500px] font-bold leading-none select-none pointer-events-none"
          aria-hidden="true"
        >
          02
        </motion.span>

        <div className="max-w-7xl mx-auto relative z-10">
          <Reveal><SectionLabel number="02" label="Trading & Distribution" /></Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Reveal delay={0.1}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95]"><TextScramble text="Passionate About" /></h1></Reveal>
              <Reveal delay={0.15}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] italic mb-10">Brands for Asia</h1></Reveal>
            </div>
            <div className="md:mt-12">
              <Reveal delay={0.3}><p className="text-[#011E41]/60 text-lg leading-relaxed">At Sun Street, we are passionate about finding new or established brands for Asia. We connect global brands with the opportunities and networks they need to thrive in Asian markets.</p></Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services — with TRADING watermark */}
      <div className="section-divider" />
      <section className="py-24 px-6 bg-white relative overflow-hidden">
        {/* Background TRADING watermark */}
        <span
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[#011E41] text-[120px] md:text-[220px] font-bold tracking-[0.15em] uppercase select-none pointer-events-none whitespace-nowrap opacity-[0.03]"
          aria-hidden="true"
        >
          TRADING
        </span>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Reveal key={svc.num} delay={i * 0.1}>
                <TiltCard className="border-2 border-[#011E41]/15 p-8 bg-white h-full group card-lift hover:bg-[#011E41] hover:border-[#011E41] rounded-xl relative overflow-hidden">
                  <span className="text-[#C9A84C]/50 font-mono text-sm group-hover:text-white/30 transition-colors duration-300">{svc.num}</span>
                  <h4 className="font-sans text-2xl mt-4 mb-4 text-[#011E41] group-hover:text-white transition-colors duration-300">{svc.title}</h4>
                  <p className="text-[#011E41]/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{svc.desc}</p>
                  <div className="w-0 group-hover:w-12 h-px bg-white/50 mt-6 transition-all duration-700" />
                  <div className="absolute bottom-4 left-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-white/40">→</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Uppercut Deluxe — with staggered country tags */}
      <div className="section-divider" />
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <TiltCard className="border-2 border-[#011E41]/15 p-8 md:p-16 bg-white rounded-xl card-lift relative overflow-hidden">
              <span className="deco-number absolute -right-8 -top-8 text-[200px] md:text-[280px] leading-none select-none">UD</span>
              <div className="relative z-10">
                <SectionLabel number="02.1" label="Featured Brand" />
                <h3 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-6">Uppercut Deluxe</h3>
                <p className="text-[#011E41]/60 leading-relaxed max-w-2xl">Sun Street has been the authorised distributor of Uppercut Deluxe in Hong Kong and China since 2016 and contributed to Uppercut&apos;s expansion in Asia by supporting distribution partners in Indonesia, Japan and Singapore as well as appointing distributors in Thailand, Korea, and Taiwan.</p>
                <motion.div
                  className="flex flex-wrap gap-3 mt-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-30px" }}
                  variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
                >
                  {countries.map((c) => (
                    <motion.span
                      key={c}
                      variants={{
                        hidden: { opacity: 0, scale: 0.7, y: 10 },
                        visible: { opacity: 1, scale: 1, y: 0 },
                      }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="text-[10px] tracking-[0.2em] uppercase border border-[#011E41]/15 px-3 py-1 text-[#011E41]/40 hover:border-[#011E41] hover:text-[#011E41] transition-all duration-300"
                    >
                      {c}
                    </motion.span>
                  ))}
                </motion.div>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
