import React from "react";
import { Container } from "@/components/ui/Container";

export function BannerHomeOurPlans() {
  return (
    <>
      <section
        className="w-full h-max flex items-center @laptop:h-[428px] bg-BgBannerHomeOurPlansMobile @mobile:bg-BgBannerHomeOurPlansTablet bg-cover @laptop:bg-BgBannerHomeOurPlans
       bg-[100%] @laptop:bg-contain bg-no-repeat mt-[120px] pt-[264px] pb-[280px] "
      >
        <Container className="flex content-center">
          <div className="max-w-[374px] h-[348px] flex flex-col mx-auto justify-between ">
            <div className="max-w-[374px] mx-auto flex flex-col items-center gap-[12px]">
              <h2 className="TypographyPlato24 text-center  ">
                Garanta agora os benefícios Dental Uni aos seus entes queridos!
              </h2>
              <p className="TypographyPinter16w400">Inclua como dependente</p>
            </div>

            <div className="flex justify-between">
              <div className="w-[150px] text-center">
                <p className="TypographyPinter14w500g95">Período</p>
                <h2 className="TypographyPlato24 pt-[4px] pb-[8px]">
                  12 meses
                </h2>
                <p className="TypographyPinter16w400">
                  A partir da inscrição dos beneficiários
                </p>
              </div>
              <div className="w-[150px] text-center">
                <p className="TypographyPinter14w500g95">Imediato</p>
                <h2 className="TypographyPlato24 pt-[4px] pb-[8px]">
                  12 meses
                </h2>
                <p className="TypographyPinter16w400">
                  Ao ser desligado da empresa
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default BannerHomeOurPlans;
