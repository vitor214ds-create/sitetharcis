import { MessageCircle, Phone } from "lucide-react";
import { office } from "@/lib/site-data";

/**
 * Contact shortcut available on every public page.
 * Fixed to the viewport so visitors can reach the office without scrolling back.
 */
export function FloatingWhatsApp() {
  const message = encodeURIComponent(
    "Olá, gostaria de obter informações sobre o atendimento jurídico.",
  );

  return (
    <a
      className="floating-whatsapp"
      href={`${office.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Conversar pelo WhatsApp com o escritório Tharcis Leite"
      title="Conversar pelo WhatsApp"
    >
      <span className="floating-whatsapp-icon" aria-hidden="true">
        <MessageCircle size={28} strokeWidth={2} />
        <Phone size={12} strokeWidth={2.5} />
      </span>
      <span className="floating-whatsapp-label">WhatsApp</span>
    </a>
  );
}
