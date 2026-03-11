import { Hero } from "@/components/public/home/hero";
import { ValueProposition } from "@/components/public/home/value-proposition";
import { Services } from "@/components/public/home/services";
import { Professionals } from "@/components/public/home/professionals";
import { HowItWorks } from "@/components/public/home/how-it-works";
import { Cta } from "@/components/public/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Services />
      <Professionals />
      <HowItWorks />
      <Cta />
    </>
  );
}
