import { ServicesHero } from "@/components/public/services/hero";
import { SessionTypes } from "@/components/public/services/session-types";
import { PricingInfo } from "@/components/public/services/pricing-info";
import { SchedulingGuide } from "@/components/public/services/scheduling-guide";

const ServicesPage = () => {
  return (
    <>
      <ServicesHero />
      <SessionTypes />
      <PricingInfo />
      <SchedulingGuide />
    </>
  );
};

export default ServicesPage;
