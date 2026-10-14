import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/direito-do-consumidor")({
  head: () =>
    pageHead(
      "Direito do Consumidor",
      "Orientação em cobranças indevidas, contratos, produtos e serviços. Atendimento individualizado em Estrela do Norte/SP.",
      "/direito-do-consumidor",
    ),
  component: () => <AreaPage index={3} />,
});
