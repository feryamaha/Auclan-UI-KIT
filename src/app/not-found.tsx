// Arquivo: src/app/not-found.tsx
// Propósito: Define a página personalizada de erro 404, exibida quando uma rota não é encontrada, com um menu de navegação e links úteis para o usuário.

import { Header } from "@/components/PageHome/Header/Header";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import Link from "next/link";

// Componente de página personalizada para erro 404 (página não encontrada).
export default function NotFound() {
  return (
    <>
      {/* Renderiza o header com navegação no topo da página */}
      <Header />
      {/* Seção principal com fundo personalizado e conteúdo centralizado */}
      <section className='bg-[url("/images/bg-not-found.svg")] bg-no-repeat bg-top'>
        {/* Container para centralizar e limitar a largura do conteúdo */}
        <Container>
          <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] text-center">
            <h1 className="text-4xl font-bold mb-4">Página não encontrada</h1>
            <p className="text-lg mb-8">
              Desculpe, a página que você está procurando não existe.
            </p>
            <Button href="/" variant="btnPrimary">
              Voltar para a página inicial
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
