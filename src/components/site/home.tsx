import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Landmark, Snowflake, HardHat, ClipboardList, Laptop2, FileCheck2, Scale, ShieldCheck, MessageCircle } from "lucide-react";
import { HeroMedia, OfficeImage } from "./media";
import { AreaGrid, ContactBand, Eyebrow, Pillars, WhatsAppLink } from "./shared";
import { LaborFaq } from "./labor-faq";

const sectors = [
  {
    id: "frigorificos",
    Icon: Snowflake,
    number: "01",
    title: "Direitos de quem trabalha em frigoríficos",
    text: "Exposição ao frio, pausas de recuperação térmica, insalubridade, horas extras, movimentos repetitivos e doenças relacionadas ao trabalho exigem avaliação das condições reais de cada atividade.",
    link: "/direitos-trabalhadores-frigorificos",
    cta: "Entenda os direitos no frigorífico",
  },
  {
    id: "rodovias",
    Icon: HardHat,
    number: "02",
    title: "Rodovias e construção civil pesada",
    text: "Jornadas prolongadas, períodos de descanso, deslocamentos, adicionais legais, segurança e acidentes podem demandar análise do contrato, dos registros e das normas coletivas aplicáveis.",
    link: "/direitos-trabalhadores-rodovias",
    cta: "Conheça a atuação neste setor",
  },
  {
    id: "demandas",
    Icon: ClipboardList,
    number: "03",
    title: "Outras demandas trabalhistas",
    text: "Rescisão indireta, verbas rescisórias, vínculo de emprego, assédio moral, horas extras e outras controvérsias relativas ao contrato de trabalho, independentemente do setor profissional.",
    link: "/demandas-trabalhistas",
    cta: "Veja outras questões trabalhistas",
  },
] as const;

