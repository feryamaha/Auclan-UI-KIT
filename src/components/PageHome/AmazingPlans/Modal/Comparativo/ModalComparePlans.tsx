import React, { useEffect } from "react";
import comparePlansData from "./ComparePlansData.json";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  price: string;
  procedures: string;
  comparisons: { [key: string]: string };
}

interface ModalComparePlansProps {
  onClose: () => void;
}

const ModalComparePlans: React.FC<ModalComparePlansProps> = ({ onClose }) => {
  const procedures = Object.keys(comparePlansData.plans[0].comparisons); // Obtém as chaves das comparações

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

  return (
    <div className="fixed inset-0 bg-gray950 bg-opacity-70 flex items-center justify-center z-[9999]">
      <div className="w-full max-w-[95vw] max-h-[95vh] bg-white rounded-[16px] flex flex-col">
        {/* Cabeçalho fixo */}
        <div className="flex justify-between items-center py-[16px] px-[32px] ">
          <h2 className="TypographyMenuMobile">
            Comparativo planos Dental Uni
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            X
          </button>
        </div>

        {/* Seção cards */}
        <div className="w-full h-max mb-4 flex flex-row justify-end shadow-md border-t px-[32px] ">
          {comparePlansData.plans.map((plan: Plan) => (
            <div
              key={plan.id}
              className="w-max h-[188px] p-[16px] flex flex-col justify-between relative "
            >
              <div className="flex flex-col gap-[8px]">
                <h3 className="TypographyMenuMobile">{plan.name}</h3>
                <p className="TypographyPinter14w400">{plan.procedures}</p>
                <p className="TypographyPlato24">R$ {plan.price}</p>
              </div>
              <div>
                <Link href="/page/contractPlans">
                  <Button variant="btnPrimary" className="hover:bg-red700">
                    Contratar agora
                  </Button>
                </Link>
              </div>
              <div className="absolute pr-[16px] left-0">
                <Icon name="IconVetorCardScrolldown" />
              </div>
            </div>
          ))}
        </div>

        {/* Seção de comparações como tabela com coluna esquerda */}
        <div className="overflow-y-auto scrollbar-hidden max-h-[100vh] px-[32px]">
          <table className="w-full table-auto border-collapse">
            <tbody className="w-full">
              {procedures.map((procedure) => (
                <tr key={procedure} className="border-b ">
                  {/* Coluna esquerda com o nome do procedimento */}
                  <div className=" flex items-center gap-[8px] py-[17px] ">
                    <div className="w-[160px] ">
                      <td className="TypographyPinter16w400">{procedure}</td>
                    </div>
                    <div className="p-[1px] rounded-full bg-red25">
                      <Icon name="IconInfo" />
                    </div>
                  </div>
                  {/* tabela de comparacao sim / nao */}
                  {comparePlansData.plans.map((plan: Plan) => (
                    <td
                      key={`${plan.id}-${procedure}`}
                      className="text-center p-2 w-[188px]"
                    >
                      {plan.comparisons[procedure] === "Sim" ? (
                        <span className="TypographyPinter16green">
                          {plan.comparisons[procedure]}
                        </span> // Estilo para "Sim"
                      ) : (
                        <span className="TypographyPinter16w400 opacity-50">
                          {plan.comparisons[procedure]}
                        </span> // Estilo para "Não"
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ModalComparePlans;
