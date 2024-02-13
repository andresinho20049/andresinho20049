import { CardResume } from "@/components/cards/cardResume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default async function portfolio() {
  return (
    <section className="snap-start w-full">
      <h1>Resume</h1>
      <h3>Developing</h3>
    </section>
  );
}
