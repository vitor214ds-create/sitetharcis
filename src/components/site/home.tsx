import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Landmark,
  HardHat,
  Route,
  Snowflake,
} from "lucide-react";
import { HeroMedia, OfficeImage } from "./media";
import { AreaGrid, ContactBand, Eyebrow, Faq, Pillars, Timeline, WhatsAppLink } from "./shared";

export function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero">
        <HeroMedia />
        <div className="container hero-content">
          <div className="hero-kicker">
            <span />
            ADVOCACIA COM PROPÓSITO
          </div>
          <h1>
            Tharcis Leite
            <span>
              Direito com técnica.
              <br />
              <em>Relações com respeito.</em>
            </span>
          </h1>
          <p>
            Uma advocacia próxima, que escuta a sua história
            <br className="desktop-break" /> e trata cada direito com a atenção que ele merece.
          </p>
          <div className="hero-actions">
            <WhatsAppLink>Converse com o advogado</WhatsAppLink>
            <Link to="/sobre" className="hero-about">
              Conheça a trajetória <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="hero-registration">
            THARCIS JOSÉ LEITE DA SILVA <span>OAB/SP 348.515 &nbsp; | &nbsp; OAB/PR 83.513</span>
          </div>
        </div>
        <div className="container hero-bottom">
          <a href="#manifesto" className="scroll-link">
            <ArrowDown size={15} /> EXPLORE O ESCRITÓRIO
          </a>
          <span>ESTRELA DO NORTE, SÃO PAULO</span>
        </div>
      </section>
      <section className="trust-strip">
        <div className="container">
          <span>
            <Landmark strokeWidth={1.3} /> Advocacia desde 2014
          </span>
          <i />
          <span>Escuta atenta. Orientação clara.</span>
          <i />
          <span>Compromisso com cada história.</span>
        </div>
      </section>
      <section id="manifesto" className="section manifesto">
        <div className="container manifesto-grid">
          <Eyebrow>MAIS DO QUE PROCESSOS, PESSOAS</Eyebrow>
          <div>
            <h2>
              Por trás de cada direito,
              <br />
              existe <em>uma história.</em>
            </h2>
            <p>
              Acreditamos que a advocacia começa pela escuta. Antes dos documentos, dos prazos e das
              leis, há uma pessoa que precisa ser compreendida.
            </p>
            <p>
              É com esse olhar que cada situação é analisada: com rigor técnico, linguagem acessível
              e respeito por aquilo que realmente importa para você.
            </p>
            <span className="signature">Tharcis Leite</span>
          </div>
          <span className="manifesto-number">01 / ESSÊNCIA</span>
        </div>
      </section>
      <section className="section about-section">
        <div className="container about-grid">
          <div className="about-photo-wrap">
            <OfficeImage
              file="IMG_6424.webp"
              label="Tharcis José Leite da Silva"
              className="portrait-photo"
            />
            <div className="photo-note">
              <span>DESDE</span>
              <strong>2014</strong>
              <span>EXERCENDO A ADVOCACIA</span>
            </div>
          </div>
          <div className="about-copy">
            <Eyebrow>O ADVOGADO</Eyebrow>
            <h2>
              Conhecimento jurídico.
              <br />
              <em>Presença humana.</em>
            </h2>
            <p>
              Tharcis José Leite da Silva é advogado, graduado pelo Centro Universitário Toledo em
              2013, com atuação profissional desde 2014 e especialização em Direito do Trabalho e
              Direito Previdenciário.
            </p>
            <p>
              Em Estrela do Norte, interior de São Paulo, desenvolve uma advocacia pautada na ética,
              na proximidade e no cuidado com os detalhes de cada caso.
            </p>
            <div className="about-credentials">
              <span>OAB/SP 348.515</span>
              <span>OAB/PR 83.513</span>
            </div>
            <Link to="/sobre" className="text-link">
              Conheça a trajetória <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section areas-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>ÁREAS DE ATUAÇÃO</Eyebrow>
              <h2>
                Seus direitos.
                <br />
                <em>Nosso compromisso.</em>
              </h2>
            </div>
            <p>
              Orientação jurídica cuidadosa,
              <br />
              da prevenção à defesa dos seus direitos.
            </p>
          </div>
          <AreaGrid />
        </div>
      </section>
      <section className="section workers-section">
        <div className="container workers-grid">
          <div>
            <Eyebrow light>UM OLHAR PARA QUEM CONSTRÓI</Eyebrow>
            <h2>
              Quem move o país
              <br />
              merece ter seus
              <br />
              <em>direitos respeitados.</em>
            </h2>
            <p>
              Atenção às particularidades do trabalho na construção pesada, em rodovias e em
              frigoríficos. Cada rotina tem desafios próprios — e uma análise jurídica deve
              considerar essa realidade.
            </p>
            <Link to="/trabalhadores-rodovias-frigorificos" className="text-link">
              Atuação junto aos trabalhadores <ArrowUpRight size={18} />
            </Link>
          </div>
          <div className="sector-list">
            {[
              {
                Icon: HardHat,
                title: "Construção pesada",
                text: "Segurança, condições de trabalho e direitos contratuais.",
              },
              {
                Icon: Route,
                title: "Rodovias",
                text: "Jornadas, deslocamentos e particularidades da atividade.",
              },
              {
                Icon: Snowflake,
                title: "Frigoríficos",
                text: "Ambientes frios, pausas e saúde ocupacional.",
              },
            ].map(({ Icon, title, text }) => (
              <div key={title}>
                <Icon strokeWidth={1.1} />
                <section>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </section>
                <ArrowUpRight size={18} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section timeline-section">
        <div className="container">
          <Eyebrow>UMA TRAJETÓRIA DE COMPROMISSO</Eyebrow>
          <h2>
            A confiança se constrói
            <br />
            <em>ao longo do caminho.</em>
          </h2>
          <Timeline />
        </div>
      </section>
      <section className="section pillars-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>O QUE ORIENTA NOSSO TRABALHO</Eyebrow>
              <h2>
                Princípios que não
                <br />
                <em>ficam só no papel.</em>
              </h2>
            </div>
            <p>
              Uma forma de atuar que coloca
              <br />
              as pessoas no centro de cada decisão.
            </p>
          </div>
          <Pillars />
        </div>
      </section>
      <section className="section office-section">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>NOSSO ESPAÇO</Eyebrow>
              <h2>
                Um lugar para ouvir.
                <br />
                <em>Um ponto de confiança.</em>
              </h2>
            </div>
            <p>
              Rua José Passador, 565 · Vila Estrela
              <br />
              Estrela do Norte, São Paulo
            </p>
          </div>
          <div className="office-gallery">
            <OfficeImage file="IMG_6455.webp" label="Escritório · espaço de atendimento" />
            <OfficeImage file="IMG_6520.webp" label="Escritório · detalhes" />
            <OfficeImage file="IMG_6431.webp" label="Escritório · ambiente interno" />
          </div>
          <div className="office-gallery-footer">
            <span>PROXIMIDADE QUE COMEÇA NO ACOLHIMENTO.</span>
            <Link to="/contato" className="text-link">
              Entre em contato <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section content-preview">
        <div className="container content-preview-inner">
          <div>
            <Eyebrow>INFORMAÇÃO COM RESPONSABILIDADE</Eyebrow>
            <h2>
              Conhecer seus direitos
              <br />
              também é <em>se proteger.</em>
            </h2>
          </div>
          <div>
            <p>
              Temas jurídicos explicados com clareza, sem promessas e sem soluções prontas.
              Informação para decisões mais conscientes.
            </p>
            <Link to="/conteudos" className="text-link">
              Explore os conteúdos <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      <Faq />
      <ContactBand />
    </main>
  );
}
