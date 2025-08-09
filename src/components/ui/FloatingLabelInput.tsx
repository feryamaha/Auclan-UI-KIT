import { useState, useEffect, KeyboardEvent } from "react";
import { UseFormRegister, FieldErrors, useWatch } from "react-hook-form";

interface FloatingLabelInputProps {
  label: string;
  name: string;
  register?: UseFormRegister<any>;
  errors?: FieldErrors<any> | { [key: string]: string };

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
  onlyLetters?: boolean;
  onlyNumbers?: boolean;
  allowAllCharacters?: boolean;
  mask?: string; // ⬅️ ADICIONADO para permitir máscaras
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
  onlyLetters = false,
  onlyNumbers = false,
  allowAllCharacters = false,
  mask, // ⬅️ agora aceitamos mask como prop
}: FloatingLabelInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  // função auxiliar para aplicar máscaras
  const applyMask = (value: string): string => {
    if (!mask) return value;
    const digits = value.replace(/\D/g, "");

    switch (mask) {
      case "cpf":
        return digits
          .replace(/^(\d{3})(\d)/, "$1.$2")
          .replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
          .replace(/\.(\d{3})(\d)/, ".$1-$2")
          .substring(0, 14);
      case "cnpj":
        return digits
          .replace(/^(\d{2})(\d)/, "$1.$2")
          .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
          .replace(/\.(\d{3})(\d)/, ".$1/$2")
          .replace(/(\d{4})(\d)/, "$1-$2")
          .substring(0, 18);
      case "phone":
        return digits
          .replace(/^(\d{2})(\d)/g, "($1) $2")
          .replace(/(\d{5})(\d{4})$/, "$1-$2")
          .substring(0, 15);
      default:
        return value;
    }
  };

  // Se tem register, use o padrão React Hook Form
  const registerProps =
    register && validation
      ? register(name, validation)
      : register
      ? register(name)
      : null;

  let watchedValue = "";
  try {
    if (control && name) {
      watchedValue = useWatch({ control, name }) || "";
    }
  } catch {
    watchedValue = "";
  }

  const [hasContent, setHasContent] = useState(false);

  useEffect(() => {
    const currentVal = value || watchedValue || "";
    setHasContent(currentVal.length > 0);
  }, [value, watchedValue]);

  const currentValue = value || watchedValue || "";
  const hasValue =
    (currentValue && String(currentValue).length > 0) || hasContent;

  const shouldShowLabel = isFocused || hasValue;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    setHasContent((e.target.value || "").length > 0);
    if (onFocus) onFocus(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasContent((e.target.value || "").length > 0);
    if (onBlur) onBlur(e);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;

    // aplica máscara antes de repassar
    if (mask) {
      val = applyMask(val);
      e.target.value = val;
    }

    let isValid = true;
    if (!allowAllCharacters) {
      if (onlyLetters) {
        isValid = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/.test(val);
      } else if (onlyNumbers) {
        isValid = /^[0-9]*$/.test(val.replace(/\D/g, ""));
      }
      if (!isValid) return;
    }

    if (onChange) onChange(e);
  };

  const controlKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (controlKeys.includes(e.key)) return;
    if (!allowAllCharacters) {
      if (onlyLetters && !/[A-Za-zÀ-ÖØ-öø-ÿ\s]/.test(e.key)) e.preventDefault();
      else if (onlyNumbers && !/[0-9]/.test(e.key)) e.preventDefault();
    }
  };

  const getErrorMessage = (): string | null => {
    // Se não existe errors ou o name não foi informado, nada a mostrar
    if (!errors || !name) return null;

    // Caso o "name" tenha pontos (campo aninhado), quebra em partes
    // Ex: "dependente.cpf" → ["dependente", "cpf"]
    const nameParts = name.split(".");
    let currentError: any = errors;

    // Navega recursivamente no objeto de errors até chegar no campo alvo
    for (const part of nameParts) {
      if (
        currentError &&
        typeof currentError === "object" &&
        part in currentError
      ) {
        currentError = currentError[part];
      } else {
        // Se em algum nível não encontrar a chave, não há erro
        return null;
      }
    }

    // Se não existe erro no campo, retorna nulo
    if (!currentError) return null;

    // Caso 1: quando o erro foi passado no formato simples { campo: "mensagem" }
    if (typeof currentError === "string") {
      return currentError;
    }

    // Caso 2: quando é o formato do React Hook Form ({ message, type, ... })
    if (typeof currentError === "object" && currentError !== null) {
      if (typeof currentError.message === "string") {
        return currentError.message;
      }
      if (currentError.type === "required") {
        return `${label.replace("*", "").trim()} é obrigatório`;
      }
    }

    // Se não identificou mensagem, retorna nulo
    return null;
  };

  const errorMessage = getErrorMessage();
  const hasError = !!errorMessage;

  let inputType = type;
  if (onlyNumbers && type === "text") {
    inputType = "tel";
  }

  const baseProps = {
    type: inputType,
    name,
    onFocus: handleFocus,
    onBlur: handleBlur,
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

  if (registerProps) {
    return (
      <div className={`relative ${className}`}>
        <input
          {...baseProps}
          {...registerProps}
          value={mask ? applyMask(currentValue) : currentValue}
          onChange={(e) => {
            handleChange(e);
            if (registerProps.onChange) registerProps.onChange(e);
          }}
        />
        <label
          className={`absolute left-4 pointer-events-none transition-all duration-200 font-normal ${
            shouldShowLabel
              ? `top-[-10px] text-sm bg-white px-2 rounded-lg ${
                  hasError ? "text-red-500" : "text-secondary-500"
                }`
              : `top-6 -translate-y-1/2 text-base ${
                  hasError ? "text-red-500" : "text-gray500"
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

  return (
    <div className={`relative ${className}`}>
      <input
        {...baseProps}
        value={mask ? applyMask(currentValue) : currentValue}
        onChange={handleChange}
      />
      <label
        className={`absolute left-4 pointer-events-none transition-all duration-200 font-normal ${
          shouldShowLabel
            ? `top-[-8px] text-sm bg-white px-2 ${
                hasError ? "text-red500" : "text-secondary-500"
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
