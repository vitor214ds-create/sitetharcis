import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Advogado Trabalhista Online no Brasil",
      "Advocacia trabalhista com atendimento on-line em todo o Brasil. Atuação em horas extras, insalubridade, acidentes e doenças ocupacionais. OAB/SP 348.515.",
      "/",
    ),
  component: HomePage,
});
