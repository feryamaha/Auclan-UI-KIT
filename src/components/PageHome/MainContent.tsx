/* import { SectionButton } from "@/components/ui/Button/SectionButton"; */
import NotFound from "@/app/not-found";
import { Avatar } from "../ui/Avatar/Avatar";
import { UIKitBadgeShowcase } from "../ui/Badge/uikitBadge";
import { UIKitButtonShowcase } from "../ui/Button/uikitButton";

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
      content = <UIKitButtonShowcase />;
      break;
    case "avatar":
      content = <Avatar />;
      break;
    case "badge":
      content = <UIKitBadgeShowcase />;
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
