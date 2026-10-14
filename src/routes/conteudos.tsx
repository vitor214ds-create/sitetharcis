import { createFileRoute } from '@tanstack/react-router';
import { ContentsPage } from '@/components/site/pages';
import { pageHead } from '@/lib/site-seo';
export const Route = createFileRoute('/conteudos')({ head: () => pageHead('Conteúdos e orientações jurídicas', 'Informações responsáveis sobre direitos trabalhistas, previdenciários, civis e do consumidor. Guias para decisões conscientes.', '/conteudos'), component: ContentsPage });
