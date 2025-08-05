// src/data/mockContracPlans/matriculas.d.ts
declare module "@/data/mockContracPlans/matriculas.json" {
  interface Matricula {
    numero: string;
    nome: string;
  }
  const value: { matriculas: Matricula[] };
  export default value;
}
