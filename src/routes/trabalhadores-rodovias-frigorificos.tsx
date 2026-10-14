import { createFileRoute } from '@tanstack/react-router';
import { WorkersPage } from '@/components/site/pages';
import { pageHead } from '@/lib/site-seo';
export const Route = createFileRoute('/trabalhadores-rodovias-frigorificos')({ head: () => pageHead('Trabalhadores de rodovias, construção e frigoríficos', 'Orientação trabalhista para construção pesada, rodovias e frigoríficos. Jornada, segurança e saúde ocupacional com análise individual.', '/trabalhadores-rodovias-frigorificos'), component: WorkersPage });
