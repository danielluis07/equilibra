import { ProfessionalProfile } from "@/components/public/professionals/profile";

const ProfessionalPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  console.log("Professional slug:", slug);

  return <ProfessionalProfile />;
};

export default ProfessionalPage;
