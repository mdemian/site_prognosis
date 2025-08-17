# Prognosis - Site Corporativo

## 1. Resumo Executivo

### Problema do Mercado
As empresas enfrentam desafios críticos na gestão de supply chain e operações, incluindo:
- Previsões de demanda imprecisas (erro médio de 20-40%)
- Planejamento tático fragmentado entre departamentos
- Otimização de produção subótima
- Falta de visibilidade em tempo real dos indicadores operacionais

### Solução Proposta pela Prognosis
Plataforma de Advanced Analytics & Operations Research que transforma dados em decisões estratégicas através de:
- Algoritmos de Machine Learning para previsão de demanda
- Otimização matemática para planejamento tático
- Simulação de cenários para otimização de produção
- Dashboard executivo com KPIs em tempo real

### ICP (Ideal Customer Profile)
- **Cargos**: Diretores de Supply Chain, VPs de Operações, Gerentes de Planejamento
- **Porte**: Empresas com faturamento >R$ 100M/ano
- **País**: Brasil (foco inicial)
- **Setores**: Manufatura, Varejo, Farma & Saúde, Logística

### KPIs Objetivo
- **Conversão**: ≥3% CVR "Fale com Especialista"
- **Leads**: ≥20 MQL/mês
- **Qualificação**: ≥60% SQL rate
- **Tempo de resposta**: <2h para leads qualificados

## 2. Pilares de Posicionamento

### 1. Insight → Decisão
Transformamos dados complexos em insights acionáveis que geram resultados mensuráveis.

### 2. Time-to-Value
Implementação em 8-12 semanas com ROI visível no primeiro trimestre.

### 3. Governança
Metodologia estruturada com acompanhamento contínuo e ajustes baseados em dados.

### 4. Conteúdo Aplicado
Conhecimento técnico traduzido em casos práticos e melhores práticas do mercado.

## 3. Arquitetura de Informação

```mermaid
flowchart TD
    Home --> Solucoes
    Home --> Industrias
    Home --> Cases
    Home --> Conteudos
    Home --> Recursos
    Home --> Sobre
    Home --> Carreiras
    Home --> Contato
    
    Solucoes --> |subpaginas| [Previsao de Demanda]
    Solucoes --> [Planejamento Tatico & S&OP]
    Solucoes --> [Otimizacao de Producao & Capacidade]
    Solucoes --> [Roteirizacao & Alocacao]
    Solucoes --> [Precificacao & Revenue]
    
    Cases --> [Hub com filtros]
    Conteudos --> [Blog/Webinars/Podcast]
    Recursos --> [Calculadora ROI]
    Recursos --> [Assessment de Maturidade]
```

## 4. Páginas-Chave

### Home
**Objetivo**: Capturar atenção e direcionar para soluções específicas

**Herói**:
- H1: "Transforme dados em decisões estratégicas"
- Subtítulo: "Advanced Analytics & Operations Research para otimizar sua supply chain"
- CTA Primário: "Agendar diagnóstico gratuito"
- CTA Secundário: "Ver cases de sucesso"

**Seções**:
1. Métricas de impacto (redução WAPE, aumento OTIF)
2. Soluções em destaque
3. Cases de sucesso
4. Depoimentos de clientes
5. Próximos webinars

### Soluções (Template)
**Objetivo**: Educar e qualificar leads

**Herói**:
- H1: "[Nome da Solução]"
- Subtítulo: "Descrição técnica + benefício principal"
- CTA: "Solicitar demonstração"

**Seções**:
1. Desafio do mercado
2. Nossa abordagem
3. Benefícios quantificados
4. Casos de uso
5. FAQ técnico

### Cases (Template)
**Objetivo**: Prova social e credibilidade

**Estrutura**:
- Contexto do cliente
- Desafio enfrentado
- Solução implementada
- Resultados alcançados
- Depoimento do cliente

## 5. Componentes & Design System

