import { ProfessionalProfile } from "@/components/public/professionals/profile";
import { getProfessionalBySlug } from "@/lib/professionals";
import { notFound } from "next/navigation";

const ProfessionalPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const professional = getProfessionalBySlug(slug);

  if (!professional) {
    notFound();
  }

  return <ProfessionalProfile professional={professional} />;
};

export default ProfessionalPage;
