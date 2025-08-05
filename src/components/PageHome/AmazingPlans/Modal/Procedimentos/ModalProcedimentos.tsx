"use client";
import React, { useState, useEffect } from "react";
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

// Propriedades do modal: função para fechar e ID do plano
interface ModalProcedimentosProps {
  onClose: () => void;
  planId?: string; // ID do plano selecionado, opcional para compatibilidade
}

export default function ModalProcedimentos({
  onClose,
  planId = "", // Valor padrão vazio
}: ModalProcedimentosProps) {
  // Filtro selecionado: Todos, Sim ou Não
  const [filter, setFilter] = useState("Todos");
  // Controla se o dropdown do filtro está aberto
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  // Aba ativa: Procedimentos ou Atos
  const [activeTab, setActiveTab] = useState("Procedimentos");

  // Função para formatar valores monetários no padrão brasileiro
  const formatCurrency = (value: string): string => {
    // Converte string para número, tratando valores com ponto ou vírgula
    const numericValue = parseFloat(value.replace(",", "."));

    return new Intl.NumberFormat("pt-BR", {
      style: "decimal",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(numericValue);
  };

  // Efeito para desabilitar o scroll do body quando o modal estiver aberto
  useEffect(() => {
    // Salvar a posição de scroll atual
    const scrollY = window.scrollY;

    // Salvar os estilos originais
    const originalStyle = {
      overflow: document.body.style.overflow,
      position: document.body.style.position,
      top: document.body.style.top,
      width: document.body.style.width,
    };

    // Aplicar estilos para prevenir scroll
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";

    // Função de limpeza ao fechar o modal
    return () => {
      // Restaurar estilos originais
      document.body.style.overflow = originalStyle.overflow;
      document.body.style.position = originalStyle.position;
      document.body.style.top = originalStyle.top;
      document.body.style.width = originalStyle.width;

      // Rolar a página de volta para a posição original
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Efeito para verificar o carregamento das imagens
  useEffect(() => {
    const imgMobile = new window.Image();
    imgMobile.src = "/assets/img/BgCardModalComparePlansMobile.webp";
    imgMobile.onload = () => console.log("Imagem mobile carregada com sucesso");
    imgMobile.onerror = () => console.error("Erro ao carregar imagem mobile");

    const imgDesktop = new window.Image();
    imgDesktop.src = "/assets/img/BgCardModalComparePlan.webp";
    imgDesktop.onload = () =>
      console.log("Imagem desktop carregada com sucesso");
    imgDesktop.onerror = () => console.error("Erro ao carregar imagem desktop");
  }, []);

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
    <>
      {/* Modal centralizado com fundo escuro */}
      <div className="w-auto fixed inset-0 bg-gray950 bg-opacity-95 flex items-center justify-center z-[9999]">
        {/* header */}
        <div className="w-[98%] @tablet:w-[764px] h-[98%] @mobile:h-max bg-white rounded-[16px] flex flex-col items-center justify-between text-center relative">
          <div className="w-full flex justify-between items-center py-[16px] px-[16px] @mobile:px-[32px] border-b ">
            <h2 className="TypographyMenuMobile">Cobertura plano</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              X
            </button>
          </div>
          {/* Informações do plano e navegação entre abas */}
          <div className="w-full h-full flex flex-col justify-center px-[16px] pt-[16px] @mobile:px-[32px] @mobile:pt-[32px] overflow-hidden">
            <div className="w-full flex flex-col items-center mb-[8px]">
              {/* Nome e preço do plano */}
              <div
                className="w-full h-max flex flex-col @mobile:flex-row justify-between items-start @mobile:items-center pb-[16px] @mobile:pb-[60px] px-[16px] @mobile:px-[24px] py-[16px] mb-[24px] @mobile:mb-0 
                bg-BgCardModalComparePlansMobile @mobile:bg-BgCardModalComparePlans bg-cover @mobile:bg-cover bg-no-repeat border @mobile:border-none rounded-[8px]"
              >
                <div className="h-max flex flex-col items-start">
                  <p className="TypographyPinter16w500g900">
                    {currentData.plan.name}
                  </p>

                  <div className="w-max flex flex-col @mobile:flex-row items-start @mobile:items-end gap-[8px] pb-[24px] ">
                    <p className="TypographyH1">
                      R$ {formatCurrency(currentData.plan.price)}
                    </p>
                    <p className="TypographyPinter14w400">
                      {currentData.plan.priceUnit}
                    </p>
                  </div>
                </div>

                <div className="w-full @mobile:w-auto">
                  <Link href="/page/contractPlans" className="w-full">
                    <Button
                      variant="btnPrimary"
                      className="hover:bg-red700 w-full"
                    >
                      Contratar agora
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Abas para alternar entre Procedimentos e Atos */}
              <div className="w-full flex flex-col">
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
                {/* Mostra quantos itens têm cobertura */}
                <div className="w-full flex flex-col @mobile:flex-row items-start @mobile:items-center justify-between gap-[12px] @mobile:gap-[24px] mt-[16px] mb-[12px]">
                  <p className="TypographyPinter16w400">
                    {coveredProceduresCount} {activeTab.toLowerCase()} cobertos
                  </p>
                  {/* Dropdown para filtrar por cobertura */}
                  <div className="relative w-full @mobile:w-auto">
                    <button
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full @mobile:w-max flex items-center gap-[8px] justify-between py-[8px] px-[16px] border rounded-[8px] TypographyPinter16w400"
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
            <div className="w-full h-[300px] overflow-y-auto scrollbar-hidden pt-[12px] pb-[80px]">
              {filteredProcedures.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center px-[12px] py-[8px] border-b"
                >
                  <div className="w-full mr-[12px] flex flex-col items-start">
                    <p className="TypographyPinter16g950 text-left">
                      {item.name}
                    </p>
                    <p className="TypographyPinter14w400">{item.code}</p>
                  </div>
                  <div
                    className={item.coverage === "Sim" ? "btnYes" : "btnNot"}
                  >
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
              <div className="absolute bottom-0 left-0">
                <Icon name="IconOverlayMOdal" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
