import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/pages";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/contato")({
  head: () =>
    pageHead(
      "Contato com o escritório",
      "Fale com Tharcis Leite por WhatsApp ou e-mail. Rua José Passador, 565, Vila Estrela, Estrela do Norte/SP.",
      "/contato",
    ),
  component: ContactPage,
});
