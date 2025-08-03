import HomePlans from "@/components/PageOurPlans/BannerHome/HomePlans";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" min-h-screen  ">
      {/* IMG background deve ficar posicionada no topo da pagina colada no header */}
      <Image
        src="/assets/icons/bg-HomePlans.svg"
        alt="background"
        width={3000}
        height={780}
        className="object-cover z-[-1] absolute top-0 right-0 mx-auto"
      />
      <HomePlans />
    </main>
  );
}

//src/app/page/plans/page.tsx 
