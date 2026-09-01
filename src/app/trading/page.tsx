// Trading route frames Sun Street as the bridge between global brands and Asian markets.
import type { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Trading & Distribution — Sun Street",
  description: "Distribution, retail strategy and market-entry support for brands expanding across Asia.",
};

const offers = [
  {
    title: "Full-service distribution",
    description: "End-to-end brand distribution across sales, warehousing, fulfilment and after-sales support — with one accountable partner.",
  },
  {
    title: "Retail strategy",
    description: "A market-specific retail plan built on existing networks, channel knowledge and the positioning the brand needs to hold.",
  },
  {
    title: "Market entry consultation",
    description: "Entry strategy and partner selection for brands that need local intelligence before they commit resources to a new market.",
  },
];

const evidence = [
  {
    label: "Featured brand · Uppercut Deluxe",
    title: "From Hong Kong and China to a wider Asian network.",
    description: "Sun Street has been the authorised distributor since 2016, supporting expansion partners in Indonesia, Japan and Singapore and appointing distributors across Thailand, Korea and Taiwan.",
  },
  {
    label: "The advantage",
    title: "Local nuance without losing the global brand.",
    description: "The work combines commercial discipline, retail context and partner networks so growth does not come at the cost of positioning.",
  },
];

const regions = ["Hong Kong", "China", "Indonesia", "Japan", "Singapore", "Thailand", "Korea", "Taiwan"];

export default function TradingPage() {
  return (
    <ServicePage
      variant="trading"
      index="02"
      label="Trading & Distribution"
      title={<>Global brands.<br /><em>Asian momentum.</em></>}
      intro="Sun Street connects global brands with the opportunities, local knowledge and distribution networks they need to grow across Asian markets."
      actionLabel="Explore the route to market"
      chapterTitle={<>A route to market<br />built for <em>the market.</em></>}
      offers={offers}
      evidenceTitle={<>Expansion with the brand <em>intact.</em></>}
      evidence={evidence}
      regions={regions}
    />
  );
}