### Tokens de Design
```css
/* Tipografia */
--font-primary: 'Inter', sans-serif;
--font-secondary: 'Source Sans Pro', sans-serif;

/* Escala de espaçamento */
--space-xs: 0.25rem;
--space-sm: 0.5rem;
--space-md: 1rem;
--space-lg: 1.5rem;
--space-xl: 2rem;

/* Bordas */
--radius-sm: 0.25rem;
--radius-md: 0.5rem;
--radius-lg: 1rem;

/* Sombras */
--shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
--shadow-md: 0 4px 6px rgba(0,0,0,0.1);
--shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
```

### Componentes Base
- Hero (H1, subtítulo, CTAs)
- Métricas/KPI (cards com números)
- Card (soluções, cases)
- Tabela KPI (comparativos)
- Accordion/FAQ
- Stepper (assessment)
- Form (validação + máscara)
- Pagination
- Tag/Chip
- Alert

## 6. CMS Headless - Tipos de Conteúdo

| Conteúdo | Campos | Tipos | Validação | Relacionamentos |
|----------|--------|-------|-----------|-----------------|
| solucao | title, slug, hero, descricao, beneficios, casos_uso | Text, Rich Text, Array | Required | industria, cases |
| case | title, slug, cliente, industria, desafio, solucao, resultados, depoimento | Text, Rich Text, Media | Required | solucao, industria |
| post | title, slug, excerpt, content, author, tags, published_at | Text, Rich Text, Date | Required | autor, tags |
| material_rico | title, slug, tipo, arquivo, descricao, gated | Text, File, Boolean | Required | - |
| pagina_estatica | title, slug, content, meta_description | Text, Rich Text | Required | - |
| faq | pergunta, resposta, categoria | Text, Rich Text | Required | - |
| evento_webinar | title, slug, data, descricao, palestrante, registro | Text, Date, Rich Text | Required | autor |
| autor | nome, bio, foto, linkedin | Text, Media, URL | Required | posts, eventos |
| industria | nome, slug, descricao, icon | Text, Media | Required | solucoes, cases |

## 7. SEO Técnico & Conteúdo

### Plano de Conteúdo (90 dias)

**Clusters por Solução**:
- Previsão de Demanda: 15 posts
- Planejamento Tático: 12 posts  
- Otimização de Produção: 10 posts
- Roteirização: 8 posts
- Precificação: 5 posts

**Títulos Iniciais**:
1. "Como reduzir WAPE em 30% com Machine Learning"
2. "S&OP: 5 erros que comprometem o planejamento"
3. "Otimização de produção: casos práticos"
4. "Roteirização inteligente: economia de 25% em combustível"
5. "Precificação dinâmica: maximizando receita"

