// Coaching route presents transformation with clarity, restraint, and respect for the work.
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Coaching — Sun Street",
  description: "Life coaching, PSYCH-K® and Nei Gong for changing self-limiting subconscious beliefs.",
};

const offers = [
  {
    title: "Life coaching",
    description: "The Awakening programme introduces individuals to the freedom of living in a more fully expressed way — with clear intent and practical integration.",
  },
  {
    title: "PSYCH-K®",
    description: "A process for changing subconscious beliefs that perpetuate old habits of thinking and behaviour, creating room for different choices.",
  },
  {
    title: "Nei Gong",
    description: "Chinese energy exercises for harmony across body, mind and spirit, following the Taoist water tradition that also informs Tai Chi and Qi Gong.",
  },
];

const evidence = [
  {
    label: "The premise",
    title: "A repeated outcome often begins with a repeated belief.",
    description: "Coaching makes those underlying patterns visible, then works at the level where a different response can become natural rather than forced.",
  },
  {
    label: "The method",
    title: "Mind, body and behaviour belong in the same conversation.",
    description: "Life coaching brings direction, PSYCH-K® works with subconscious belief, and Nei Gong restores attention to the body and its internal state.",
  },
  {
    label: "The aim",
    title: "More choice where there used to be a loop.",
    description: "The work is designed to help people move beyond self-limiting and self-sabotaging patterns with greater awareness and agency.",
  },
];

export default function CoachingPage() {
  return (
    <ServicePage
      index="03"
      label="Coaching"
      title={<>Change the belief.<br /><em>Change what follows.</em></>}
      intro="Sun Street provides personal coaching to change subconscious beliefs that are self-limiting and self-sabotaging — opening a more deliberate way forward."
      actionLabel="Explore the approach"
      chapterTitle={<>Work with the whole<br /><em>system of self.</em></>}
      offers={offers}
      evidenceTitle={<>From reaction<br />to <em>choice.</em></>}
      evidence={evidence}
    />
  );
}
