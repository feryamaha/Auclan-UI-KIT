"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Icon } from "@/scripts/Icon";

type LayoutProps = {
  children: ReactNode;
  sideContent: ReactNode;
};

export default function ContractPlansLayout({
  children,
  sideContent,
}: LayoutProps) {
  const pathname = usePathname();

  const hiddenRoutes = ["/contratar-planos"];
  const shouldHideLayout = hiddenRoutes.some((route) =>
    pathname.startsWith(route)
  );

  const handleClose = () => {
    window.location.href = "/";
  };

  return (
    <>
      <div className="w-full h-screen fixed inset-0 flex flex-col items-center justify-center bg-white bg-opacity-50 z-50">
        {!shouldHideLayout && (
          <div className="fixed top-0 w-full h-[80px] py-[16px] px-[32px] flex items-center justify-between bg-transparen z-50">
            <a href="/" className="w-[154px] h-[24px]">
              <Icon name="IconLogoinstitucional" className="w-full h-full" />
            </a>
            <button
              className="w-[48px] p-[12px] bg-white border border-gray100 rounded-full flex justify-center"
              onClick={handleClose}
            >
              <Icon name="IconClose" />
            </button>
          </div>
        )}
        <div className="w-full h-full">
          <div className="w-[68%] h-full bg-white absolute top-0 left-0">
            <div className="w-full mx-auto px-[32px] pt-[112px] flex justify-center">
              {children}
            </div>
          </div>
          <div className="w-[32%] h-full px-[32px] pt-[112px] bg-gray50 overflow-y-auto absolute top-0 right-0 ">
            {sideContent}
          </div>
        </div>
      </div>
    </>
  );
}
