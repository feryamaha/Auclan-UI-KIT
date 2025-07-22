//src/components/PageHelp/FormHelp.tsx

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { formHelpSchema, FormHelpData } from "@/api/schemas/formHelpSchema";

const FormHelp = () => {
  const {
    register,
    formState: { errors, isValid },
  } = useForm<FormHelpData>({
    resolver: zodResolver(formHelpSchema),
    mode: "onChange",
  });

  const getInputClass = (fieldName: keyof FormHelpData) => {
    const baseClass =
      "w-full py-[12px] px-[16px] border rounded TypographyPinter16w500g";
    if (errors[fieldName]) {
      return `${baseClass} border-orange-500`;
    }
    return baseClass;
  };

  const getButtonClass = () => {
    return isValid
      ? "w-full btnFormHover cursor-pointer"
      : "w-full btnForm cursor-pointer";
  };

  return (
    <form
      action="https://formsubmit.co/feryamaha@hotmail.com"
      method="POST"
      className="w-full @tablet:max-w-[520px] h-[585px] bg-white rounded-[16px] border p-[32px]"
    >
      {/* Campos ocultos para controle do FormSubmit */}
      <input type="hidden" name="_next" value="https://seusite.com/obrigado" />
      <input type="hidden" name="_captcha" value="false" />
      <input
        type="hidden"
        name="_subject"
        value="Nova mensagem do formulário de ajuda"
      />

      <h2 className="TypographyPlato24 mb-[24px]">Preencha o formulário</h2>
      <div className="space-y-5">
        <div>
          <label className="TypographyPlato20">Sobre você:</label>
        </div>

        <input
          {...register("userName")}
          name="name"
          placeholder="Nome completo"
          className={getInputClass("userName")}
        />

        <input
          {...register("email")}
          name="email"
          type="email"
          placeholder="E-mail"
          className={getInputClass("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}

        <input
          {...register("phone")}
          name="phone"
          type="tel"
          placeholder="Telefone"
          className={getInputClass("phone")}
        />
        {errors.phone && (
          <p className="text-red-500 text-sm">{errors.phone.message}</p>
        )}

        <div>
          <label className="TypographyPlato20">Sua mensagem:</label>
        </div>

        <textarea
          {...register("message")}
          name="message"
          placeholder="Digite sua mensagem"
          className={getInputClass("message")}
        />

        <Button
          variant="btnForm"
          className={getButtonClass()}
          type="submit"
          disabled={!isValid}
        >
          <span className="w-full">Enviar mensagem</span>
        </Button>
      </div>
    </form>
  );
};

export default FormHelp;
