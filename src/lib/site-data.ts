export const office = {
  name: "Tharcis José Leite da Silva",
  shortName: "Tharcis Leite",
  registrations: ["OAB/SP 348.515", "OAB/PR 83.513"],
  whatsapp: "https://wa.me/5518991938287",
  phone: "(18) 99193-8287",
  email: "tharcisleite@adv.oabsp.org.br",
  instagram: "https://www.instagram.com/tharcisleiteadvocacia/",
  address: "Rua José Passador, 565 · Vila Estrela",
  city: "Estrela do Norte/SP · CEP 19230-000",
};
export const areas = [
  {
    slug: "/direito-do-trabalho",
    number: "01",
    title: "Direito do Trabalho",
    label: "Trabalho",
    description:
      "Atenção aos direitos de quem trabalha. Orientação nas relações de emprego, do início ao encerramento do vínculo.",
    topics: [
      "Verbas rescisórias e revisão de pagamentos",
      "Jornada, horas extras e intervalos",
      "Insalubridade e periculosidade",
      "Acidentes de trabalho e doenças ocupacionais",
      "Reconhecimento de vínculo e direitos contratuais",
      "Assédio e dignidade no ambiente de trabalho",
    ],
  },
  {
    slug: "/direito-previdenciario",
    number: "02",
    title: "Direito Previdenciário",
    label: "Previdenciário",
    description:
      "Segurança para cada etapa da vida. Análise cuidadosa do histórico de contribuições e dos direitos previdenciários.",
    topics: [
      "Planejamento previdenciário",
      "Aposentadorias e análise do tempo de contribuição",
      "Benefícios por incapacidade",
      "Pensão por morte e direitos de dependentes",
      "Benefício de Prestação Continuada (BPC)",
      "Pedidos, recursos administrativos e revisões",
    ],
  },
  {
    slug: "/direito-civil",
    number: "03",
    title: "Direito Civil",
    label: "Civil",
    description:
      "Clareza para decisões do cotidiano. Atuação em conflitos, contratos e responsabilidades da vida civil.",
    topics: [
      "Elaboração e análise de contratos",
      "Responsabilidade civil e reparação de danos",
      "Cobranças e obrigações",
      "Conflitos patrimoniais",
      "Negociação e soluções extrajudiciais",
      "Orientação preventiva em relações civis",
    ],
  },
  {
    slug: "/direito-do-consumidor",
    number: "04",
    title: "Direito do Consumidor",
    label: "Consumidor",
    description:
      "Equilíbrio nas relações de consumo. Orientação diante de cobranças, contratos e falhas na prestação de serviços.",
    topics: [
      "Cobranças indevidas",
      "Negativação e proteção ao crédito",
      "Defeitos em produtos e falhas em serviços",
      "Contratos bancários e relações de consumo",
      "Compras e contratações digitais",
      "Práticas abusivas e informação ao consumidor",
    ],
  },
] as const;
export const faqs = [
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "O primeiro contato pode ser feito pelo WhatsApp ou por e-mail. A partir do seu relato, são identificados os documentos e as informações necessários para uma análise individualizada. As condições do atendimento e os honorários são esclarecidos diretamente.",
  },
  {
    question: "Quais documentos devo separar?",
    answer:
      "Em geral, documento de identificação e os registros relacionados à situação. Em questões trabalhistas, podem ser úteis carteira de trabalho, contracheques e comprovantes de jornada. Em questões previdenciárias, CNIS e comunicações do INSS. A relação exata depende de cada caso; evite enviar documentos sensíveis antes de receber orientação.",
  },
  {
    question: "É possível receber orientação a distância?",
    answer:
      "Entre em contato para verificar a possibilidade de atendimento a distância e combinar o formato adequado à sua situação. A necessidade de comparecimento presencial depende do caso e dos atos envolvidos.",
  },
  {
    question: "Como são definidos os honorários?",
    answer:
      "Os honorários são apresentados de forma individualizada, considerando a natureza e a complexidade do trabalho, com observância das normas da OAB. Valores, condições e escopo são esclarecidos antes da contratação.",
  },
  {
    question: "Todo conflito precisa de um processo judicial?",
    answer:
      "Não. Conforme as circunstâncias, pode ser adequado buscar orientação preventiva, negociação, solução administrativa ou acordo. A estratégia é definida após análise dos fatos e dos documentos.",
  },
  {
    question: "Existe garantia de resultado?",
    answer:
      "Não. A atuação jurídica é uma obrigação de meio, e não de resultado. Cada situação depende de provas, normas aplicáveis e decisões das autoridades competentes. Possibilidades e riscos são explicados com transparência.",
  },
];
export const pagePaths = [
  "/",
  "/sobre",
  ...areas.map((area) => area.slug),
  "/trabalhadores-rodovias-frigorificos",
  "/conteudos",
  "/contato",
  "/politica-de-privacidade",
] as const;