### Schema.org
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Prognosis",
  "url": "https://prognosis.com.br",
  "logo": "https://prognosis.com.br/logo.svg",
  "description": "Advanced Analytics & Operations Research"
}
```

### Metas de Performance
- **LCP**: ≤2.5s
- **INP**: ≤200ms  
- **CLS**: ≤0.1
- **FCP**: ≤1.8s

## 8. Acessibilidade & Segurança

### Checklist WCAG 2.2 AA
- [ ] Contraste mínimo 4.5:1
- [ ] Navegação por teclado
- [ ] Rótulos para formulários
- [ ] Textos alternativos
- [ ] Foco visível
- [ ] Ordem de tab lógica

### Segurança
```http
# Headers de Segurança
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Referrer-Policy: strict-origin-when-cross-origin
```

## 9. LGPD

### Mapeamento de Dados
| Formulário | Dados Coletados | Base Legal | Retenção |
|------------|-----------------|------------|----------|
| Contato | Nome, email, empresa, cargo | Legitimate Interest | 2 anos |
| Demo | Nome, email, empresa, telefone | Consent | 3 anos |
| Webinar | Nome, email, empresa | Consent | 2 anos |
| Assessment | Respostas anônimas | Legitimate Interest | 5 anos |

### Texto de Consentimento
"Concordo em receber comunicações da Prognosis sobre soluções de supply chain e analytics. Posso cancelar a qualquer momento."

## 10. Integrações

### CRM/Marketing (HubSpot)
- Forms com mapeamento automático
- Pipelines personalizados
- Campanhas segmentadas
- Lead scoring

### Agendamento (Calendly)
- Integração com Google Calendar
- Eventos automáticos no CRM
- Confirmações por email

### Analytics (GA4 + GTM)
- Eventos de conversão
- Enhanced ecommerce
- User journey tracking
- A/B testing

### Busca (Algolia)
- Search instantâneo
- Filtros por categoria
- Analytics de busca

## 11. Eventos de Analytics

| Evento | Categoria | Rótulos | Gatilho | Propriedades | Prioridade | Meta |
|--------|-----------|---------|---------|--------------|------------|------|
| cta_click | engagement | button_type, page | Click | button_text, page_url | Alta | 15% |
| form_submit | conversion | form_type, page | Submit | form_fields, page_url | Alta | 5% |
| case_filter_use | engagement | filter_type | Change | filter_value, page_url | Média | 25% |
| roi_calculated | conversion | calculator_type | Calculate | result_value, page_url | Média | 10% |
| assessment_completed | conversion | assessment_type | Complete | score, duration | Alta | 8% |
| webinar_register | conversion | webinar_topic | Register | topic, date | Alta | 12% |

## 12. Backlog (MVP → Evolução)

### MVP (6-8 semanas)

| ID | Épico | História | Prioridade | Dependências |
|----|-------|---------|------------|--------------|
| MVP-001 | Home | Implementar hero com CTAs | Alta | - |
| MVP-002 | Formulários | Form de contato com LGPD | Alta | - |
| MVP-003 | SEO | Sitemap e meta tags | Alta | - |
| MVP-004 | Performance | Otimização Core Web Vitals | Alta | - |
| MVP-005 | Cases | Hub com 3 cases | Alta | - |
| MVP-006 | Soluções | 4 páginas de solução | Alta | - |
| MVP-007 | Integração | HubSpot + GA4 | Alta | - |
| MVP-008 | Acessibilidade | Navegação por teclado | Média | - |
| MVP-009 | Conteúdo | 6 posts técnicos | Média | - |
| MVP-010 | Calendly | Agendamento de demo | Média | - |

### Evolução (Fase 2)

| ID | Épico | História | Prioridade | Dependências |
|----|-------|---------|------------|--------------|
| EVO-001 | Calculadora | ROI calculator | Média | MVP-002 |
| EVO-002 | Assessment | Maturidade digital | Média | MVP-002 |
| EVO-003 | Busca | Algolia integration | Baixa | MVP-005 |
| EVO-004 | Blog | Sistema completo | Média | MVP-009 |
| EVO-005 | Webinars | Plataforma de eventos | Baixa | MVP-010 |

## 13. Critérios de Aceite - Exemplos (Gherkin)

### Envio de Formulário com LGPD
```gherkin
Feature: Formulário de Contato com Consentimento LGPD
  As a visitor
  I want to submit a contact form
  So that I can get in touch with Prognosis

  Scenario: Lead com consentimento LGPD
    Given que estou na página "Contato"
    When envio o formulário com campos obrigatórios e marco o consentimento
    Then devo ver uma confirmação de envio
    And o lead deve ser criado no CRM com a base legal registrada
    And devo receber um email de confirmação
```

### Filtro de Cases
```gherkin
Feature: Filtro de Cases por Indústria e KPI
  As a visitor
  I want to filter cases by industry and KPI
  So that I can find relevant success stories

  Scenario: Filtro de cases por indústria e KPI
    Given que estou no hub "Cases"
    When seleciono "Farma & Saúde" e "Acurácia de Previsão"
    Then devo ver apenas cases com esses atributos
    And devo ver paginação quando houver mais de 12 resultados
    And o filtro deve ser mantido na URL
