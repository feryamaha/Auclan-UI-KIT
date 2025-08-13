import Link from "next/link";

const sections = [
  { id: "button", title: "Button" },
  { id: "form", title: "Form" },
  { id: "accordion", title: "Accordion" },
];

export function Sidebar({ active }: { active: string }) {
  return (
    <aside className="fixed left-0 top-16 w-56 h-[calc(100vh-4rem)] p-8 z-40 border-r">
      <nav>
        {sections.map((section) => (
          <Link
            key={section.id}
            href={`/${section.id}`}
            className={`block py-1 px-2 rounded transition ${
              active === section.id
                ? "bg-gray-200 font-bold"
                : "hover:bg-gray-200"
            }`}
          >
            {section.title}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
