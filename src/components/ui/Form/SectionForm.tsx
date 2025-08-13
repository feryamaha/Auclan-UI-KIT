// src/components/ui/Form/SectionForm.tsx
"use client";
import { Input } from "./Input";
import { FloatingLabelInput } from "./FloatingLabelInput";

export function SectionForm() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col justify-between">
      <h2 className="TypLato18w600 mb-4">Inputs Components</h2>
      <div className="w-full justify-between flex flex-wrap ">
        <div className="w-max h-max flex flex-col gap-8">
          {/* Input padrão com label flutuante */}
          <FloatingLabelInput
            label="Nome completo"
            name="nome"
            placeholder="Seu nome"
            className="w-80"
            onlyLetters
          />
          {/* Input padrão sem label flutuante, usando label tradicional */}
          <Input
            label="E-mail"
            name="email"
            className="w-80"
            placeholder="Digite seu e-mail"
            autoComplete="email"
          />
          {/* Input com mask de CPF */}
          <FloatingLabelInput
            label="CPF"
            name="cpf"
            className="w-80"
            placeholder="000.000.000-00"
            mask="cpf"
            onlyNumbers
          />
          {/* Input tradicional com opção nula */}
          <Input
            label="Telefone (opcional)"
            name="telefone"
            className="w-80"
            placeholder="(99) 99999-9999"
            withNullOption
            nullOptionText="Sem telefone"
          />
        </div>
      </div>
      <div>
        <p className="text-gray-600">
          Exemplos de campos de formulário utilizando os componentes Input e
          FloatingLabelInput da biblioteca interna. Você pode usar label
          tradicional, label flutuante, máscaras para documentos e campos com
          opção nula, conforme necessidade do formulário.
        </p>
      </div>
    </div>
  );
}
