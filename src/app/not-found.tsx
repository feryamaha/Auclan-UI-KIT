// Arquivo: src/app/not-found.tsx
// Propósito: Define a página personalizada de erro 404, exibida quando uma rota não é encontrada, com um menu de navegação e links úteis para o usuário.

import { Container } from "@/components/ui/Container/Container";
import Image from "next/image";

// Componente de página personalizada para erro 404 (página não encontrada).
export default function NotFound() {
  return (
    <>
      <section>
        {/* Container para centralizar e limitar a largura do conteúdo */}
        <Container className="h-[500px] flex justify-center items-center ">
          <div className="w-full h-full flex flex-col items-center justify-center text-center bg-white">
            <h1 className="TypographyH1homePlans mb-4">AUCLAN UI KIT</h1>
            <p>This page does not exist.</p>
            <Image
              src="/assets/img/notfound404.jpg"
              alt="Logo"
              width={200}
              height={150}
            />
          </div>
        </Container>
      </section>
    </>
  );
}
