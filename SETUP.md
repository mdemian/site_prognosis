# Setup do Projeto Prognosis

## Pré-requisitos

- Node.js 18+ 
- npm ou yarn
- Git

## Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/prognosis/site-prognosis.git
cd site-prognosis
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure as variáveis de ambiente**
```bash
cp env.example .env.local
```

Edite o arquivo `.env.local` com suas configurações:
```bash
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# HubSpot
HUBSPOT_PORTAL_ID=your-portal-id
HUBSPOT_API_KEY=your-api-key

# Calendly
NEXT_PUBLIC_CALENDLY_URL=https://calendly.com/your-username

# LinkedIn
NEXT_PUBLIC_LINKEDIN_PARTNER_ID=your-partner-id
```

4. **Execute o projeto em desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

O site estará disponível em: http://localhost:3000

## Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Build para produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa ESLint
npm run type-check   # Verifica tipos TypeScript

# Análise
npm run analyze      # Analisa bundle (se configurado)
npm run lighthouse   # Executa Lighthouse (se configurado)
```

## Estrutura do Projeto

```
site-prognosis/
├── app/                    # App Router (Next.js 14)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   └── globals.css        # Estilos globais
├── components/            # Componentes React
│   ├── Header.tsx         # Cabeçalho
│   ├── Hero.tsx           # Seção hero
│   ├── Metrics.tsx        # Métricas/KPIs
│   ├── Solutions.tsx      # Soluções
│   ├── Cases.tsx          # Cases de sucesso
│   ├── Testimonials.tsx   # Depoimentos
│   ├── CTASection.tsx     # Call-to-action
│   ├── Footer.tsx         # Rodapé
│   └── Analytics.tsx      # Analytics
├── public/                # Arquivos estáticos
│   ├── prognosis.svg      # Logo da empresa
│   ├── robots.txt         # SEO
│   ├── sitemap.xml        # Sitemap
│   └── manifest.json      # PWA
├── styles/                # Estilos adicionais
├── types/                 # Tipos TypeScript
├── utils/                 # Utilitários
├── lib/                   # Bibliotecas/configurações
├── package.json           # Dependências
├── tailwind.config.js     # Configuração Tailwind
├── next.config.js         # Configuração Next.js
├── tsconfig.json          # Configuração TypeScript
└── README.md              # Documentação principal
```

## Configurações

### Tailwind CSS
O projeto usa Tailwind CSS com configurações customizadas:
- Cores da marca (primary: #FE5302, secondary: #02102C)
- Tipografia (Inter + Source Sans Pro)
- Componentes customizados (botões, cards, etc.)
- Animações e transições

### TypeScript
Configurado com:
- Strict mode habilitado
- Path mapping para imports
- Tipos para Next.js 14

### ESLint & Prettier
Configurado para:
- Next.js
- TypeScript
- Tailwind CSS
- Acessibilidade

## Deploy

### Vercel (Recomendado)
1. Conecte seu repositório ao Vercel
2. Configure as variáveis de ambiente
3. Deploy automático a cada push

### Outras Plataformas
- **Netlify**: Compatível
- **Cloudflare Pages**: Compatível
- **AWS Amplify**: Compatível

## Integrações

### HubSpot
1. Crie uma conta no HubSpot
2. Configure o portal ID e API key
3. Crie formulários no HubSpot
4. Configure webhooks (opcional)

### Google Analytics 4
1. Crie uma propriedade no GA4
2. Configure o Measurement ID
3. Configure eventos customizados

### Calendly
1. Crie uma conta no Calendly
2. Configure o link de agendamento
3. Integre com Google Calendar

## Performance

### Otimizações Implementadas
- **Images**: Next.js Image com WebP/AVIF
- **Fonts**: Google Fonts otimizadas
- **Code Splitting**: Automático
- **Caching**: Edge + ISR
- **Bundle**: Tree shaking

### Monitoramento
- **Core Web Vitals**: Lighthouse
- **Real User Monitoring**: GA4
- **Error Tracking**: Sentry (opcional)

## SEO

### Configurações
- Meta tags dinâmicas
- Structured data (Schema.org)
- Sitemap XML
- Robots.txt
- Open Graph

### Ferramentas Recomendadas
- **Google Search Console**
- **Google Analytics 4**
- **Screaming Frog** (auditoria)
- **Lighthouse** (performance)

## Acessibilidade

### Checklist WCAG 2.2 AA
- [ ] Contraste mínimo 4.5:1
- [ ] Navegação por teclado
- [ ] Screen reader compatibility
- [ ] Foco visível
- [ ] Alt text para imagens
- [ ] Semantic HTML

### Ferramentas de Teste
- **axe DevTools**
- **WAVE**
- **Lighthouse Accessibility**

## Troubleshooting

### Problemas Comuns

**Erro de build**
```bash
# Limpe cache
rm -rf .next
npm run build
```

**Problemas de dependências**
```bash
# Limpe node_modules
rm -rf node_modules package-lock.json
npm install
```

**Problemas de TypeScript**
```bash
# Verifique tipos
npm run type-check
```

**Problemas de ESLint**
```bash
# Corrija automaticamente
npm run lint -- --fix
```

### Logs de Debug
```bash
# Next.js debug
DEBUG=* npm run dev

# Tailwind debug
TAILWIND_MODE=watch npm run dev
```

## Contribuição

1. Fork o repositório
2. Crie uma branch para sua feature
3. Faça commit das mudanças
4. Push para a branch
5. Abra um Pull Request

### Padrões de Código
- **TypeScript**: Strict mode
- **ESLint**: Configuração Next.js
- **Prettier**: Formatação automática
- **Commits**: Conventional Commits

## Suporte

- **Documentação**: README.md
- **Issues**: GitHub Issues
- **Email**: tech@prognosis.com.br

---

## Próximos Passos

1. **Configure as integrações** (HubSpot, GA4, Calendly)
2. **Personalize o conteúdo** (textos, imagens, cases)
3. **Configure o domínio** (prognosis.com.br)
4. **Implemente o CMS** (Strapi)
5. **Configure monitoramento** (logs, alertas)
6. **Teste de performance** (Lighthouse, Core Web Vitals)
7. **Deploy em produção** (Vercel)
8. **Configure SEO** (Search Console, sitemap)
