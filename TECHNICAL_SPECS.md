# Especificações Técnicas - Site Prognosis

## Stack Tecnológica

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Styling**: Tailwind CSS
- **Componentes**: Headless UI + Heroicons
- **Animações**: Framer Motion
- **Formulários**: React Hook Form + Zod

### Backend & CMS
- **CMS**: Strapi (Headless)
- **API**: REST + GraphQL
- **Autenticação**: JWT
- **Upload**: Cloudinary/AWS S3

### Deploy & Infraestrutura
- **Hosting**: Vercel/Cloudflare Pages
- **CDN**: Cloudflare
- **Domínio**: prognosis.com.br
- **SSL**: Automático

### Integrações
- **CRM**: HubSpot
- **Analytics**: GA4 + GTM
- **Agendamento**: Calendly
- **Email**: SendGrid/Resend
- **Busca**: Algolia (opcional)

## Arquitetura de Performance

### Core Web Vitals Targets
- **LCP**: ≤2.5s
- **INP**: ≤200ms
- **CLS**: ≤0.1
- **FCP**: ≤1.8s

### Otimizações Implementadas
- **Images**: Next.js Image com WebP/AVIF
- **Fonts**: Google Fonts com display=swap
- **Code Splitting**: Automático por rota
- **Caching**: Edge caching + ISR
- **Bundle**: Tree shaking + minificação

### Performance Budget
| Página | HTML | CSS | JS | Imagens | Total |
|--------|------|-----|----|---------|-------|
| Home | 15KB | 25KB | 45KB | 80KB | 165KB |
| Solução | 12KB | 20KB | 35KB | 60KB | 127KB |
| Case | 10KB | 15KB | 25KB | 40KB | 90KB |
| Blog | 8KB | 12KB | 20KB | 30KB | 70KB |

## SEO & Acessibilidade

### SEO Técnico
- **Meta Tags**: Dinâmicas por página
- **Structured Data**: Schema.org completo
- **Sitemap**: XML automático
- **Robots.txt**: Configurado
- **Canonical URLs**: Implementados
- **Open Graph**: Para redes sociais

### Acessibilidade (WCAG 2.2 AA)
- **Contraste**: Mínimo 4.5:1
- **Navegação**: Teclado completo
- **Screen Readers**: ARIA labels
- **Foco**: Visível e lógico
- **Alt Text**: Para todas as imagens
- **Semantic HTML**: Estrutura correta

## Segurança

### Headers de Segurança
```http
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

### LGPD Compliance
- **Consentimento**: Checkbox obrigatório
- **Base Legal**: Legitimate Interest + Consent
- **Retenção**: 2-5 anos conforme uso
- **DSR**: Direito de exclusão implementado
- **Cookies**: Banner de consentimento

## Estrutura de Dados

### CMS Schema (Strapi)
```typescript
// Solução
interface Solucao {
  id: number
  title: string
  slug: string
  hero: {
    title: string
    subtitle: string
    cta: string
  }
  descricao: string
  beneficios: string[]
  casos_uso: string[]
  industria: Industria[]
  cases: Case[]
  published_at: string
}

// Case
interface Case {
  id: number
  title: string
  slug: string
  cliente: string
  industria: Industria
  desafio: string
  solucao: string
  resultados: string[]
  depoimento: string
  solucao: Solucao[]
  published_at: string
}

// Post
interface Post {
  id: number
  title: string
  slug: string
  excerpt: string
  content: string
  author: Autor
  tags: Tag[]
  published_at: string
  meta_description: string
}
```

## Eventos de Analytics

### GA4 Events
```typescript
// CTA Click
gtag('event', 'cta_click', {
  button_type: 'primary',
  page: 'home',
  button_text: 'Agendar diagnóstico'
})

// Form Submit
gtag('event', 'form_submit', {
  form_type: 'contact',
  page: 'contact',
  form_fields: ['name', 'email', 'company']
})

// Case Filter
gtag('event', 'case_filter_use', {
  filter_type: 'industry',
  filter_value: 'farma',
  page: 'cases'
})

// ROI Calculator
gtag('event', 'roi_calculated', {
  calculator_type: 'supply_chain',
  result_value: '300%',
  page: 'roi-calculator'
})
```

## Integrações

### HubSpot
```typescript
// Form Submission
const submitToHubSpot = async (formData: ContactForm) => {
  const response = await fetch('/api/hubspot/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...formData,
      portalId: process.env.HUBSPOT_PORTAL_ID,
      formId: 'contact-form-id'
    })
  })
  return response.json()
}
```

### Calendly
```typescript
// Embed Calendly
const CalendlyWidget = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)
    
    return () => document.body.removeChild(script)
  }, [])
  
  return (
    <div 
      className="calendly-inline-widget" 
      data-url={process.env.NEXT_PUBLIC_CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  )
}
```

## Monitoramento

### Observabilidade
- **Logs**: Centralizados no CloudWatch
- **RUM**: Real User Monitoring com GA4
- **Alertas**: 5xx errors, performance
- **Uptime**: Pingdom + Uptime Robot

### Métricas de Negócio
- **Conversão**: ≥3% CVR "Fale com Especialista"
- **Leads**: ≥20 MQL/mês
- **Qualificação**: ≥60% SQL rate
- **Tempo de resposta**: <2h

## Deploy & CI/CD

### Pipeline
```yaml
# .github/workflows/deploy.yml
name: Deploy to Production
on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Environment Variables
```bash
# Production
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
HUBSPOT_PORTAL_ID=123456
HUBSPOT_API_KEY=your-api-key
STRAPI_URL=https://cms.prognosis.com.br
STRAPI_API_TOKEN=your-token
```

## Testes

### Estratégia de Testes
- **Unit**: Jest + Testing Library
- **Integration**: API routes
- **E2E**: Playwright
- **Visual**: Chromatic

### Critérios de Aceite (Gherkin)
```gherkin
Feature: Formulário de Contato
  Scenario: Envio com consentimento LGPD
    Given que estou na página "Contato"
    When envio o formulário com campos obrigatórios
    And marco o consentimento LGPD
    Then devo ver confirmação de envio
    And o lead deve ser criado no HubSpot
    And devo receber email de confirmação
```

## Roadmap Técnico

### MVP (6-8 semanas)
- [x] Estrutura Next.js 14
- [x] Design System com Tailwind
- [x] Componentes principais
- [x] SEO básico
- [x] Formulários com validação
- [x] Integração GA4

### Fase 2 (8-12 semanas)
- [ ] CMS Strapi
- [ ] Blog dinâmico
- [ ] Calculadora ROI
- [ ] Assessment de maturidade
- [ ] Integração HubSpot completa
- [ ] Calendly

### Fase 3 (12-16 semanas)
- [ ] Busca com Algolia
- [ ] Portal do cliente
- [ ] API pública
- [ ] PWA completo
- [ ] A/B testing
- [ ] Analytics avançado

## Manutenção

### Atualizações
- **Dependências**: Renovate bot
- **Security**: Dependabot alerts
- **Performance**: Lighthouse CI
- **SEO**: Screaming Frog

### Backup
- **CMS**: Diário automático
- **Código**: GitHub
- **Assets**: CDN + S3
- **Database**: Strapi backup

---

## Contatos Técnicos

- **DevOps**: devops@prognosis.com.br
- **Frontend**: frontend@prognosis.com.br
- **Backend**: backend@prognosis.com.br
- **SEO**: seo@prognosis.com.br
