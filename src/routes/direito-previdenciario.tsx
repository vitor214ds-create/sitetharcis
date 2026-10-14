import { createFileRoute } from '@tanstack/react-router';
import { AreaPage } from '@/components/site/pages';
import { pageHead } from '@/lib/site-seo';
export const Route = createFileRoute('/direito-previdenciario')({ head: () => pageHead('Direito Previdenciário', 'Análise de aposentadorias, benefícios por incapacidade, pensões e planejamento previdenciário com atenção individual.', '/direito-previdenciario'), component: () => <AreaPage index={1}/> });
