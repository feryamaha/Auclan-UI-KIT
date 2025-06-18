import React from "react";
import { Icon } from "@/scripts/Icon";
import coverageData from "./ListCoverage.json";
import { CoverageData } from "@/types/menuConfigMobile";

// Type assertion para garantir que o JSON corresponde ao tipo esperado
const typedCoverageData = coverageData as CoverageData;

export function CoveragePlans() {
  // Encontrar os itens de cobertura e não cobertura
  const coverageItem = typedCoverageData.coverage.find(
    (item) => item.id === "idCoverage"
  );
  const notCoverageItem = typedCoverageData.coverage.find(
    (item) => item.id === "idNotCoverage"
  );

  return (
    <>
      <div
        className="max-w-[1116px] @Desktop1440:max-w-[1216px] flex flex-col @tablet:flex-row @tablet:gap-[106px] items-start @tablet:items-center
             mx-auto bg-grayCoverage border rounded-[8px] px-[16px] @laptop:px-[40px] py-[32px] z-[-1]  "
      >
        {/* List Atos cobertos pelo plano */}
        <div>
          <div className="mb-[16px]">
            <h2 className="TypographyPlato24 semi-bold pb-[24px]">Cobertura</h2>
            <p className="TypographyPinter18w400">
              <span className="TypographyPinter18w500g">Atos cobertos</span>{" "}
              pelo plano.
            </p>
          </div>
          {coverageItem && (
            <div className="flex flex-col gap-[8px]">
              {coverageItem.includA?.map((item, index) => (
                <div
                  key={`coverageA-${index}`}
                  className="flex gap-[12px] items-center "
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludA}</p>
                </div>
              ))}
              {coverageItem.includB?.map((item, index) => (
                <div
                  key={`coverageB-${index}`}
                  className="flex gap-[12px] items-center "
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludB}</p>
                </div>
              ))}
              {coverageItem.includC?.map((item, index) => (
                <div
                  key={`coverageC-${index}`}
                  className="flex gap-[12px] items-center "
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludC}</p>
                </div>
              ))}
              {coverageItem.includD?.map((item, index) => (
                <div
                  key={`coverageD-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludD}</p>
                </div>
              ))}
              {coverageItem.includE?.map((item, index) => (
                <div
                  key={`coverageE-${index}`}
                  className="flex gap-[12px] items-center "
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludE}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* List Atos não cobertos pelo plano */}
        <div className="mt-[32px] @tablet:mt-0">
          <div className="mb-[16px]">
            <h2 className="TypographyPlato24 semi-bold pb-[24px]">
              Atos complementares
            </h2>
            <p className="TypographyPinter18w400">
              <span className="TypographyPinter18w500">Atos não cobertos </span>
              pelo plano.{" "}
            </p>
          </div>
          {notCoverageItem && (
            <div className=" flex flex-col gap-[8px]">
              {notCoverageItem.includA?.map((item, index) => (
                <div
                  key={`notCoverageA-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludA}</p>
                </div>
              ))}
              {notCoverageItem.includB?.map((item, index) => (
                <div
                  key={`notCoverageB-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludB}</p>
                </div>
              ))}
              {notCoverageItem.includC?.map((item, index) => (
                <div
                  key={`notCoverageC-${index}`}
                  className="flex gap-[12px] items-center "
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludC}</p>
                </div>
              ))}
              {notCoverageItem.includD?.map((item, index) => (
                <div
                  key={`notCoverageD-${index}`}
                  className="flex gap-[12px] items-center "
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludD}</p>
                </div>
              ))}
              {notCoverageItem.includE?.map((item, index) => (
                <div
                  key={`notCoverageE-${index}`}
                  className="flex gap-[12px] items-center"
                >
                  <Icon name={item.iconInclud} />
                  <p className="TypographyPinter16w400">{item.textIncludE}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CoveragePlans;
