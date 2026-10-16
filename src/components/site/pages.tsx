import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Check, FileText } from "lucide-react";
import { areas, office } from "@/lib/site-data";
import {
  ContactBand,
  ContactDetails,
  Eyebrow,
  Faq,
  Pillars,
  Timeline,
  WhatsAppLink,
} from "./shared";
import { OfficeImage } from "./media";

export function PageIntro({
  eyebrow,
  title,
  emphasis,
  description,
}: {
  eyebrow: string;
  title: string;
  emphasis?: string;
  description: string;
}) {
  return (
    <section className="page-intro">
      <div className="container">
        <div className="breadcrumb">
          <Link to="/">Início</Link>
          <span>/</span>
          <span>{eyebrow}</span>
        </div>
        <Eyebrow light>{eyebrow.toLocaleUpperCase("pt-BR")}</Eyebrow>
        <h1>
          {title}
          {emphasis && (
            <>
              <br />
              <em>{emphasis}</em>
            </>
          )}
        </h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function AboutPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="O advogado"
        title="Tharcis José Leite"
        emphasis="da Silva."
        description="Uma trajetória orientada pela técnica, pela escuta e pelo compromisso com as pessoas."
      />
      <section className="section">
        <div className="container about-grid">
          <OfficeImage
            file="IMG_6424.webp"
            label="Tharcis José Leite da Silva"
            className="portrait-photo"
          />
          <div className="about-copy">
            <Eyebrow>ADVOCACIA COM PROPÓSITO</Eyebrow>
            <h2>
              A sua história merece
              <br />
              <em>atenção de verdade.</em>
            </h2>
            <p>
              Graduado em Direito pelo Centro Universitário Toledo em 2013, Tharcis José Leite da
              Silva exerce a advocacia desde 2014. Sua formação inclui especialização em Direito do
              Trabalho e Direito Previdenciário.
            </p>
            <p>
              Inscrito na OAB/SP sob o nº 348.515 e na OAB/PR sob o nº 83.513, atua nas áreas
              Trabalhista, Previdenciária, Civil e do Consumidor.
            </p>
            <p>
              O escritório está localizado em Nova Estrela. A atuação parte de uma
              convicção: compreender o contexto de cada pessoa é essencial para construir uma
              orientação jurídica responsável.
            </p>
            <WhatsAppLink />
          </div>
        </div>
      </section>
      <section className="section timeline-section">
        <div className="container">
          <Eyebrow>FORMAÇÃO E TRAJETÓRIA</Eyebrow>
          <h2>
            Compromisso que
            <br />
            <em>atravessa o tempo.</em>
          </h2>
          <Timeline />
        </div>
      </section>
      <section className="section">
        <div className="container">
          <Eyebrow>NOSSOS PILARES</Eyebrow>
          <h2>A maneira como escolhemos atuar.</h2>
          <Pillars />
        </div>
      </section>
      <ContactBand />
    </main>
  );
}
export function AreaPage({ index }: { index: number }) {
  const area = areas[index];
  if (!area) return null;
  return (
    <main id="main-content">
      <PageIntro
        eyebrow={area.title}
        title={area.title}
        emphasis="Atenção a cada detalhe."
        description={area.description}
      />
      <section className="section">
        <div className="container area-detail-grid">
          <div>
            <Eyebrow>ORIENTAÇÃO INDIVIDUALIZADA</Eyebrow>
            <h2>
              Entender o contexto.
              <br />
              <em>Construir caminhos.</em>
            </h2>
            <p className="body-copy">
              Uma orientação jurídica responsável começa pela análise dos fatos, dos documentos e
              das suas necessidades. O trabalho envolve esclarecer alternativas, prazos e riscos,
              com linguagem acessível e respeito à sua decisão.
            </p>
            <p className="body-copy">
              A atuação pode envolver orientação preventiva, medidas administrativas, negociação ou
              acompanhamento judicial, conforme as particularidades da situação.
            </p>
            <WhatsAppLink />
          </div>
          <div className="topic-list">
            <span className="small-label">TEMAS DE ATUAÇÃO</span>
            {area.topics.map((topic) => (
              <div key={topic}>
                <Check size={17} />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section process-section">
        <div className="container">
          <Eyebrow>COMO COMEÇA</Eyebrow>
          <h2>Clareza em cada etapa.</h2>
          <div className="process-grid">
            {[
              {
                t: "Escuta",
                p: "Compreensão da sua história e das questões que precisam de atenção.",
              },
              {
                t: "Análise",
                p: "Avaliação dos documentos, do contexto e das alternativas jurídicas.",
              },
              {
                t: "Orientação",
                p: "Apresentação dos caminhos possíveis, dos riscos e das condições do trabalho.",
              },
            ].map((item, i) => (
              <div key={item.t}>
                <span>0{i + 1}</span>
                <h3>{item.t}</h3>
                <p>{item.p}</p>
              </div>
            ))}
          </div>
          <p className="legal-note">
            Os temas apresentados são informativos. A existência de um direito, o cabimento de uma
            medida e eventuais prazos dependem de análise individual. Não há garantia de resultado.
          </p>
        </div>
      </section>
      {index === 0 && (
        <section className="section">
          <div className="container related-band">
            <div>
              <Eyebrow>TRABALHO E REALIDADE</Eyebrow>
              <h2>
                Construção pesada,
                <br />
                rodovias e frigoríficos.
              </h2>
            </div>
            <Link className="text-link" to="/trabalhadores-rodovias-frigorificos">
              Conheça essa atuação <ArrowUpRight size={18} />
            </Link>
          </div>
        </section>
      )}
      <Faq />
      <ContactBand />
    </main>
  );
}
export function WorkersPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Trabalhadores"
        title="Quem trabalha merece"
        emphasis="ser ouvido."
        description="Orientação jurídica para trabalhadores da construção pesada, de rodovias e de frigoríficos, com atenção à realidade de cada atividade."
      />
      <section className="section">
        <div className="container">
          <Eyebrow>DIREITOS E CONDIÇÕES DE TRABALHO</Eyebrow>
          <h2>
            Rotinas diferentes.
            <br />
            <em>O mesmo respeito.</em>
          </h2>
          <div className="sector-detail-grid">
            {[
              {
                title: "Construção pesada",
                text: "Atividades em canteiros, obras de infraestrutura e frentes de trabalho exigem atenção às condições de segurança, à contratação e à organização da jornada.",
                items: [
                  "Jornada, horas extras e intervalos",
                  "Condições de alojamento e deslocamentos",
                  "Equipamentos de proteção e segurança",
                  "Acidentes e doenças ocupacionais",
                ],
              },
              {
                title: "Rodovias",
                text: "A prestação de serviços em obras e manutenção de rodovias pode envolver trabalho externo, mudanças de local e condições específicas de exposição.",
                items: [
                  "Controle de jornada e períodos de descanso",
                  "Deslocamentos e frentes de trabalho",
                  "Exposição a agentes nocivos e riscos",
                  "Direitos previstos em normas coletivas",
                ],
              },
              {
                title: "Frigoríficos",
                text: "Ambientes com baixas temperaturas, esforço repetitivo e ritmo intenso exigem uma avaliação cuidadosa da organização do trabalho e das medidas de proteção.",
                items: [
                  "Pausas e intervalos aplicáveis à atividade",
                  "Exposição ao frio e insalubridade",
                  "Movimentos repetitivos e saúde ocupacional",
                  "Equipamentos de proteção e condições de trabalho",
                ],
              },
            ].map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <ul>
                  {item.items.map((text) => (
                    <li key={text}>{text}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="legal-note">
            Adicionais, pausas e demais direitos não decorrem automaticamente do setor de atividade.
            Dependem das funções efetivas, das condições de trabalho, das provas, da legislação e
            das normas coletivas aplicáveis.
          </p>
        </div>
      </section>
      <section className="section process-section">
        <div className="container area-detail-grid">
          <div>
            <Eyebrow>PARA UMA PRIMEIRA ANÁLISE</Eyebrow>
            <h2>
              Os detalhes da sua
              <br />
              <em>rotina importam.</em>
            </h2>
            <p className="body-copy">
              Registros do contrato, recibos de pagamento, documentos sobre jornada e informações
              sobre as atividades ajudam a compreender o caso. Preserve os documentos de forma
              lícita e respeite dados pessoais de terceiros.
            </p>
            <WhatsAppLink />
          </div>
          <div className="topic-list">
            <span className="small-label">PONTOS QUE PODEM SER AVALIADOS</span>
            {[
              "Forma de contratação e função exercida",
              "Horários, pausas e períodos de descanso",
              "Local e condições reais de trabalho",
              "Pagamentos e documentos da rescisão",
              "Normas coletivas e documentação disponível",
            ].map((t) => (
              <div key={t}>
                <Check size={17} />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>
      <Faq />
      <ContactBand />
    </main>
  );
}
const guides = [
  {
    id: "documentos-trabalhistas",
    area: "TRABALHO",
    title: "Documentos que ajudam a compreender a relação de trabalho",
    text: "Carteira de trabalho, recibos de pagamento, contrato, termo de rescisão e registros lícitos de jornada podem ajudar na análise. Guarde os originais e organize as informações por período. Nenhum documento, isoladamente, garante o reconhecimento de um direito.",
    to: "/direito-do-trabalho",
  },
  {
    id: "historico-previdenciario",
    area: "PREVIDENCIÁRIO",
    title: "Por que conferir o seu histórico de contribuições?",
    text: "O CNIS reúne informações relevantes sobre vínculos e contribuições. Divergências ou períodos ausentes podem exigir conferência e documentos complementares. A possibilidade de um benefício depende dos requisitos aplicáveis e da história de cada segurado.",
    to: "/direito-previdenciario",
  },
  {
    id: "contratos",
    area: "CIVIL",
    title: "Ler um contrato é cuidar das próximas decisões",
    text: "Antes de assinar, observe objeto, obrigações, pagamentos, prazos, multas e condições de encerramento. Guarde uma via e os registros das negociações. Em caso de dúvida, busque orientação individualizada antes de assumir compromissos.",
    to: "/direito-civil",
  },
  {
    id: "consumo",
    area: "CONSUMIDOR",
    title: "Organização faz diferença nas relações de consumo",
    text: "Notas fiscais, contratos, comprovantes de pagamento, protocolos de atendimento e ofertas ajudam a registrar o ocorrido. Procure os canais oficiais do fornecedor e preserve as respostas. Prazos e soluções variam conforme o produto, o serviço e o problema.",
    to: "/direito-do-consumidor",
  },
] as const;
export function ContentsPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Conteúdos"
        title="Informação que esclarece."
        emphasis="Conhecimento que aproxima."
        description="Orientações gerais sobre temas do cotidiano jurídico, com responsabilidade e linguagem acessível."
      />
      <section className="section">
        <div className="container">
          <Eyebrow>GUIAS INFORMATIVOS</Eyebrow>
          <div className="guides-grid">
            {guides.map((guide) => (
              <article id={guide.id} key={guide.id} className="guide-article">
                <div className="guide-category">
                  <FileText size={18} />
                  {guide.area}
                </div>
                <h2>{guide.title}</h2>
                <p>{guide.text}</p>
                <Link to={guide.to} className="text-link">
                  Conheça a área de atuação <ArrowRight size={17} />
                </Link>
              </article>
            ))}
          </div>
          <p className="legal-note">
            Material de caráter geral e informativo. Não substitui consulta jurídica e não constitui
            orientação para um caso concreto. Não são divulgados resultados de processos ou notícias
            fictícias.
          </p>
        </div>
      </section>
      <Faq />
      <ContactBand />
    </main>
  );
}
export function ContactPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Contato"
        title="Toda orientação começa"
        emphasis="com uma conversa."
        description="Entre em contato pelos canais oficiais. Sua história será tratada com respeito e discrição."
      />
      <section className="section">
        <div className="container contact-page-grid">
          <div>
            <Eyebrow>ESTAMOS AQUI PARA OUVIR</Eyebrow>
            <h2>
              Vamos dar o<br />
              <em>primeiro passo?</em>
            </h2>
            <p className="body-copy">
              Para informações sobre atendimento, documentos e condições da consulta, fale
              diretamente com o escritório.
            </p>
            <WhatsAppLink>Conversar pelo WhatsApp</WhatsAppLink>
            <a href={`mailto:${office.email}`} className="text-link email-cta">
              Prefiro enviar um e-mail <ArrowUpRight size={17} />
            </a>
            <p className="legal-note">
              O contato inicial não formaliza contratação, não interrompe prazos e não substitui
              orientação jurídica. Evite compartilhar documentos sensíveis antes de receber
              instruções.
            </p>
          </div>
          <ContactDetails />
        </div>
      </section>
      <section className="section office-section">
        <div className="container">
          <Eyebrow>O ESCRITÓRIO</Eyebrow>
          <h2>
            Em Nova Estrela.
            <br />
            <em>Perto da sua história.</em>
          </h2>
          <OfficeImage
            file="fachada.webp"
            label="Fachada do escritório em Nova Estrela"
            className="facade-photo"
          />
        </div>
      </section>
      <Faq />
    </main>
  );
}
export function PrivacyPage() {
  return (
    <main id="main-content">
      <PageIntro
        eyebrow="Política de privacidade"
        title="Respeito à sua história."
        emphasis="Cuidado com seus dados."
        description="Informações sobre o tratamento de dados pessoais nos contatos com o escritório e na utilização deste site."
      />
      <section className="section">
        <div className="container privacy-copy">
          <p>
            Esta política apresenta informações gerais sobre privacidade, em observância à Lei Geral
            de Proteção de Dados (Lei nº 13.709/2018). O responsável pelos dados recebidos nos
            canais do escritório é Tharcis José Leite da Silva, com endereço em Nova Estrela.
          </p>
          <h2>1. Informações recebidas</h2>
          <p>
            Este site não possui formulário de envio nem área de cadastro. Ao usar links de
            WhatsApp, e-mail ou Instagram, você pode fornecer voluntariamente nome, dados de contato
            e informações relacionadas à sua solicitação. Evite enviar dados sensíveis ou documentos
            antes de receber orientação.
          </p>
          <h2>2. Finalidades e fundamentos</h2>
          <p>
            Dados enviados ao escritório podem ser utilizados para responder solicitações, avaliar a
            possibilidade de atendimento, realizar procedimentos preliminares à contratação,
            executar serviços contratados, exercer direitos e cumprir obrigações legais e
            profissionais. A base legal depende da finalidade e da natureza dos dados, podendo
            incluir procedimentos contratuais, cumprimento de obrigação legal e exercício regular de
            direitos.
          </p>
          <h2>3. Serviços de terceiros e navegação</h2>
          <p>
            Os links para WhatsApp, Instagram e Google Maps levam a serviços externos, sujeitos às
            respectivas políticas de privacidade. O provedor de hospedagem pode processar
            informações técnicas, como endereço IP e registros de acesso, para funcionamento e
            segurança do site. A duração e as condições desse tratamento técnico dependem das
            políticas do provedor.
          </p>
          <h2>4. Cookies e armazenamento</h2>
          <p>
            O código institucional deste site não utiliza cookies próprios de publicidade,
            formulários de rastreamento ou ferramentas próprias de análise de audiência. Serviços de
            infraestrutura e sites externos podem realizar tratamentos técnicos sob suas próprias
            políticas. Qualquer alteração relevante será refletida nesta política.
          </p>
          <h2>5. Compartilhamento e segurança</h2>
          <p>
            As informações são tratadas com confidencialidade e medidas de segurança compatíveis com
            sua natureza. Quando necessário à prestação dos serviços ou ao cumprimento de deveres
            legais, pode haver compartilhamento com prestadores de apoio, órgãos públicos e
            autoridades competentes, limitado à finalidade aplicável. Nenhum meio eletrônico é
            integralmente isento de riscos.
          </p>
          <h2>6. Prazo de conservação</h2>
          <p>
            Os dados são mantidos pelo tempo necessário às finalidades do atendimento e ao
            cumprimento de obrigações legais, profissionais e de preservação de direitos. A
            eliminação poderá ser limitada por dever de guarda ou outra hipótese legal de
            conservação.
          </p>
          <h2>7. Seus direitos</h2>
          <p>
            Você pode solicitar confirmação de tratamento, acesso, correção, informações sobre
            compartilhamento e, quando cabível, eliminação, anonimização ou revogação de
            consentimento. As solicitações serão analisadas conforme os requisitos e limites da
            legislação, com eventual confirmação de identidade.
          </p>
          <h2>8. Contato para privacidade</h2>
          <p>
            Envie sua solicitação para <a href={`mailto:${office.email}`}>{office.email}</a>. Esta
            política poderá ser atualizada para refletir alterações nas atividades do escritório e
            nos serviços do site.
          </p>
        </div>
      </section>
    </main>
  );
}
