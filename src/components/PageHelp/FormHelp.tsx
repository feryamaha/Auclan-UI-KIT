// src/components/PageHelp/FormHelp.tsx

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { formHelpSchema, FormHelpData } from "@/api/schemas/formHelpSchema";
import { FloatingLabelInput } from "@/components/ui/FloatingLabelInput";

const FormHelp = () => {
  const {
    register,
    formState: { errors, isValid },
    control,
    handleSubmit,
  } = useForm<FormHelpData>({
    resolver: zodResolver(formHelpSchema),
    mode: "onChange",
  });

  const getButtonClass = () => {
    return isValid
      ? "w-full btnFormHover cursor-pointer focus:outline-none focus:ring-0"
      : "w-full btnForm cursor-pointer focus:outline-none focus:ring-0";
  };

  // Função para lidar com a submissão - opcional, pois já estamos usando action
  const onSubmit = (data: FormHelpData) => {
    console.log("Form data:", data);
  };

  return (
    <form
      action="https://formsubmit.co/feryamaha@hotmail.com"
      method="POST"
      className="w-full @mobile:w-[520px] h-max bg-white rounded-[16px] border p-[32px]"
      onSubmit={handleSubmit(onSubmit)}
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

      <div className="flex flex-col gap-[32px]">
        <div className="flex flex-col gap-[16px]">
          <div>
            <label className="TypographyPlato20">Sobre você:</label>
          </div>

          <FloatingLabelInput
            label="Nome completo"
            name="name"
            register={register}
            errors={errors}
            control={control}
            onlyLetters={true} // Permitir apenas letras
            validation={{
              required: "Nome completo é obrigatório",
              pattern: {
                value: /^[A-Za-zÀ-ÖØ-öø-ÿ\s]*$/,
                message: "Nome deve conter apenas letras",
              },
            }}
          />

          <FloatingLabelInput
            label="E-mail"
            name="email"
            type="email"
            register={register}
            errors={errors}
            control={control}
            validation={{
              required: "E-mail é obrigatório",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "E-mail inválido",
              },
            }}
          />

          <FloatingLabelInput
            label="Telefone"
            name="phone"
            type="tel"
            register={register}
            errors={errors}
            control={control}
            onlyNumbers={true} // Permitir apenas números
            validation={{
              required: "Telefone é obrigatório",
              pattern: {
                value: /^\d+$/,
                message: "Telefone deve conter apenas números",
              },
            }}
          />
        </div>

        <div className="flex flex-col gap-[16px]">
          <div>
            <label className="TypographyPlato20">Sua mensagem:</label>
          </div>

          <div className="relative">
            <textarea
              {...register("message", {
                required: "Mensagem é obrigatória",
              })}
              name="message"
              placeholder="Digite sua mensagem"
              className={`w-full h-[94px] border rounded-lg p-4 ${
                errors.message
                  ? "border-red-500 focus:outline-none focus:ring-2 focus:border-red-500"
                  : "border-secondary-100 ring-gray950  focus:outline-none focus:ring-1 focus:border-gray-950"
              } hover:border-gray-950`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <Button
            variant="btnForm"
            className={`${getButtonClass()} focus:outline-none focus:ring-0`}
            type="submit"
            disabled={!isValid}
          >
            <span className="w-full">Enviar mensagem</span>
          </Button>
        </div>
      </div>
    </form>
  );
};

export default FormHelp;
