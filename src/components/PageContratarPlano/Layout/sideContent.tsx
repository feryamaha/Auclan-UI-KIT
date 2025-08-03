"use client";

import { useSearchParams } from "next/navigation";
import PlanDetailsCard from "@/components/ui/PlanDetailsCard";
import IncludeItemsPlans from "@/components/ui/IncludeItemsPlans";
import IncludeBeneficiaryCard from "@/components/ui/IncludeBeneficiaryCard";

export default function SideContent() {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "0";

  return (
    <div className="space-y-6">
      <PlanDetailsCard />
      {step === "0" ? <IncludeItemsPlans /> : <IncludeBeneficiaryCard />}
    </div>
  );
}
