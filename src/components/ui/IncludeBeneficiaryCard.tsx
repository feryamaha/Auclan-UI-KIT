function IncludeBeneficiaryCard() {
  return (
    <>
      <div className="max-w-[411px] h-[235px] px-[24px] py-[16px] flex flex-col items-center justify-center bg-white rounded-[8px]  ">
        <p className="w-full TypographyPlato20 ">Beneficiários</p>
        <div className=" w-full h-full flex flex-col text-center items-center justify-center overflow-y-auto  ">
          <div className="w-[215px] h-max ">
            <p className="TypographyPinter16w500g950 pb-[8px]">
              Aguardando inclusão
            </p>
            <span className="TypographyPinter16w400 ">
              Os beneficiários incluídos aparecerão aqui.
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-[411px] h-[189px] px-[24px] py-[16px] flex flex-col items-center justify-center bg-white rounded-[8px]  ">
        <p className="w-full TypographyPlato20 ">Resumo</p>
        <div className=" w-full h-full flex flex-col text-center items-center justify-center overflow-y-auto  ">
          <div className="w-full h-max flex justify-between ">
            <p className="TypographyPinter16w400 ">Valor por pessoa</p>
            <span className="TypographyPinter16w500g950 pb-[8px]">
              R$ 25,40
            </span>
          </div>
          <div className="w-full h-max flex justify-between ">
            <p className="TypographyPinter16w400 ">Dependentes</p>
            <span className="TypographyPinter16w500g950 pb-[8px]">0</span>
          </div>
          <div className="w-full h-max flex justify-between ">
            <p className="TypographyPinter16w400 ">Total de beneficiários</p>
            <span className="TypographyPinter16w500g950 pb-[8px]">1</span>
          </div>
          <div className="w-full h-max flex justify-between ">
            <p className="TypographyPinter16w400 ">Valor total</p>
            <span className="TypographyPinter16w500g950 pb-[8px]">
              R$ 25,40
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default IncludeBeneficiaryCard;