export function HomePage() {
  return (
    <main id="main-content">
      <section className="home-hero labor-hero">
        <HeroMedia />
        <div className="container hero-content labor-hero-content">
          <div className="hero-kicker"><span /> DIREITO DO TRABALHO • ATENDIMENTO ON-LINE NACIONAL</div>
          <h1>Advocacia trabalhista <span>com atendimento em <em>todo o Brasil.</em></span></h1>
          <p>Atuação em Direito do Trabalho, com experiência em demandas de trabalhadores de frigoríficos, construção civil pesada e rodovias. Atendimento on-line para trabalhadores de diferentes regiões do país.</p>
          <div className="hero-actions">
            <WhatsAppLink>Fale com nosso escritório</WhatsAppLink>
            <a href="#atuacao-trabalhista" className="hero-about">Conheça nossa atuação <ArrowUpRight size={17}/></a>
          </div>
          <div className="hero-registration">THARCIS JOSÉ LEITE DA SILVA <span>OAB/SP 348.515 &nbsp; | &nbsp; OAB/PR 83.513</span></div>
        </div>
        <div className="container hero-bottom">
          <a href="#atuacao-trabalhista" className="scroll-link"><ArrowDown size={15}/> CONHEÇA A ATUAÇÃO</a>
          <span>SEDE EM ESTRELA DO NORTE/SP</span>
        </div>
      </section>

      <section className="trust-strip">
        <div className="container">
          <span><Landmark strokeWidth={1.3}/> Advocacia desde 2014</span><i />
          <span><Laptop2 size={17}/> Atendimento on-line nacional</span><i />
          <span>Atuação trabalhista em diferentes setores</span>
        </div>
      </section>

      <section className="section labor-intro" id="atuacao-trabalhista">
        <div className="container">
          <div className="section-heading">
            <div>
              <Eyebrow>DIREITO DO TRABALHO</Eyebrow>
              <h2>Seu trabalho tem uma história.<br/><em>Seus direitos merecem atenção.</em></h2>
            </div>
            <p>Do contrato à rescisão, cada situação merece orientação cuidadosa. Conheça os temas atendidos pelo escritório.</p>
          </div>
          <div className="labor-specialties">
            {sectors.map(({id,Icon,number,title,text,link,cta})=>(
              <article className="labor-specialty" key={id} id={id}>
                <div className="labor-specialty-head"><Icon size={34} strokeWidth={1.25}/><span>{number} / 03</span></div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link className="text-link" to={link}>{cta}<ArrowUpRight size={18}/></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section labor-focus">
        <div className="container labor-focus-grid">
          <div className="labor-focus-image"><OfficeImage file="IMG_6455.webp" label="Tharcis Leite no escritório" className="landscape-photo" /></div>
          <div className="labor-focus-copy">
            <Eyebrow light>ORIENTAÇÃO JURÍDICA INDIVIDUALIZADA</Eyebrow>
            <h2>Conhecer a sua rotina é o primeiro passo para <em>compreender seus direitos.</em></h2>
            <p>Horas extras, adicionais, doença ocupacional e verbas rescisórias dependem de fatos, provas e regras aplicáveis. O escritório avalia cada situação sem respostas prontas e sem prometer resultados.</p>
            <Link to="/direito-do-trabalho" className="text-link">Conheça a atuação em Direito do Trabalho <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="section about-section" id="o-advogado">
        <div className="container about-grid">
          <div className="about-photo-wrap">
            <OfficeImage file="IMG_6424.webp" label="Retrato profissional de Tharcis José Leite da Silva" className="portrait-photo"/>
            <div className="photo-note"><span>ADVOCACIA DESDE</span><strong>2014</strong><span>EXPERIÊNCIA PROFISSIONAL</span></div>
          </div>
          <div className="about-copy">
            <Eyebrow>CONHEÇA O ADVOGADO</Eyebrow>
            <h2>Tharcis José Leite <em>da Silva.</em></h2>
            <p>Advogado inscrito na OAB/SP sob o nº 348.515 e na OAB/PR sob o nº 83.513. Graduado em Direito pelo Centro Universitário Toledo, em Presidente Prudente/SP, em 2013, e atuante na advocacia desde 2014.</p>
            <p>Possui especialização em Direito do Trabalho e Direito Previdenciário pela mesma instituição. Sua atuação abrange diferentes demandas trabalhistas, com atenção às particularidades das atividades em frigoríficos, rodovias e construção civil pesada.</p>
            <div className="about-credentials"><span>OAB/SP 348.515</span><span>OAB/PR 83.513</span></div>
            <Link to="/sobre" className="text-link">Conheça a trajetória profissional <ArrowRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="section national-service" id="atendimento-online">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow light>ATENDIMENTO À DISTÂNCIA</Eyebrow><h2>Atendimento jurídico on-line para trabalhadores <em>de todo o Brasil.</em></h2></div>
            <p>Com sede física em Estrela do Norte/SP, o escritório disponibiliza canais remotos para o contato inicial e a orientação jurídica, conforme as necessidades de cada caso.</p>
          </div>
          <div className="national-steps">
            <div><MessageCircle size={28}/><span>01</span><h3>Primeiro contato</h3><p>Entre em contato pelo WhatsApp para apresentar, de forma inicial, sua dúvida trabalhista.</p></div>
            <div><FileCheck2 size={28}/><span>02</span><h3>Documentação</h3><p>Receba orientações sobre quais documentos e informações poderão ajudar a compreender a situação.</p></div>
            <div><Scale size={28}/><span>03</span><h3>Avaliação jurídica</h3><p>O caso será analisado individualmente, com esclarecimentos sobre alternativas, condições e possíveis etapas presenciais.</p></div>
          </div>
          <div className="national-action"><WhatsAppLink>Solicitar informações sobre atendimento</WhatsAppLink><span>Atendimento remoto não significa que todos os atos processuais serão realizados a distância.</span></div>
        </div>
      </section>

      <section className="section areas-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>ATUAÇÃO JURÍDICA</Eyebrow><h2>Direito do Trabalho como foco.<br/><em>Outras áreas com responsabilidade.</em></h2></div>
            <p>Além do atendimento trabalhista, o escritório mantém atuação em Direito Previdenciário, Civil e do Consumidor.</p>
          </div>
          <AreaGrid/>
        </div>
      </section>

      <section className="section labor-faq-section"><div className="container"><LaborFaq/></div></section>

      <section className="section office-section">
        <div className="container">
          <div className="section-heading">
            <div><Eyebrow>NOSSO ESCRITÓRIO</Eyebrow><h2>Uma sede real.<br/><em>Atendimento que ultrapassa fronteiras.</em></h2></div>
            <p>Rua José Passador, 565 · Vila Estrela<br/>Estrela do Norte, São Paulo</p>
          </div>
          <div className="office-gallery">
            <OfficeImage file="fachada.webp" label="Fachada do escritório Tharcis Leite Advocacia"/>
            <OfficeImage file="IMG_6428.webp" label="Tharcis Leite em seu ambiente de trabalho"/>
          </div>
          <div className="office-gallery-footer"><span>ESTRELA DO NORTE/SP • ATENDIMENTO ON-LINE</span><Link to="/contato" className="text-link">Localização e canais de contato <ArrowUpRight size={17}/></Link></div>
        </div>
      </section>
      <section className="section pillars-section"><div className="container"><div className="section-heading"><div><Eyebrow>COMPROMISSO PROFISSIONAL</Eyebrow><h2>Técnica, ética e <em>atenção individual.</em></h2></div><p>Uma advocacia orientada por informação clara, respeito e análise cuidadosa.</p></div><Pillars/></div></section>
      <ContactBand/>
    </main>
  );
}
