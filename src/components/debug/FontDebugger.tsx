// Arquivo: src/components/debug/FontDebugger.tsx
"use client";

import { useEffect, useState } from "react";

interface FontDebuggerProps {
  selector: string; // Seletor CSS para o elemento a ser depurado
  visible?: boolean; // Controla a visibilidade do debugger
}

export function FontDebugger({ selector, visible = true }: FontDebuggerProps) {
  const [fontInfo, setFontInfo] = useState<Record<string, string>>({});
  const [elementFound, setElementFound] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.querySelector(selector);

      if (element) {
        setElementFound(true);
        const computedStyle = window.getComputedStyle(element);

        setFontInfo({
          fontFamily: computedStyle.fontFamily,
          fontSize: computedStyle.fontSize,
          fontWeight: computedStyle.fontWeight,
          lineHeight: computedStyle.lineHeight,
          letterSpacing: computedStyle.letterSpacing,
          color: computedStyle.color,
          // Adicione outras propriedades relevantes aqui
        });
      } else {
        setElementFound(false);
      }
    }
  }, [selector]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black text-white p-4 rounded-md max-w-xs overflow-auto text-xs">
      <h3 className="font-bold mb-2">Font Debug: {selector}</h3>
      {elementFound ? (
        <pre>{JSON.stringify(fontInfo, null, 2)}</pre>
      ) : (
        <p className="text-red-400">Elemento não encontrado</p>
      )}
    </div>
  );
}
