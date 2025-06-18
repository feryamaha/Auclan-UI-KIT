// Arquivo: src/app/page.tsx
// Propósito: Define a página inicial da aplicação com o banner principal.

import BannerHome from '@/components/PageHome/BannerHome/BannerHome';
import { SmileCare } from '@/components/PageHome/SmileCare';
import { SectionPlans } from '@/components/PageHome/AmazingPlans/SectionPlans';
import SectionBeneficiary from '@/components/PageHome/Baneficiary/SectionBeneficiary';
import { SectionDiscover } from '@/components/PageHome/Discover/SectionDiscover';
import { SectionQuestions } from '@/components/PageHome/Questions/SectionQuestions';

export default function Home() {
  return (
    <main className="min-h-screen">
      <BannerHome />
      <SmileCare />
      <SectionPlans />
      <SectionBeneficiary />
      <SectionDiscover />
      <SectionQuestions />
    </main>
  );
}