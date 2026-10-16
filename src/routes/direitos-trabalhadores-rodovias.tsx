import { createFileRoute } from "@tanstack/react-router";
import { LaborDetailPage } from "@/components/site/labor-detail";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/direitos-trabalhadores-rodovias")({head:()=>pageHead("Direitos em rodovias e construção pesada","Orientação trabalhista sobre construção pesada e rodovias: jornada, intervalos, segurança, acidentes e adicionais.","/direitos-trabalhadores-rodovias"),component:()=> <LaborDetailPage kind="rodovias" />});
