import { Button } from "@/components/ui/Button";
import { Icon } from "@/scripts/Icon";
import Link from "next/link";

// Interface de props (adicionada onOpenModal)
interface CardSPlansMobileProps {
  id: string;
  name: string;
  price: string;
  description: string;
  procedures: string;
  onOpenModal: () => void;
}

// Componente Card Mobile - versão com borda e sem vetor falso
export function CardSPlansMobile({
  id,
  name,
  price,
  description,
  procedures,
  onOpenModal,
}: CardSPlansMobileProps) {
  return (
    // Div externa com borda - replicando dimensões e flex-shrink do CardSectionPlans, adicionando borda
    <div className="min-w-[328px] @mobile:max-w-[256px] max-h-[433px] flex items-center justify-center -flex-shrink-0 border rounded-[8px]">
      {" "}
      {/* Replicando w, h, flex, items, justify, flex-shrink, adicionando border */}
      {/* Div interna - replicando as dimensões, padding e flex properties do CardSectionPlans */}
      <div className="w-full @mobile:max-w-[328px] px-[32px] py-[24px] @mobile:p-[24px] flex flex-col justify-between items-start ">
        {" "}
        {/* Replicando w, h, p, flex, flex-col, justify-between */}
        <div className="pb-[40px]">
          <p className="TypographyPlato24">{name}</p>
          <h1 className="pt-[48px] pb-[8px] TypographyH1">R$ {price}</h1>
          <p className="w-[162px] TypographyPinter14w400 ">{description}</p>
        </div>
        <Link href="/page/contractPlans" className="w-full">
          <Button
            variant="btnSecondary"
            className="hover:bg-red700 w-full mb-[32px] hidden"
          >
            Contratar agora
          </Button>
        </Link>
        <div className="w-full h-[90px] relative">
          {" "}
          {/* Manter altura e relative para layout interno */}
          <div className="max-w-full h-max absolute top-0 ">
            <Icon name="IconBGCardPlansMobile" />
          </div>
          {/* Manter icon de fundo, se aplicável */}
          <div className="absolute bottom-0">
            {" "}
            {/* Manter posicionamento para texto/botão Ver Procedimentos */}
            <p className=" pb-[8px] TypographyPinter16g950">{procedures}</p>
            <Button
              className="w-full TypographyPinter16w500r"
              variant="btnLink"
              onClick={onOpenModal}
            >
              Ver procedimentos
            </Button>
          </div>
        </div>
      </div>
      {/* Removida a div com IconVetorCardPlans */}
    </div>
  );
}