```

### Agendamento de Diagnóstico
```gherkin
Feature: Agendamento de Diagnóstico via Calendly
  As a qualified lead
  I want to schedule a diagnostic session
  So that I can understand how Prognosis can help

  Scenario: Agendamento de diagnóstico
    Given que cliquei em "Fale com um Especialista"
    When escolho um horário no Calendly
    Then recebo e-mail de confirmação
    And o evento é registrado como conversão no GA4
    And recebo um lembrete 1h antes
```

## 14. Roadmap Editorial (90 dias)

### Quinzena 1-2
- "Como reduzir WAPE em 30% com Machine Learning"
- "S&OP: 5 erros que comprometem o planejamento"
- Webinar: "Tendências em Supply Chain 2024"

### Quinzena 3-4  
- "Otimização de produção: casos práticos"
- "Roteirização inteligente: economia de 25% em combustível"
- Case: Cliente Farma (redução de 40% em estoque)

### Quinzena 5-6
- "Precificação dinâmica: maximizando receita"
- "KPIs essenciais para Supply Chain"
- Material rico: "Guia de Maturidade Digital"

### Quinzena 7-8
- "Machine Learning vs Métodos Tradicionais"
- "Como implementar S&OP em 90 dias"
- Webinar: "ROI em Analytics"

## 15. Performance Budget & Observabilidade

### Orçamento por Página
| Página | HTML | CSS | JS | Imagens | Total |
|--------|------|-----|----|---------|-------|
| Home | 15KB | 25KB | 45KB | 80KB | 165KB |
| Solução | 12KB | 20KB | 35KB | 60KB | 127KB |
| Case | 10KB | 15KB | 25KB | 40KB | 90KB |
| Blog | 8KB | 12KB | 20KB | 30KB | 70KB |

### Observabilidade
- **Logs**: Centralizados no CloudWatch
- **Monitoramento**: Uptime Robot + Pingdom
- **RUM**: Real User Monitoring com GA4
- **Alertas**: 5xx errors, LCP > 2.5s, INP > 200ms

## 16. Riscos, Premissas e Fora de Escopo

### Riscos
- **Escassez de cases mensuráveis**: Mitigação com cases anônimos
- **Complexidade técnica**: Mitigação com conteúdo educativo
- **Concorrência**: Diferenciação por expertise técnica

### Premissas
- Designer/redator disponível
- Aprovação de stakeholders em 48h
- Conteúdo técnico fornecido pela equipe

### Fora de Escopo (Fase 2)
- Portal do cliente
- Integração com ERPs
- Mobile app
- API pública

## 17. Premissas Declaradas

### Dados Assumidos
- **Proposta curta**: "Transformamos dados em decisões estratégicas"
- **Mercados**: Manufatura, Varejo, Farma & Saúde, Logística
- **Diferenciais**: Expertise técnica, time-to-value, casos comprovados
- **Casos de uso**: Previsão de demanda, S&OP, Otimização de produção
- **Stack**: Next.js 14, Tailwind, Strapi, HubSpot, GA4

### Padrões Aplicados
- Tom técnico e direto
- Foco em resultados quantificados
- CTAs específicos e acionáveis
- Design moderno e profissional

---

## Perguntas para Refinamento

1. **Cases de sucesso**: Quais são os 3 casos mais impactantes para destacar no MVP?

2. **Diferenciais específicos**: Quais são os 3-5 diferenciais únicos da Prognosis vs concorrentes?

3. **Métricas de referência**: Quais são os KPIs atuais dos clientes (antes/depois)?

4. **Conteúdo técnico**: Quem será responsável pela criação do conteúdo técnico inicial?

5. **Aprovação**: Qual é o processo de aprovação para design e conteúdo?
