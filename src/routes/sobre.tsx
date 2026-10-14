import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/sobre")({
  head: () =>
    pageHead(
      "O advogado — trajetória e formação",
      "Conheça Tharcis José Leite da Silva, graduado pelo Centro Universitário Toledo em 2013 e advogado desde 2014.",
      "/sobre",
    ),
  component: AboutPage,
});
