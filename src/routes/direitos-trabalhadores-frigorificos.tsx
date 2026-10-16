import { createFileRoute } from "@tanstack/react-router";
import { LaborDetailPage } from "@/components/site/labor-detail";
import { pageHead } from "@/lib/site-seo";
export const Route = createFileRoute("/direitos-trabalhadores-frigorificos")({head:()=>pageHead("Direitos de trabalhadores de frigoríficos","Informações sobre trabalho em frigoríficos: exposição ao frio, pausas, insalubridade, horas extras e doenças ocupacionais.","/direitos-trabalhadores-frigorificos"),component:()=> <LaborDetailPage kind="frigorificos" />});
