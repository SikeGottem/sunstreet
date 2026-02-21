"use client";
import { motion } from "framer-motion";
import PageNav from "@/components/PageNav";
import PageFooter from "@/components/PageFooter";
import CounterNumber from "@/components/CounterNumber";

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

export default function ConsultingPage() {
  const services = [
    { num: "01", title: "Strategic Operating Model Review", desc: "Holistic analysis of your organisation including people, process, technology and governance to highlight key opportunities and risks" },
    { num: "02", title: "Process Improvement", desc: "Detailed analysis and implementation of new and existing business processes with the aim of achieving optimal efficiency and effectiveness" },
    { num: "03", title: "Programme & Change Management", desc: "Integration, implementation and risk mitigation for any organisational change programme" },
  ];
  const caseStudies = [
    { title: "Multinational F&B Company", desc: "Integration of 3 businesses into 1 for a new multinational owner. Work included identification and quantification of change magnitude, integration risks, costs, benefits and immediate actions across all functions." },
    { title: "Government Service Agencies", desc: "Merger of 3 large government service agencies — ICT Infrastructure integration roadmap, current state review, cost/benefit mapping, integration plan with timelines, milestones, gaps and risk areas." },
  ];
  const stats = [
    { value: 15, suffix: "+", label: "Years Experience", deco: "15" },
    { value: 2016, suffix: "", label: "Established", deco: "2016" },
    { value: 8, suffix: "+", label: "Countries", deco: "08" },
  ];

  return (
    <main className="bg-white text-[#011E41] font-sans">
      <PageNav />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal><SectionLabel number="01" label="Consulting" /></Reveal>
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <div>
              <Reveal delay={0.1}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] mb-2">With over</h1></Reveal>
              <Reveal delay={0.2}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] italic">15 years</h1></Reveal>
              <Reveal delay={0.25}><h1 className="text-gradient-navy font-sans text-5xl md:text-7xl leading-[0.95] mb-10">experience</h1></Reveal>
            </div>
            <div className="md:mt-16">
              <Reveal delay={0.3}>
                <p className="text-[#011E41]/60 text-lg leading-relaxed">Sun Street helps organisations develop and implement strategy. Established in 2016, we assist clients review, develop and implement strategic plans across industries.</p>
                <p className="text-[#011E41]/50 mt-4 leading-relaxed">Founded by an ex-management consultant with 15+ years of APAC experience. From large scale transformations to SME business reviews.</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1}>
              <div className="relative text-center">
                <span className="deco-number absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[120px] md:text-[180px]">{stat.deco}</span>
                <div className="relative z-10">
                  <div className="font-sans text-5xl md:text-7xl text-[#011E41] mb-2">
                    <CounterNumber end={stat.value} suffix={stat.suffix} duration={2 + i * 0.3} />
                  </div>
                  <p className="text-[#011E41]/40 text-xs tracking-[0.3em] uppercase">{stat.label}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Services */}
      <div className="section-divider" />
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Reveal key={svc.num} delay={i * 0.1}>
                <div className="border-2 border-[#011E41]/15 p-8 bg-white h-full group card-lift hover:bg-[#011E41] hover:border-[#011E41] rounded-xl">
                  <span className="text-[#C9A84C]/50 font-mono text-sm group-hover:text-white/30 transition-colors duration-300">{svc.num}</span>
                  <h4 className="font-sans text-2xl mt-4 mb-4 text-[#011E41] group-hover:text-white transition-colors duration-300">{svc.title}</h4>
                  <p className="text-[#011E41]/50 text-sm leading-relaxed group-hover:text-white/60 transition-colors duration-300">{svc.desc}</p>
                  <div className="w-0 group-hover:w-12 h-px bg-white/50 mt-6 transition-all duration-700" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <div className="section-divider" />
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <Reveal><SectionLabel number="01.1" label="Case Studies" /></Reveal>
          <Reveal delay={0.1}><h3 className="text-gradient-navy font-sans text-4xl md:text-5xl mb-16">Programme & <span className="italic">Change Management</span></h3></Reveal>
          <div className="grid md:grid-cols-2 gap-6">
            {caseStudies.map((cs, i) => (
              <Reveal key={cs.title} delay={i * 0.15}>
                <div className="border-2 border-[#011E41]/15 p-8 md:p-10 bg-white h-full card-lift rounded-xl">
                  <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">{cs.title}</span>
                  <p className="text-[#011E41]/60 mt-4 leading-relaxed">{cs.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Clients */}
          <div className="mt-24">
            <Reveal><p className="text-[#C9A84C] text-xs tracking-[0.4em] uppercase mb-10">Trusted By</p></Reveal>
            <div className="flex flex-wrap items-center gap-x-16 gap-y-6">
              {["Verco", "Lion Nathan", "Babcock & Brown", "Ageas"].map((c, i) => (
                <Reveal key={c} delay={i * 0.1}>
                  <span className="link-underline text-[#011E41]/25 hover:text-[#011E41]/60 transition-colors text-xl font-sans tracking-wider cursor-default">{c}</span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <PageFooter />
    </main>
  );
}
