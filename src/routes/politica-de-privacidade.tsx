import { createFileRoute } from '@tanstack/react-router';
import { PrivacyPage } from '@/components/site/pages';
import { pageHead } from '@/lib/site-seo';
export const Route = createFileRoute('/politica-de-privacidade')({ head: () => pageHead('Política de privacidade', 'Como o escritório Tharcis Leite trata dados pessoais, seus direitos e os canais para solicitações de privacidade.', '/politica-de-privacidade'), component: PrivacyPage });
