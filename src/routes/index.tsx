import { createFileRoute } from '@tanstack/react-router';
import { HomePage } from '@/components/site/home';
import { pageHead } from '@/lib/site-seo';
export const Route = createFileRoute('/')({
  head: () => pageHead('Tharcis José Leite da Silva — advogado', 'Advocacia em Estrela do Norte/SP. Direito do Trabalho, Previdenciário, Civil e do Consumidor. OAB/SP 348.515 e OAB/PR 83.513.', '/'),
  component: HomePage,
});
