import { SectionButton } from "@/components/ui/Button/SectionButton";
import NotFound from "@/app/not-found";
import { SectionForm } from "../ui/Form/SectionForm";

type MainContentProps = {
  section?: string;
};

export function MainContent({ section }: MainContentProps) {
  if (!section) {
    return <NotFound />;
  }

  let content;
  switch (section) {
    case "button":
      content = <SectionButton />;
      break;
    case "form":
      content = <SectionForm />;
      break;
    // Adicione mais cases conforme precisar
    default:
      content = <NotFound />;
      break;
  }

  // Aqui você encapsula o conteúdo num "container" para organizar como desejar
  return (
    <div className="w-full h-[82.5vh] flex flex-col items-center justify-center">
      {" "}
      {/* Edite as classes como quiser */}
      {content}
    </div>
  );
}
