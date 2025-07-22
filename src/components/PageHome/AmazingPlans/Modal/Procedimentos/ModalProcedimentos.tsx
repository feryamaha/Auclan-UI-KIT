import React, { useState } from "react";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import proceduresData from "./data/procedures.json";
import actsData from "./data/acts.json";

// Estrutura de um procedimento ou ato
interface ProcedureItem {
  name: string;
  code: string;
  coverage: string;
}

// Estrutura dos dados do plano, podendo ter procedimentos ou atos
interface PlanData {
  plan: {
    name: string;
    price: string;
    priceUnit: string;
  };
  procedures?: ProcedureItem[];
  acts?: ProcedureItem[];
}

// Propriedades do modal: função para fechar
interface ModalProcedimentosProps {
  onClose: () => void;
}

export default function ModalProcedimentos({
  onClose,
}: ModalProcedimentosProps) {
  // Filtro selecionado: Todos, Sim ou Não
  const [filter, setFilter] = useState("Todos");
  // Controla se o dropdown do filtro está aberto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Aba ativa: Procedimentos ou Atos
  const [activeTab, setActiveTab] = useState("Procedimentos");

  // Troca o filtro e fecha o dropdown
  const handleFilterChange = (value: string) => {
    setFilter(value);
    setIsDropdownOpen(false);
  };

  // Seleciona os dados conforme a aba ativa
  const currentData = activeTab === "Procedimentos" ? proceduresData : actsData;
  // Pega os itens da aba ativa
  const currentItems =
    activeTab === "Procedimentos"
      ? (currentData as { procedures: ProcedureItem[] }).procedures
      : (currentData as { acts: ProcedureItem[] }).acts;
  // Filtra os itens conforme o filtro selecionado
  const filteredProcedures =
    currentItems?.filter((item) => {
      if (filter === "Todos") return true;
      return item.coverage === filter;
    }) || [];

  // Conta quantos itens têm cobertura "Sim"
  const coveredProceduresCount =
    currentItems?.filter((item) => item.coverage === "Sim").length || 0;

  return (
    <div className="fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-[9999]">
      {/* Modal centralizado com fundo escuro */}
      <div className="w-max h-[90%] bg-white rounded-[16px] flex flex-col items-center justify-between text-center relative border">
        {/* Cabeçalho com título e botão de fechar */}
        <div className="w-full flex justify-between items-center py-[16px] px-[32px] border-b ">
          <h2 className="TypographyMenuMobile">Cobertura plano</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>
        <div className="w-max h-full flex flex-col justify-center p-[32px]">
          {/* Informações do plano e navegação entre abas */}
          <div className="w-max flex flex-col items-center mb-[8px]">
            <div className="w-[700px] h-max pb-[60px] flex justify-between items-center px-[24px] py-[16px] bg-BgCardModalComparePlans bg-cover bg-no-repeat ">
              {/* Nome e preço do plano */}
              <div className="flex flex-col items-start ">
                <p className="TypographyPinter16w500g900">
                  {currentData.plan.name}
                </p>
                <div className="w-max flex items-end gap-[8px] ">
                  <p className="TypographyH1">{currentData.plan.price}</p>
                  <p className="TypographyPinter14w400">
                    {currentData.plan.priceUnit}
                  </p>
                </div>
              </div>
              <div>
                <Link href="/page/contractPlans">
                  <Button variant="btnPrimary" className="hover:bg-red700">
                    Contratar agora
                  </Button>
                </Link>
              </div>
            </div>
            <div className="w-full flex flex-col">
              {/* Abas para alternar entre Procedimentos e Atos */}
              <div className="w-full border-b flex gap-[24px] ">
                <button
                  className={`pb-[8px] border-b-2 ${
                    activeTab === "Procedimentos"
                      ? "border-redSTD TypographyPinter16w500g900"
                      : "border-transparent hover:TypographyPinter16w500g900 text-gray500"
                  }`}
                  onClick={() => setActiveTab("Procedimentos")}
                >
                  Procedimentos
                </button>
                <button
                  className={`pb-[8px] border-b-2 ${
                    activeTab === "Atos"
                      ? "border-redSTD TypographyPinter16w500g900"
                      : "border-transparent hover:TypographyPinter16w500g900 text-gray500"
                  }`}
                  onClick={() => setActiveTab("Atos")}
                >
                  Atos
                </button>
              </div>
              <div className="w-full flex items-center justify-between gap-[24px] mt-[16px] mt-[16px] mb-[12px]">
                {/* Mostra quantos itens têm cobertura */}
                <p className="TypographyPinter16w400">
                  {coveredProceduresCount} {activeTab.toLowerCase()} cobertos
                </p>
                {/* Dropdown para filtrar por cobertura */}
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="w-max flex items-center gap-[8px] py-[8px] px-[16px] border rounded-[8px] TypographyPinter16w400"
                  >
                    Cobertura
                    <Icon
                      name="IconArrowdown"
                      className={isDropdownOpen ? "rotate-180" : ""}
                    />
                  </button>
                  {isDropdownOpen && (
                    <ul className="absolute right-0 mt-[8px] w-[150px] bg-white border rounded-[8px] shadow-lg z-10">
                      {/* Opções do filtro */}
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFilterChange("Todos");
                          }}
                          className="block text-left py-[8px] px-[16px] hover:bg-gray-50"
                        >
                          Todos
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFilterChange("Sim");
                          }}
                          className="block text-left py-[8px] px-[16px] hover:bg-gray-50"
                        >
                          Sim
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            handleFilterChange("Não");
                          }}
                          className="block text-left py-[8px] px-[16px] hover:bg-gray-50"
                        >
                          Não
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
              <div className="w-full flex justify-between p-[12px] bg-gray50 rounded-[8px]">
                <p>Descrição</p>
                <p>Cobertura</p>
              </div>
            </div>
          </div>
          {/* Lista dos itens filtrados, com rolagem */}
          <div className="w-full h-[300px] overflow-y-auto scrollbar-hidden">
            {filteredProcedures.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center px-[12px] py-[8px]"
              >
                <div className="flex flex-col items-start ">
                  <p className="TypographyPinter16g950">{item.name}</p>
                  <p className="TypographyPinter14w400">{item.code}</p>
                </div>
                <div className={item.coverage === "Sim" ? "btnYes" : "btnNot"}>
                  {item.coverage === "Sim" ? (
                    <>
                      <Icon name="IconIncludPlans" />
                      <p className="">Sim</p>
                    </>
                  ) : (
                    <>
                      <Icon name="IconNotCoverage" />
                      <p className="">Não</p>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
