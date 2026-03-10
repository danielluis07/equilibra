import { dmSans, dmSerifDisplay } from "@/fonts";
import { cn } from "@/lib/utils";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "public-theme min-h-screen font-sans",
        dmSans.variable,
        dmSerifDisplay.variable,
      )}>
      <main>{children}</main>
    </div>
  );
}
