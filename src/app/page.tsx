import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-lg text-gray-500">
        Selecione um componente do menu ao lado para visualizar.
      </p>

      <Image src="/assets/img/logo.png" alt="Logo" width={200} height={150} />
    </div>
  );
}
