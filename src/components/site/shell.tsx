import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Instagram, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { office, areas } from "@/lib/site-data";
import { WhatsAppLink } from "./shared";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const home = location.pathname === "/";
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 35);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);
  useEffect(() => {
    if (!open) return;
    const close = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", close);
    return () => document.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={`site-header ${scrolled || !home || open ? "header-solid" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="brand" aria-label="Tharcis Leite Advocacia — início">
          <span className="brand-symbol brand-symbol-logo"><img src="/media/logo-tz.svg" alt="" /></span>
          <span className="brand-name">
            THARCIS LEITE<span>ADVOCACIA</span>
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Navegação principal">
          <Link to="/" activeProps={{ className: "nav-active" }}>
            Início
          </Link>
          <Link to="/sobre" activeProps={{ className: "nav-active" }}>
            O advogado
          </Link>
          <div className="nav-dropdown">
            <Link to="/direito-do-trabalho">
              Áreas de atuação <ChevronDown size={12} />
            </Link>
            <div className="nav-dropdown-panel">
              <Link to="/direitos-trabalhadores-frigorificos">Direitos em frigoríficos<ArrowUpRight size={14}/></Link>
              <Link to="/direitos-trabalhadores-rodovias">Rodovias e construção<ArrowUpRight size={14}/></Link>
              <Link to="/demandas-trabalhistas">Outras demandas trabalhistas<ArrowUpRight size={14}/></Link>
              {areas.map((a) => (
                <Link key={a.slug} to={a.slug}>
                  {a.title}
                  <ArrowUpRight size={14} />
                </Link>
              ))}
              <Link to="/trabalhadores-rodovias-frigorificos">
                Rodovias e frigoríficos
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>
          <Link to="/conteudos" activeProps={{ className: "nav-active" }}>
            Conteúdos
          </Link>
          <Link to="/contato" activeProps={{ className: "nav-active" }}>
            Contato
          </Link>
        </nav>
        <WhatsAppLink className="header-contact">Fale com o advogado</WhatsAppLink>
        <Button
          className="menu-toggle"
          variant="ghost"
          size="icon"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel">
          <Link to="/">Início</Link>
          <Link to="/sobre">O advogado</Link>
          {areas.map((a) => (
            <Link key={a.slug} to={a.slug}>
              {a.title}
            </Link>
          ))}
          <Link to="/direitos-trabalhadores-frigorificos">Frigoríficos</Link>
          <Link to="/direitos-trabalhadores-rodovias">Rodovias e construção</Link>
          <Link to="/demandas-trabalhistas">Demandas trabalhistas</Link>
          <Link to="/direitos-trabalhadores-frigorificos">Direitos em frigoríficos</Link>
          <Link to="/direitos-trabalhadores-rodovias">Rodovias e construção pesada</Link>
          <Link to="/demandas-trabalhistas">Demandas trabalhistas</Link>
          <Link to="/conteudos">Conteúdos</Link>
          <Link to="/contato">Contato</Link>
          <WhatsAppLink />
        </nav>
      )}
    </header>
  );
}
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Link to="/" className="brand footer-brand">
            <span className="brand-symbol brand-symbol-logo"><img src="/media/logo-tz.svg" alt="" /></span>
            <span className="brand-name">
              THARCIS LEITE<span>ADVOCACIA</span>
            </span>
          </Link>
          <p>
            Advocacia com propósito.
            <br />
            Compromisso com a sua história.
          </p>
          <span className="registration">OAB/SP 348.515 · OAB/PR 83.513</span>
        </div>
        <div>
          <h3>Explore</h3>
          <Link to="/sobre">O advogado</Link>
          <Link to="/conteudos">Conteúdos</Link>
          <Link to="/contato">Contato</Link>
          <Link to="/politica-de-privacidade">Política de privacidade</Link>
        </div>
        <div>
          <h3>Áreas de atuação</h3>
          {areas.map((a) => (
            <Link key={a.slug} to={a.slug}>
              {a.title}
            </Link>
          ))}
          <Link to="/trabalhadores-rodovias-frigorificos">Rodovias e frigoríficos</Link>
        </div>
        <div>
          <h3>Estrela do Norte · SP</h3>
          <p>
            {office.address}
            <br />
            {office.city}
          </p>
          <a href={office.whatsapp} target="_blank" rel="noopener noreferrer">
            {office.phone} <ArrowUpRight size={13} />
          </a>
          <div className="footer-socials">
            <a
              href={office.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram do escritório"
            >
              <Instagram size={18} />
            </a>
            <a
              href={office.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp do escritório"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {office.name}. Todos os direitos reservados.
        </span>
        <span>Conteúdo informativo. Cada caso exige análise individual.</span>
      </div>
    </footer>
  );
}
