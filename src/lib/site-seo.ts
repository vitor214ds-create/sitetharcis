import { office } from "./site-data";
export function pageHead(title: string, description: string, path: string) {
  const fullTitle = `${title} | Tharcis Leite Advocacia`;
  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `https://tharcisleiteadvocacia.com.br${path}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `https://tharcisleiteadvocacia.com.br${path}` }],
    scripts:
      path === "/"
        ? [
            {
              type: "application/ld+json",
              children: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LegalService",
                name: office.name,
                telephone: office.phone,
                email: office.email,
                url: "https://tharcisleiteadvocacia.com.br",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Rua José Passador, 565, Nova Estrela",
                  addressLocality: "Estrela do Norte",
                  addressRegion: "SP",
                  postalCode: "19230-000",
                  addressCountry: "BR",
                },
              }),
            },
          ]
        : [],
  };
}
