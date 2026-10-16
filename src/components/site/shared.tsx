import { Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  ArrowRight,
  MessageCircle,
  Scale,
  Fingerprint,
  HeartHandshake,
  Eye,
  MapPin,
  Mail,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { areas, faqs, office } from "@/lib/site-data";

export function Eyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <div className={`eyebrow ${light ? "eyebrow-light" : ""}`}>
      <span />
      {children}
    </div>
  );
}
export function WhatsAppLink({
  children = "Converse com o advogado",
  className = "",
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <Button asChild className={`contact-button ${className}`}>
      <a href={office.whatsapp} target="_blank" rel="noopener noreferrer">
        <MessageCircle size={17} />
        {children}
        <ArrowUpRight size={16} />
      </a>
    </Button>
  );
}
export function AreaGrid() {
  const icons = [Scale, Fingerprint, HeartHandshake, Eye];
  return (
    <div className="areas-grid">
      {areas.map((area, index) => {
        const Icon = icons[index];
        return (
          <Link to={area.slug} key={area.slug} className="area-card">
            <div className="area-card-top">
              {Icon && <Icon strokeWidth={1.2} />}
              <span>{area.number}</span>
            </div>
            <h3>{area.title}</h3>
            <p>{area.description}</p>
            <span className="text-link">
              Conheça a atuação <ArrowUpRight size={17} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function Faq() {
  return (
    <section className="section faq-section">
      <div className="container faq-layout">
        <div>
          <Eyebrow>PERGUNTAS FREQUENTES</Eyebrow>
          <h2>
            Clareza desde
            <br />o primeiro contato.
          </h2>
          <p className="body-copy">
            Informação para que você dê o próximo passo com tranquilidade.
          </p>
          <Link to="/contato" className="text-link">
            Fale sobre a sua dúvida <ArrowRight size={17} />
          </Link>
        </div>
        <Accordion type="single" collapsible className="faq-list">
          {faqs.map((faq, i) => (
            <AccordionItem value={`faq-${i}`} key={faq.question}>
              <AccordionTrigger className="faq-question">{faq.question}</AccordionTrigger>
              <AccordionContent className="faq-answer">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
export function ContactBand() {
  return (
    <section className="contact-band">
      <div className="container">
        <div>
          <Eyebrow light>VAMOS CONVERSAR</Eyebrow>
          <h2>
            O primeiro passo é<br />
            <em>ser ouvido.</em>
          </h2>
        </div>
        <div>
          <p>
            Cada história merece atenção.
            <br />
            Conte com uma orientação individualizada.
          </p>
          <WhatsAppLink />
        </div>
      </div>
    </section>
  );
}
export function ContactDetails() {
  return (
    <div className="contact-details">
      <div>
        <MapPin />
        <section>
          <h3>O escritório</h3>
          <p>
            {office.address}
            <br />
            {office.city}
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Rua+Jos%C3%A9+Passador+565+Nova+Estrela+Estrela+do+Norte+SP"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Ver no mapa <ArrowUpRight size={15} />
          </a>
        </section>
      </div>
      <div>
        <MessageCircle />
        <section>
          <h3>WhatsApp</h3>
          <a href={office.whatsapp} target="_blank" rel="noopener noreferrer">
            {office.phone}
          </a>
        </section>
      </div>
      <div>
        <Mail />
        <section>
          <h3>E-mail</h3>
          <a className="email-link" href={`mailto:${office.email}`}>
            {office.email}
          </a>
        </section>
      </div>
      <div>
        <Instagram />
        <section>
          <h3>Instagram</h3>
          <a href={office.instagram} target="_blank" rel="noopener noreferrer">
            @tharcisleiteadvocacia
          </a>
        </section>
      </div>
    </div>
  );
}
export function Timeline() {
  return (
    <div className="timeline">
      {[
        {
          year: "2013",
          title: "O início de uma trajetória",
          text: "Graduação em Direito pelo Centro Universitário Toledo.",
        },
        {
          year: "2014",
          title: "Compromisso com a advocacia",
          text: "Início da atuação profissional, com responsabilidade e respeito a cada história.",
        },
        {
          year: "FORMAÇÃO CONTINUADA",
          title: "Conhecimento que se aprofunda",
          text: "Especialização em Direito do Trabalho e Direito Previdenciário.",
        },
      ].map((item) => (
        <div key={item.year}>
          <span className="timeline-year">{item.year}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}
export function Pillars() {
  return (
    <div className="pillars">
      {[
        { title: "Ética", text: "Responsabilidade e sigilo em cada orientação." },
        { title: "Transparência", text: "Caminhos, riscos e condições explicados com clareza." },
        { title: "Técnica", text: "Estudo e análise cuidadosa dos detalhes de cada caso." },
        { title: "Atenção", text: "Escuta verdadeira e respeito à sua singularidade." },
      ].map((p, i) => (
        <div key={p.title}>
          <span>0{i + 1}</span>
          <h3>{p.title}</h3>
          <p>{p.text}</p>
        </div>
      ))}
    </div>
  );
}
