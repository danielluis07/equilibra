import { ProfessionalsHero } from "@/components/public/professionals/hero";
import { ProfessionalsFilters } from "@/components/public/professionals/filters";
import { ProfessionalsGrid } from "@/components/public/professionals/grid";
import { ProfessionalsCta } from "@/components/public/professionals/cta";

const ProfessionalsPage = () => {
  return (
    <>
      <ProfessionalsHero />
      <ProfessionalsFilters />
      <ProfessionalsGrid />
      <ProfessionalsCta />
    </>
  );
};

export default ProfessionalsPage;
