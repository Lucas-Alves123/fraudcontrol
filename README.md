<h1 align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shield-alert.svg" width="40" alt="Shield"/>
  <br>
  FraudControl - Enterprise Anti-Fraud & Compliance Dashboard
</h1>

<p align="center">
  Uma plataforma administrativa moderna focada na <b>redução de SLA de análise de fraudes</b>, mitigação de riscos financeiros e auditoria de segurança (Compliance).
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="TailwindCSS" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
</p>

---

## 📖 Visão Geral do Produto (Business Value)

O **FraudControl** não é apenas uma interface de tabelas; é uma ferramenta de suporte à decisão crítica. Em instituições bancárias, o tempo que um analista leva para julgar se uma transação é legítima ou fraudulenta afeta diretamente a experiência do cliente e a saúde financeira da empresa.

Este projeto resolve o problema da fragmentação de informações. Ele agrega **Telemetria de Dispositivos, Reputação de IPs (Geofencing), Histórico do Cliente e Scores de Inteligência Artificial** em uma única camada visual. O objetivo arquitetural foi reduzir o tempo de investigação (*Time to Resolution*) de minutos para segundos, evitando a fadiga cognitiva do operador humano.

---

## 🔒 Funcionalidades de Segurança e Compliance

Para garantir que o sistema não apenas detecte ameaças externas, mas também se proteja de ameaças internas (Insiders) e vazamentos de tela, o FraudControl conta com:

*   **Autenticação MFA (Assinatura Digital) para Ações Destrutivas:** O analista não pode aprovar ou bloquear uma transação com um "clique acidental". O sistema intercepta o fluxo e exige um PIN de Segurança de 4 dígitos.
*   **Trilha de Auditoria (Audit Logs Imutáveis):** Uma aba dedicada ao Compliance. Registra estritamente *quem* fez *o que*, a *qual* hora, apontando o autor da ação (Admin, Analista ou o próprio Motor da IA).
*   **Gestão Dinâmica de Motor de Regras:** Uma página de configurações onde supervisores podem alterar limites operacionais (ex: gatilho de Pix de Alto Valor) e travas geográficas (ex: bloquear requisições da rede Tor).
*   **Auto-Lock (Bloqueio de Sessão por Inatividade):** Se o analista se ausentar do posto de trabalho, o sistema ativa um overlay *Glassmorphism* que borra toda a interface (prevenindo vazamento de dados na tela) e exige a senha de destravamento.

---

## 🧠 Arquitetura de Software e UX/UI

Desenvolvido sob os princípios de **Engenharia de Front-end Moderna**, a aplicação é uma *Single Page Application (SPA)* rápida e responsiva.

### Padrões de Design de Interface
1. **Redução de Carga Cognitiva (Progressive Disclosure):** Listas principais contêm apenas metadados essenciais. A análise profunda da telemetria e o Score de Risco estão encapsulados no fluxo de "Dossiê do Alerta", evitando poluição visual.
2. **Psicologia das Cores:** Em sistemas críticos, a fadiga visual induz ao erro. O layout utiliza tons pastéis frios e fundos limpos, reservando cores saturadas de alerta (Vermelho, Amarelo e Verde) estritamente para o *status* de risco e botões de decisão.

### Gerenciamento de Estado e Reatividade
A aplicação utiliza o ecossistema React (`useState`, `useEffect`) para simular reatividade em tempo real (Mock reativo). Ao invocar uma ação de bloqueio, o estado transita instantaneamente, as *badges* mudam de cor, os logs são "gerados" e a UI reflete a alteração com animações fluidas, fornecendo *feedback* instantâneo ao usuário.

---

## 🚀 Como testar localmente (Getting Started)

A aplicação foi otimizada com **Vite** para inicialização em frações de segundo.

### Pré-requisitos
*   Node.js (v18+)
*   NPM ou Yarn

### Passo a Passo

1. **Clone o repositório:**
```bash
git clone https://github.com/Lucas-Alves123/fraudcontrol.git
```

2. **Acesse o diretório do frontend:**
```bash
cd fraudcontrol/frontend
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Inicie o ambiente de desenvolvimento:**
```bash
npm run dev
```

Abra o seu navegador no endereço fornecido pelo Vite (geralmente `http://localhost:5173`). 
> **Credenciais de Teste:**
> E-mail: `admin@banco.com.br`
> Senha: `admin`

---

## 📸 Demonstração Visual (Screenshots)

*(Dica: Substitua estes textos pelos links reais dos seus screenshots após upar no Github)*

*   **[Insira Imagem 1: Tela de Login Dark]** - *Acesso restrito corporativo.*
*   **[Insira Imagem 2: Dashboard]** - *Visão geral dos KPIs e transações.*
*   **[Insira Imagem 3: Modal de Dossiê de Alerta]** - *Onde a investigação cruza telemetria, IP e Scores de Risco.*
*   **[Insira Imagem 4: Bloqueio de Tela]** - *Prevenção de vazamento de dados.*

---

## 👨‍💻 Autor

Criado e arquitetado por **Lucas Alves**. 

Entusiasta da criação de produtos digitais robustos, unindo código limpo (Clean Code) a interfaces de alta performance. 
Conecte-se comigo:
🔗 **[Meu LinkedIn](https://www.linkedin.com/in/lucas-alves/)**
