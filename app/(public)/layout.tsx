import { dmSans, dmSerifDisplay } from "@/fonts";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/public/navbar";
import { Footer } from "@/components/public/footer";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <main
        className={cn(
          "public-theme min-h-screen font-sans",
          dmSans.variable,
          dmSerifDisplay.variable,
        )}>
        {children}
      </main>
      <Footer />
    </>
  );
}
