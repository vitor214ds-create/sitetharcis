import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { Eyebrow } from "./shared";

export const laborQuestions = [
  {
    question: "Quem trabalha em frigorífico tem direito à insalubridade?",
    answer: "A exposição ao frio e a outros agentes pode justificar avaliação de insalubridade, mas o adicional não é automático. As condições efetivas, equipamentos de proteção, provas e regras aplicáveis precisam ser examinados.",
    link: "/direitos-trabalhadores-frigorificos",
  },
  {
    question: "O que fazer quando a empresa não paga horas extras?",
    answer: "Registre os horários de forma lícita e preserve documentos disponíveis, como contracheques e controles de jornada. A existência de valores devidos dependerá da análise do trabalho realizado, dos registros e das normas aplicáveis.",
    link: "/demandas-trabalhistas",
  },
  {
    question: "Quem trabalha em rodovias tem direito à periculosidade?",
    answer: "Trabalhar em rodovias não assegura, por si só, adicional de periculosidade. É necessário avaliar atividades, exposição a riscos previstos em lei e as provas pertinentes.",
    link: "/direitos-trabalhadores-rodovias",
  },
  {
    question: "Quando uma doença pode ser considerada ocupacional?",
    answer: "É necessário avaliar a relação entre as atividades e a doença, inclusive eventual agravamento pelo trabalho, com atenção à documentação médica e aos elementos técnicos do caso.",
    link: "/direitos-trabalhadores-frigorificos",
  },
  {
    question: "Quais são os requisitos para pedir rescisão indireta?",
    answer: "A rescisão indireta depende de falta grave praticada pelo empregador, entre outros requisitos legais e probatórios. Antes de tomar uma decisão sobre o vínculo, procure orientação individualizada.",
    link: "/demandas-trabalhistas",
  },
] as const;

export function LaborFaq() {
  return <div className="faq-layout">
    <div><Eyebrow>DÚVIDAS DOS TRABALHADORES</Eyebrow><h2>Informação clara para <em>decisões conscientes.</em></h2><p className="body-copy">As respostas abaixo são gerais. Cada direito depende da sua situação e da legislação aplicável.</p><Link to="/conteudos" className="text-link">Outros conteúdos jurídicos <ArrowRight size={17}/></Link></div>
    <Accordion type="single" collapsible className="faq-list">
      {laborQuestions.map((item,i)=><AccordionItem key={item.question} value={`labor-${i}`}><AccordionTrigger className="faq-question">{item.question}</AccordionTrigger><AccordionContent className="faq-answer"><p>{item.answer}</p><Link to={item.link} className="text-link">Saiba mais <ArrowRight size={16}/></Link></AccordionContent></AccordionItem>)}
    </Accordion>
  </div>;
}
