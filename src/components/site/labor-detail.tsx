import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { Eyebrow, WhatsAppLink, ContactBand } from "./shared";
import { OfficeImage } from "./media";
import { LaborFaq } from "./labor-faq";

const detailContent = {
  frigorificos: {
    kicker:"TRABALHADORES DE FRIGORÍFICOS",
    title:"Direitos trabalhistas em frigoríficos",
    description:"Exposição ao frio, pausas, jornadas e saúde ocupacional: questões que precisam ser avaliadas à luz da realidade de cada trabalhador.",
    intro:"O trabalho em frigoríficos pode envolver baixas temperaturas, atividades repetitivas e jornadas com exigências específicas. Os possíveis direitos variam conforme a função, as condições efetivas, os equipamentos e as normas aplicáveis.",
    topics:[["Exposição ao frio e insalubridade","A avaliação depende das condições ambientais, do trabalho executado e dos elementos técnicos e jurídicos pertinentes."],["Pausas e intervalos","As pausas térmicas e outros períodos de descanso dependem do enquadramento legal, do trabalho exercido e das condições apuradas."],["Horas extras e jornada","A documentação dos horários pode ajudar a verificar diferenças de jornada e pagamento."],["Saúde e doenças ocupacionais","A relação entre trabalho e adoecimento requer análise médica, documental e jurídica individualizada."]],
    media:"IMG_6455.webp"
  },
  rodovias: {
    kicker:"RODOVIAS E CONSTRUÇÃO PESADA",
    title:"Direitos no trabalho em rodovias e obras",
    description:"Questões de jornada, segurança e condições de trabalho em obras de infraestrutura e construção civil pesada.",
    intro:"Frentes de trabalho, deslocamentos, alojamentos, obras e manutenção rodoviária podem apresentar particularidades contratuais e de segurança. O enquadramento de direitos depende da atividade concreta e das normas aplicáveis.",
    topics:[["Jornada e intervalos","A avaliação considera horários, registros disponíveis, descansos e regras coletivas pertinentes."],["Adicionais legais","Insalubridade e periculosidade não são automáticas pelo setor: exigem avaliação das condições e dos riscos previstos em lei."],["Acidentes e proteção","As circunstâncias do trabalho, os documentos e os laudos disponíveis são relevantes para a análise."],["Rescisão e verbas","É possível examinar documentos contratuais e rescisórios para compreender os pagamentos efetuados."]],
    media:"IMG_6428.webp"
  },
  geral: {
    kicker:"DIREITO DO TRABALHO",
    title:"Orientação em demandas trabalhistas",
    description:"Acompanhamento de questões trabalhistas de profissionais de diferentes setores, com atendimento on-line nacional.",
    intro:"Questões relacionadas a salários, contratos, jornadas e desligamentos exigem análise do histórico profissional e dos documentos disponíveis. O escritório presta orientações individualizadas, sem prometer resultados.",
    topics:[["Verbas rescisórias","Os valores e prazos devem ser verificados conforme contrato, modalidade de desligamento e documentos."],["Rescisão indireta","Uma falta grave patronal pode fundamentar a discussão, mas é necessária análise jurídica antes de decisões sobre o vínculo."],["Vínculo de emprego","O reconhecimento depende de requisitos legais e provas das condições de prestação dos serviços."],["Horas extras e assédio","Jornadas, comunicação, registros e fatos concretos podem ser relevantes para a avaliação jurídica."]],
    media:"IMG_6424.webp"
  }
} as const;

export function LaborDetailPage({kind}:{kind:keyof typeof detailContent}){
 const d=detailContent[kind];
 return <main id="main-content">
  <section className="page-intro labor-detail-intro"><div className="container"><div className="breadcrumb"><Link to="/">Início</Link><span>/</span><Link to="/direito-do-trabalho">Direito do Trabalho</Link></div><Eyebrow light>{d.kicker}</Eyebrow><h1>{d.title}</h1><p>{d.description}</p></div></section>
  <section className="section"><div className="container about-grid"><div className="about-copy"><Eyebrow>INFORMAÇÃO TRABALHISTA</Eyebrow><h2>Análise individual, <em>orientação responsável.</em></h2><p>{d.intro}</p><WhatsAppLink>Solicitar informações</WhatsAppLink></div><OfficeImage file={d.media} label="Tharcis Leite em seu escritório" className="portrait-photo"/></div></section>
  <section className="section areas-section"><div className="container"><Eyebrow>PRINCIPAIS ASSUNTOS</Eyebrow><h2>Questões que merecem <em>atenção.</em></h2><div className="labor-detail-topics">{d.topics.map(([title,description])=><article key={title}><CheckCircle2 size={22}/><h3>{title}</h3><p>{description}</p></article>)}</div><p className="legal-note">Conteúdo informativo. Nenhum adicional, indenização ou outra consequência jurídica é garantida automaticamente; cada caso exige avaliação das circunstâncias e das provas.</p></div></section>
  <section className="section labor-faq-section"><div className="container"><LaborFaq/></div></section>
  <div className="container"><Link to="/direito-do-trabalho" className="text-link"><ArrowLeft size={18}/> Voltar à área de Direito do Trabalho</Link></div>
  <ContactBand/>
 </main>
}
