// src/components/ui/Input.tsx

import { forwardRef, useState, useEffect, useRef } from "react";
import { FieldError } from "react-hook-form";

interface InputProps {
  label?: string;
  className?: string;
  error?: FieldError;
  name?: string;
  defaultValue?: string;
  value?: string;
  endAdornment?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  withNullOption?: boolean;
  nullOptionText?: string;
  onNullChange?: (isNull: boolean) => void;
}

const InputComponent = forwardRef<
  HTMLInputElement,
  InputProps & React.InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      label,
      className,
      error,
      name,
      defaultValue,
      value,
      endAdornment,
      onChange,
      onBlur,
      onFocus,
      withNullOption = false,
      nullOptionText = "Não há",
      onNullChange,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [isNullChecked, setIsNullChecked] = useState(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const inputWrapperRef = useRef<HTMLDivElement>(null);

    const handleRef = (element: HTMLInputElement | null) => {
      inputRef.current = element;
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    useEffect(() => {
      if (defaultValue) {
        setHasValue(true);
        if (defaultValue === nullOptionText) {
          setIsNullChecked(true);
        }
      }
    }, [defaultValue, nullOptionText]);

    useEffect(() => {
      if (value !== undefined) {
        setHasValue(value.length > 0);
        if (value === nullOptionText) {
          setIsNullChecked(true);
        } else if (value === "") {
          setIsNullChecked(false);
        }
      }
    }, [value, nullOptionText]);

    useEffect(() => {
      const checkInputValue = () => {
        const input = inputRef.current;
        if (input && input.value && input.value.length > 0) {
          setHasValue(true);
          if (input.value === nullOptionText) {
            setIsNullChecked(true);
          }
        } else if (input && (!input.value || input.value.length === 0)) {
          if (value === undefined) {
            setHasValue(false);
          }
        }
      };

      checkInputValue();

      const timer = setTimeout(checkInputValue, 300);

      if (inputRef.current) {
        const observer = new MutationObserver((mutations) => {
          mutations.forEach(() => {
            if (inputRef.current && inputRef.current.value.length > 0) {
              setHasValue(true);
            }
          });
        });

        observer.observe(inputRef.current, {
          attributes: true,
          attributeFilter: ["value"],
        });

        return () => {
          clearTimeout(timer);
          observer.disconnect();
        };
      }

      return () => clearTimeout(timer);
    }, [value, nullOptionText]);

    useEffect(() => {
      const input = inputRef.current;
      if (!input) return;

      const handleInputEvent = () => {
        if (input.value.length > 0) {
          setHasValue(true);
        } else {
          setHasValue(false);
        }
      };

      input.addEventListener("input", handleInputEvent);

      const checkAutofill = () => {
        setTimeout(() => {
          if (input && input.value.length > 0) {
            setHasValue(true);
          }
        }, 100);
      };

      input.addEventListener("autocompleteinput", checkAutofill);
      input.addEventListener("change", checkAutofill);

      const autoFillCheck = setInterval(() => {
        if (input && input.value.length > 0) {
          setHasValue(true);
        }
      }, 500);

      return () => {
        input.removeEventListener("input", handleInputEvent);
        input.removeEventListener("autocompleteinput", checkAutofill);
        input.removeEventListener("change", checkAutofill);
        clearInterval(autoFillCheck);
      };
    }, []);

    useEffect(() => {
      if (!inputWrapperRef.current) return;

      const wrapper = inputWrapperRef.current;

      const handleWrapperClick = (e: MouseEvent) => {
        if (isNullChecked) {
          const target = e.target as HTMLElement;
          if (!target.closest(".null-option-controls")) {
            e.preventDefault();
            e.stopPropagation();
          }
        }
      };

      wrapper.addEventListener("click", handleWrapperClick, true);

      return () => {
        wrapper.removeEventListener("click", handleWrapperClick, true);
      };
    }, [isNullChecked]);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      if (isNullChecked) {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.blur();
        }
        return;
      }
      setIsFocused(true);
      if (onFocus) onFocus(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      if (onBlur) onBlur(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (isNullChecked) return;
      setHasValue(e.target.value.length > 0);
      if (onChange) onChange(e);
    };

    const handleNullOptionChange = () => {
      const newCheckedState = !isNullChecked;
      setIsNullChecked(newCheckedState);

      if (onNullChange) {
        onNullChange(newCheckedState);
      }

      if (inputRef.current) {
        if (newCheckedState) {
          inputRef.current.value = nullOptionText;
          setHasValue(true);
        } else {
          inputRef.current.value = "";
          setHasValue(false);
        }

        const event = new Event("input", { bubbles: true });
        inputRef.current.dispatchEvent(event);

        if (onChange) {
          const syntheticEvent = {
            target: {
              ...inputRef.current,
              value: newCheckedState ? nullOptionText : "",
              name: inputRef.current.name,
              type: inputRef.current.type,
              dataset: {
                ...inputRef.current.dataset,
                isNull: newCheckedState ? "true" : "false",
              },
            },
            currentTarget: inputRef.current,
            preventDefault: () => {},
            stopPropagation: () => {},
            bubbles: true,
            cancelable: true,
            defaultPrevented: false,
            timeStamp: Date.now(),
            type: "change",
            isTrusted: false,
          } as unknown as React.ChangeEvent<HTMLInputElement>;

          onChange(syntheticEvent);
        }
      }
    };

    return (
      <div className={`relative ${className ?? ""}`}>
        <div className="relative" ref={inputWrapperRef}>
          <input
            className={`w-full h-12 border rounded-lg p-4 ${
              error
                ? "border-auxiliary-default focus:outline-none focus:ring-0 focus:border-red-500"
                : "border-secondary-100 focus:outline-none focus:ring-0 focus:border-gray-950"
            } ${isNullChecked ? "bg-gray-100 cursor-default" : ""} ${
              withNullOption ? "pr-20" : ""
            } hover:border-gray-950`}
            placeholder={isFocused ? " " : ""}
            name={name}
            id={name}
            ref={handleRef}
            defaultValue={defaultValue}
            value={value}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            tabIndex={isNullChecked ? -1 : 0}
            readOnly={isNullChecked}
            data-is-null={isNullChecked ? "true" : "false"}
            {...rest}
          />

          {label && (
            <label
              className={`absolute left-2 pointer-events-none transition-all duration-200 font-normal font-inter ${
                isFocused || hasValue
                  ? `top-[-8px] text-sm bg-white pl-2 pr-1 ${
                      error ? "text-auxiliary-default" : "text-secondary-500"
                    }`
                  : `top-1/2 -translate-y-1/2 text-base left-4 ${
                      error ? "text-auxiliary-default" : "text-secondary-500"
                    }`
              }`}
              htmlFor={name}
            >
              {label}
            </label>
          )}

          {withNullOption && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center z-10 null-option-controls">
              <label
                htmlFor={`${name}-null-option`}
                className="text-sm text-secondary-500 mr-2 cursor-pointer font-inter"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleNullOptionChange();
                }}
              >
                {nullOptionText}
              </label>
              <div
                className="relative inline-block w-4 h-4 cursor-pointer"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNullOptionChange();
                }}
              >
                <input
                  type="checkbox"
                  id={`${name}-null-option`}
                  checked={isNullChecked}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleNullOptionChange();
                  }}
                  className="absolute opacity-0 w-4 h-4 cursor-pointer z-20"
                  onClick={(e) => e.stopPropagation()}
                />
                <div
                  className={`w-4 h-4 border ${
                    isNullChecked
                      ? "bg-accent-default border-accent-default"
                      : "border-gray-300"
                  } rounded`}
                >
                  {isNullChecked && (
                    <svg
                      className="w-3 h-3 text-white absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </div>
              </div>
            </div>
          )}

          {endAdornment && !withNullOption && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {endAdornment}
            </div>
          )}

          {isNullChecked && (
            <div
              className="absolute inset-0 z-1 cursor-default"
              onClick={(e) => {
                if (
                  !(e.target as HTMLElement).closest(".null-option-controls")
                ) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }}
            />
          )}
        </div>

        {error && (
          <p className="mt-1 text-sm text-auxiliary-default">{error.message}</p>
        )}
      </div>
    );
  }
);

InputComponent.displayName = "Input";
export const Input = InputComponent;
