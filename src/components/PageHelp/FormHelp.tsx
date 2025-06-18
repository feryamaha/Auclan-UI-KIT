import React from "react";

// Utiliza React.FC para definir um componente funcional que aceita props e possui tipagem adequada com TypeScript
const FormHelp: React.FC = () => {
  return (
    <div className="w-full @tablet:max-w-[520px] h-[585px] bg-white rounded-[16px] border p-[32px] ">
      <h2 className="TypographyPlato24 mb-[24px]">Preencha o formulário</h2>
      <div className="space-y-5">
        <div>
          <label className="TypographyPlato20">Sobre você:</label>
        </div>
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full py-[12px] px-[16px] border rounded TypographyPinter16w500g"
        />
        <input
          type="email"
          placeholder="E-mail"
          className="w-full py-[12px] px-[16px] border rounded TypographyPinter16w500g"
        />
        <input
          type="tel"
          placeholder="Telefone"
          className="w-full py-[12px] px-[16px] border rounded TypographyPinter16w500g"
        />
        <div>
          <label className="TypographyPlato20">Sua mensagem:</label>
        </div>
        <textarea
          placeholder="Digite sua mensagem"
          className="w-full py-[4px] px-[16px] border rounded h-[86px] TypographyPinter16w500g"
        />
        <button className="w-full bg-gray300 TypographyPinter16w600g px-[24px] py-[12px] rounded-[4px]">
          Enviar mensagem
        </button>
      </div>
    </div>
  );
};

export default FormHelp;
