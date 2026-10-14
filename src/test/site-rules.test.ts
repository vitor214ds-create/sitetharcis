import { describe, expect, it } from "vitest";
import { office, pagePaths } from "@/lib/site-data";
import { pageHead } from "@/lib/site-seo";
describe("Official office details", () => {
  it("uses the official WhatsApp destination", () => {
    expect(office.whatsapp).toBe("https://wa.me/5518996185053");
  });
  it("uses the official email destination", () => {
    expect(office.email).toBe("tharcisleite@adv.oabsp.org.br");
  });
  it("retains both official bar registrations", () => {
    expect(office.registrations).toEqual(["OAB/SP 348.515", "OAB/PR 83.513"]);
  });
  it("retains the official office location", () => {
    expect(office.address).toBe("Rua José Passador, 565 · Vila Estrela");
    expect(office.city).toBe("Estrela do Norte/SP · CEP 19230-000");
  });
  it("covers every requested public page", () => {
    expect(pagePaths).toEqual([
      "/",
      "/sobre",
      "/direito-do-trabalho",
      "/direito-previdenciario",
      "/direito-civil",
      "/direito-do-consumidor",
      "/trabalhadores-rodovias-frigorificos",
      "/conteudos",
      "/contato",
      "/politica-de-privacidade",
    ]);
  });
  it("uses self-referencing canonical URLs", () => {
    for (const path of pagePaths)
      expect(pageHead("Title", "Description", path).links[0]?.href).toBe(
        `https://sitetharcis.lovable.app${path}`,
      );
  });
});
