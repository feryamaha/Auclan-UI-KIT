import { Sidebar } from "@/components/PageHome/Sidebar";
import { MainContent } from "@/components/PageHome/MainContent";

export default function SectionPage({
  params,
}: {
  params: { section: string };
}) {
  const { section } = params;

  return (
    <div>
      {/* Sidebar e Header já estão fixos pelo layout! */}
      <MainContent section={section} />
    </div>
  );
}
