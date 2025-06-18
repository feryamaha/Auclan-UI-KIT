import React from "react";

export function IntraMenu() {
  return (
    <>
      <div className="max-w-[455px] flex justify-between border mx-auto layoutIntraMenu">
        <a className="TypographyIntraMenu cursor-pointer hover:TypographyTabIntraMenu">
          {" "}
          Planos{" "}
        </a>
        <a className="TypographyIntraMenu cursor-pointer hover:TypographyTabIntraMenu">
          {" "}
          Cobertura{" "}
        </a>
        <a className="TypographyIntraMenu cursor-pointer hover:TypographyTabIntraMenu ">
          {" "}
          <span className="hidden @tablet:block">Detalhes do plano</span>{" "}
          <span className="block @tablet:hidden">Planos</span>{" "}
        </a>
        <a className="TypographyIntraMenu cursor-pointer hover:TypographyTabIntraMenu">
          {" "}
          FAQ{" "}
        </a>
      </div>
    </>
  );
}

export default IntraMenu;
