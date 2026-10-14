import { createFileRoute } from "@tanstack/react-router";
import { AreaPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/direito-do-trabalho")({
  head: () =>
    pageHead(
      "Direito do Trabalho",
      "Orientação sobre relações de emprego, verbas rescisórias, jornada e saúde ocupacional. Advocacia em Estrela do Norte/SP.",
      "/direito-do-trabalho",
    ),
  component: () => <AreaPage index={0} />,
});
