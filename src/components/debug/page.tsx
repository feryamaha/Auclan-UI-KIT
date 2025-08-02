// src/app/debug/page.tsx
"use client";

import { FontDebugger } from "@/components/debug/FontDebugger";
import { useState } from "react";

export default function DebugPage() {
  const [selector, setSelector] = useState(".TypographyNavHeader");

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Página de Depuração de Fontes</h1>

      <div className="mb-6">
        <input
          type="text"
          value={selector}
          onChange={(e) => setSelector(e.target.value)}
          className="p-2 border rounded w-full mb-2"
          placeholder="Digite um seletor CSS (.classe, #id, etc)"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={() => setSelector(selector)}
        >
          Depurar
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Exemplos de elementos para teste */}
        <div>
          <p className="TypographyNavHeader mb-4">
            Exemplo de texto com TypographyNavHeader
          </p>
          <p className="mb-4">
            Exemplo de texto com{" "}
            <span className="font-medium">166 procedimentos</span>
          </p>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <pre className="text-xs">{`Verificando seletor: ${selector}`}</pre>
        </div>
      </div>

      {/* O debugger que mostra as informações de fonte */}
      <FontDebugger selector={selector} />
    </div>
  );
}
