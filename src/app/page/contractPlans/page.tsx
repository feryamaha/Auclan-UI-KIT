//src/page/contractPlans/page.tsx
"use client";

// Importação do componente principal
import StepA0Welcome from "@/components/PageContratarPlano/StepA0-Welcome";

export default function PagecontractPlans() {
  // Renderiza o componente principal dentro do layout com main como container
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <StepA0Welcome />
      
    </main>
  );
}
