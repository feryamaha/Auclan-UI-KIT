"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";
import IncludeBeneficiaryCard from "@/components/ui/IncludeBeneficiaryCard";

function SideContentInner() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "0";

  return (
    <div className="space-y-6">
      <PlanDetailsCard />
      {step === "0" ? <IncludeItemsPlans /> : <IncludeBeneficiaryCard />}
    </div>
  );
}

export default function SideContent() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SideContentInner />
    </Suspense>
  );
}
