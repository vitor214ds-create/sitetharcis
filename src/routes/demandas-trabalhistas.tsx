import { createFileRoute } from "@tanstack/react-router";
import { LaborDetailPage } from "@/components/site/labor-detail";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/demandas-trabalhistas")({head:()=>pageHead("Demandas trabalhistas em geral","Informações sobre verbas rescisórias, horas extras, vínculo de emprego, assédio e rescisão indireta.","/demandas-trabalhistas"),component:()=> <LaborDetailPage kind="geral" />});
