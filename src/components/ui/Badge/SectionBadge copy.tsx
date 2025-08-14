// src/components/ui/Badge/Badge.tsx

import { Icon } from "@/scripts/Icon";

export function SectionBadge() {
  return (
    <div className="w-full h-[82.5vh] flex flex-col gap-32 items-start mt-16 ml-32 gap-2">
      <div>
        <h2>Badge padrão</h2>
        {/* Badge default */}
        <div className="flex items-center gap-8 p-8 outline-2 outline-dashed outline-violet-500 rounded-lg mt-4 ">
          {/* Badge white status default */}
          <div className="flex flex-col gap-4">
            <span className="BadgeDefault">Badge</span>
            <span className="BadgeDefaultOFF">Badge</span>
          </div>
          {/* Badge white status arrow */}
          <div className="flex flex-col gap-4">
            <span className="BadgeDefault">
              <Icon name="IconDoubleArrow" />
              Badge
            </span>
            <span className="BadgeDefaultOFF">
              <Icon name="IconDoubleArrowOFF" />
              Badge
            </span>
          </div>
          {/* Badge arrow */}
          <div className="flex flex-col gap-4">
            <span className="OnlyDoubleArrow">
              <Icon name="IconDoubleArrow" />
            </span>
            <span className="OnlyDoubleArrowOFF">
              <Icon name="IconDoubleArrowOFF" />
            </span>
          </div>
          {/* Badge Number */}
          <div className="flex flex-col gap-4">
            <span className="OnlyDoubleArrow TypInter12w400">2</span>
            <span className="OnlyDoubleArrowOFF TypInter12w400off">2</span>
          </div>
        </div>
      </div>
      <div>
        <h2>Badge status</h2>
        <div className="flex items-center gap-8 p-8 outline-2 outline-dashed outline-violet-500 rounded-lg mt-4 ">
          {/* Badge white status point */}
          <div className="flex flex-col gap-4">
            <span className="BadgeStatus border">
              <Icon name="IconPointSucess" />
              Badge
            </span>
            <span className="BadgeStatus border">
              <Icon name="IconPointInfo" />
              Badge
            </span>
            <span className="BadgeStatus border">
              <Icon name="IconPointWarning" />
              Badge
            </span>
            <span className="BadgeStatus border">
              <Icon name="IconPointDanger" />
              Badge
            </span>
          </div>
          {/* Badge fill status point */}
          <div className="flex flex-col gap-4">
            <span className="BadgeSucesssFill ">
              <Icon name="IconPointSucess" />
              Badge
            </span>
            <span className="BadgeInfoFill">
              <Icon name="IconPointInfo" />
              Badge
            </span>
            <span className="BadgeWarningFill">
              <Icon name="IconPointWarning" />
              Badge
            </span>
            <span className="BadgeDangerFill">
              <Icon name="IconPointDanger" />
              Badge
            </span>
          </div>
          {/*  Badge white status arrow */}
          <div className="flex flex-col gap-4">
            <span className="BadgeStatusArrow">
              <Icon name="IconDoubleArrowSucess" />
              Badge
            </span>
            <span className="BadgeStatusArrow">
              <Icon name="IconDoubleArrowInfo" />
              Badge
            </span>
            <span className="BadgeStatusArrow">
              <Icon name="IconDoubleArrowWarning" />
              Badge
            </span>
            <span className="BadgeStatusArrow">
              <Icon name="IconDoubleArrowDanger" />
              Badge
            </span>
          </div>
          {/*  Badge fill status arrow */}
          <div className="flex flex-col gap-4">
            <span className="BadgeArrowSucessFill">
              <Icon name="IconDoubleArrowSucess" />
              Badge
            </span>
            <span className="BadgeArrowINFOFill">
              <Icon name="IconDoubleArrowInfo" />
              Badge
            </span>
            <span className="BadgeArrowWarningFill">
              <Icon name="IconDoubleArrowWarning" />
              Badge
            </span>
            <span className="BadgeArrowDangerFill">
              <Icon name="IconDoubleArrowDanger" />
              Badge
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
