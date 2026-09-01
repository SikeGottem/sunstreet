// Consulting route turns Sun Street's operating experience into an editorial proof narrative.
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Consulting — Sun Street",
  description: "Strategy, operating model, process improvement and change management across APAC.",
};

const offers = [
  {
    title: "Strategic operating model review",
    description: "A connected review of people, process, technology and governance that makes opportunities, risks and trade-offs visible.",
  },
  {
    title: "Process improvement",
    description: "Detailed analysis and practical implementation of new and existing processes to improve effectiveness without losing momentum.",
  },
  {
    title: "Programme & change management",
    description: "Integration, implementation and risk mitigation for organisational change programmes where the cost of drift is high.",
  },
];

const evidence = [
  {
    label: "Multinational F&B company",
    title: "Three businesses integrated into one.",
    description: "Identified the magnitude of change, integration risks, costs, benefits and immediate actions across every function for a new multinational owner.",
  },
  {
    label: "Government service agencies",
    title: "A merger roadmap built before the move.",
    description: "Mapped ICT infrastructure, current state, cost and benefit, milestones, gaps and risk areas for the merger of three large agencies.",
  },
  {
    label: "Depth of practice",
    title: "15+ years across eight APAC markets.",
    description: "From large-scale transformation to focused SME reviews, Sun Street brings senior experience directly into the room.",
  },
];

export default function ConsultingPage() {
  return (
    <ServicePage
      index="01"
      label="Consulting"
      title={<>Strategy that reaches <em>operating reality.</em></>}
      intro="Sun Street helps organisations review, design and implement strategic plans — connecting the direction on paper to the people, systems and decisions that make it real."
      actionLabel="See how we work"
      chapterTitle={<>Clarity first.<br /><em>Then movement.</em></>}
      offers={offers}
      evidenceTitle={<>Change is only useful when it <em>lands.</em></>}
      evidence={evidence}
      showClients
    />
  );
}
