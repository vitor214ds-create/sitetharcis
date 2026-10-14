import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/direito-civil")({
  head: () =>
    pageHead(
      "Direito Civil",
      "Orientação em contratos, obrigações, responsabilidade civil e conflitos patrimoniais em Estrela do Norte/SP.",
      "/direito-civil",
    ),
  component: () => <AreaPage index={2} />,
});
