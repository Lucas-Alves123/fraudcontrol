# 🛡️ FraudControl - A Defesa Inteligente contra Fraudes Financeiras

Bem-vindo ao **FraudControl**! 

Se você não é da área de tecnologia, pense neste projeto como a "Torre de Controle" de um grande banco. É aqui que os especialistas em segurança visualizam, investigam e bloqueiam tentativas de golpes (como um Pix falso ou uma transação internacional suspeita) antes que o dinheiro do cliente seja perdido. 

Se você é da área de tecnologia, este é um **Painel de Administração (Dashboard) de nível Empresarial**, construído com as melhores práticas de Front-end para lidar com alta densidade de dados e proporcionar uma Experiência do Usuário (UX) impecável.

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

---

## 🚀 O que este sistema faz?

A ideia central é facilitar a vida de quem trabalha combatendo fraudes (analistas de compliance). O sistema resolve problemas reais de segurança através das seguintes telas e funcionalidades:

1. **Visão Geral (Dashboard):** Um resumo em tempo real do que está acontecendo no banco. Alertas críticos, dinheiro retido e clientes em risco, tudo em uma tela limpa e sem poluição visual.
2. **Dossiê de Investigação:** Quando o analista clica em uma transação suspeita, o sistema abre uma tela detalhada revelando informações ocultas: a origem do IP da pessoa, o aparelho de celular que ela usou, e o **Score de Fraude da Inteligência Artificial** (ex: 98% de chance de ser um golpe).
3. **Bloqueio Reativo:** Diferente de telas estáticas, ao clicar em "Bloquear Conta", o sistema reage na hora, travando a conta do fraudador em tempo real.
4. **Segurança Extrema (MFA):** Para bloquear alguém ou liberar um Pix alto, o analista é obrigado a digitar um PIN de 4 dígitos. Isso simula uma Assinatura Digital, garantindo que o clique não foi um "acidente".
5. **Logs de Auditoria (O "X-9" do sistema):** Tudo o que o analista faz fica gravado para sempre. Se alguém perguntar "quem bloqueou o João?", a aba de Auditoria terá o registro de data, hora e nome do responsável.
6. **Tela de Proteção Anti-Espião:** Se o analista se levantar para ir ao banheiro e deixar o sistema aberto, a tela inteira é borrada e bloqueada (Auto-Lock). Nenhuma informação vaza.

---

## 🧠 Arquitetura e Decisões Técnicas (Para Devs / Recrutadores)

Este projeto foi desenhado sob a ótica de um **Engenheiro de Software Pleno/Sênior**. O código não foi feito apenas para "funcionar", mas para ser sustentável, seguro e componentizado.

- **Gerenciamento de Estado Dinâmico:** Utilização avançada de `useState` no React para garantir que todas as tabelas e painéis reajam a cliques instantaneamente sem recarregar a página.
- **Progressive Disclosure (Revelação Progressiva):** Para não sobrecarregar cognitivamente o usuário, a tabela principal mostra apenas o básico. Dados pesados (Reputação de Rede, IPs e Histórico) ficam escondidos e só aparecem quando o modal "Ver Detalhes" é invocado.
- **Sistema de Cores (UI/UX):** Em operações de risco, a fadiga visual leva a erros humanos. Cores fortes (Vermelho e Verde) foram usadas estritamente para ações decisivas (Bloquear/Aprovar). O resto do layout usa tons neutros em um ambiente híbrido de *Glassmorphism*.
- **Roteamento Inteligente:** Construído como uma *Single Page Application* (SPA) rápida usando `react-router-dom`.

---

## 🛠️ Como rodar o projeto na sua máquina?

É super simples testar! Você só precisa ter o `Node.js` instalado.

1. **Faça o clone (baixe) o repositório:**
```bash
git clone https://github.com/Lucas-Alves123/fraudcontrol.git
```

2. **Entre na pasta principal do sistema:**
```bash
cd fraudcontrol/frontend
```

3. **Instale as dependências:**
```bash
npm install
```

4. **Ligue o servidor local:**
```bash
npm run dev
```

Abra o seu navegador e acesse o endereço que aparecerá no terminal (geralmente `http://localhost:5173`). Para passar pela tela de login de simulação, use:
*   **E-mail:** `admin@banco.com.br`
*   **Senha:** `admin`

---

## 👨‍💻 Autor

Projeto desenvolvido e arquitetado por **Lucas Alves**. 

Focado em criar soluções que unem interfaces modernas com regras de negócio seguras e escaláveis. Se achou o projeto interessante, bora nos conectar no [LinkedIn](https://www.linkedin.com/in/lucas-alves/)!
