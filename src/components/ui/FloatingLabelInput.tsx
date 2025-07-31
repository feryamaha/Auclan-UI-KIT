// src/components/ui/FloatingLabelInput.tsx

import { useState, useEffect, KeyboardEvent } from "react";
import { UseFormRegister, FieldErrors, useWatch } from "react-hook-form";

interface FloatingLabelInputProps {
  label: string;
  name: string;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any>;
  validation?: any;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  className?: string;
  placeholder?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  maxLength?: number;
  readOnly?: boolean;
  disabled?: boolean;
  control?: any;
  onlyLetters?: boolean; // Novo prop para permitir apenas letras
  onlyNumbers?: boolean; // Novo prop para permitir apenas números
}

export function FloatingLabelInput({
  label,
  name,
  register,
  errors,
  validation,
  value,
  onChange,
  type = "text",
  className = "",
  placeholder = "",
  onBlur,
  onFocus,
  maxLength,
  readOnly,
  disabled,
  control,
  onlyLetters = false, // Padrão é false
  onlyNumbers = false, // Padrão é false
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // Se tem register, use o padrão React Hook Form
  const registerProps =
    register && validation ? register(name, validation) : null;

  // Usar useWatch para monitorar valor do React Hook Form
  let watchedValue = "";
  try {
    if (control && name) {
      watchedValue = useWatch({ control, name }) || "";
    }
  } catch (error) {
    // Se useWatch falhar, continuar sem ele
    watchedValue = "";
  }

  // Estado para rastrear se o campo tem valor (backup)
  const [hasContent, setHasContent] = useState(false);

  // Sincronizar hasContent quando watchedValue ou value mudar
  useEffect(() => {
    const currentVal = value || watchedValue || "";
    setHasContent(currentVal.length > 0);
  }, [value, watchedValue]);

  // Determinar o valor atual com múltiplas fontes
  const currentValue = value || watchedValue || "";
  const hasValue =
    (currentValue && String(currentValue).length > 0) || hasContent;
  const shouldShowLabel = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);

    // Ao focar, também verificar se já tem conteúdo
    const input = e.target as HTMLInputElement;
    const inputValue = input.value || "";
    setHasContent(inputValue.length > 0);

    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);

    // Após perder o foco, verificar se o campo tem valor
    const input = e.target as HTMLInputElement;
    const inputValue = input.value || "";

    // Atualizar estado de conteúdo baseado no valor real do input
    setHasContent(inputValue.length > 0);

    if (onBlur) onBlur(e);
  };

  // Manipulador de mudança modificado para restringir entrada
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    let isValid = true;

    // Se está configurado para aceitar apenas letras
    if (onlyLetters) {
      isValid = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(value);
    }
    // Se está configurado para aceitar apenas números
    else if (onlyNumbers) {
      isValid = /^[0-9]*$/.test(value);
    }

    // Se a entrada não for válida, não atualizar o valor
    if (!isValid) {
      // Prevenir a atualização mantendo o valor anterior
      e.preventDefault();
      return;
    }

    if (onChange) onChange(e);
  };

  // Manipulador de tecla para impedir entrada inválida
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    // Permitir sempre teclas de controle (backspace, delete, arrows)
    const controlKeys = [
      "Backspace",
      "Delete",
      "ArrowLeft",
      "ArrowRight",
      "Tab",
    ];
    if (controlKeys.includes(e.key)) return;

    // Bloquear entrada baseada nas restrições
    if (onlyLetters && !/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)) {
      e.preventDefault();
    } else if (onlyNumbers && !/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  // Verificar se há erros - extrair mensagem corretamente
  const getErrorMessage = (): string | null => {
    if (!errors || !name) return null;

    // Navegar pela estrutura de nomes aninhados (ex: "identification.name")
    const nameParts = name.split(".");
    let currentError: any = errors;

    for (const part of nameParts) {
      if (
        currentError &&
        typeof currentError === "object" &&
        part in currentError
      ) {
        currentError = currentError[part];
      } else {
        return null;
      }
    }

    if (!currentError) return null;

    // Se é uma string, retornar diretamente
    if (typeof currentError === "string") return currentError;

    // Se é um objeto com message, pegar a mensagem
    if (typeof currentError === "object" && currentError !== null) {
      if (
        "message" in currentError &&
        typeof currentError.message === "string"
      ) {
        return currentError.message;
      }

      const error = currentError as any;
      if (error.message && typeof error.message === "string") {
        return error.message;
      }

      if (error.type === "required") {
        return `${label.replace("*", "").trim()} é obrigatório`;
      }
    }

    return null;
  };

  const errorMessage = getErrorMessage();
  const hasError = !!errorMessage;

  // Configuração de tipo baseado nas restrições de entrada
  let inputType = type;
  if (onlyNumbers && type === "text") {
    inputType = "tel"; // Melhor para entrada numérica em dispositivos móveis
  }

  // Construir props do input com classes do Tailwind para todos os estados
  const baseProps = {
    type: inputType,
    name,
    onFocus: handleFocus,
    placeholder: isFocused ? placeholder : "",
    maxLength,
    readOnly,
    disabled,
    onKeyDown: handleKeyDown,
    className: `w-full h-12 border rounded-lg px-4 pt-2 pb-2 transition-colors ${
      hasError
        ? "border-red-500 ring-red-400 focus:outline-none focus:ring-1 focus:border-red-500"
        : "border-secondary-100 ring-gray950 focus:outline-none focus:ring-1 focus:border-gray-950"
    } ${readOnly ? "cursor-default" : ""} hover:border-gray-950`,
  };

  // Adicionar um pattern HTML para reforçar a validação
  if (onlyLetters) {
    (baseProps as any).pattern = "[A-Za-zÀ-ÖØ-öø-ÿ\\s]*";
  } else if (onlyNumbers) {
    (baseProps as any).pattern = "[0-9]*";
  }

  // Se tem register, usar React Hook Form
  if (registerProps) {
    return (
      <div className={`relative ${className}`}>
        <input
          {...baseProps}
          {...registerProps}
          onChange={(e) => {
            handleChange(e);
            if (registerProps.onChange) registerProps.onChange(e);
          }}
          onBlur={(e) => {
            handleBlur(e);
            if (registerProps.onBlur) registerProps.onBlur(e);
          }}
        />
        <label
          className={`absolute left-4 pointer-events-none transition-all duration-200 font-normal ${
            shouldShowLabel
              ? `top-[-8px] text-sm bg-white px-2 ${
                  hasError ? "text-red-500" : "text-secondary-500"
                }`
              : `top-6 -translate-y-1/2 text-base ${
                  hasError ? "text-red-500" : "text-secondary-500"
                }`
          }`}
        >
          {label}
        </label>
        {hasError && errorMessage && (
          <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
        )}
      </div>
    );
  }

  // Senão, usar controlled component
  return (
    <div className={`relative ${className}`}>
      <input
        {...baseProps}
        value={value || ""}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-normal ${
          shouldShowLabel
            ? `top-[-8px] text-sm bg-white px-2 ${
                hasError ? "text-red-500" : "text-secondary-500"
              }`
            : `top-1/2 -translate-y-1/2 text-base ${
                hasError ? "text-red-500" : "text-secondary-500"
              }`
        }`}
      >
        {label}
      </label>
      {hasError && errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
}
