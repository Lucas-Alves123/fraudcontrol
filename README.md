<h1 align="center">
  <img src="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/shield-alert.svg" width="40" alt="Shield"/>
  <br>
  FraudControl - Enterprise Anti-Fraud Dashboard
</h1>

<p align="center">
  Uma plataforma administrativa moderna focada na <b>redução de SLA de análise de fraudes</b>, mitigação de riscos financeiros e auditoria de segurança (Compliance).
</p>

<p align="center">
  <img alt="React" src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB">
  <img alt="Vite" src="https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white">
</p>

---

## 📖 O que é este sistema?

O **FraudControl** é um painel de controle (*Dashboard*) criado para profissionais de segurança, prevenção a fraudes e *compliance* em instituições financeiras. 

A ideia do sistema é atuar como uma **Torre de Controle**. Em vez de usar planilhas e dezenas de abas soltas, o analista financeiro usa essa interface para visualizar tudo que está acontecendo no banco em tempo real. O sistema não apenas lista as transações, mas também:
*   Avisa quando um cliente faz um Pix fora do padrão financeiro dele.
*   Mostra qual aparelho (celular/PC) e qual conexão (IP) o cliente usou (alertando se for um acesso pela Deep Web ou VPN).
*   Fornece um Score de Fraude gerado por IA para ajudar o analista humano a tomar uma decisão rápida.
*   Permite o bloqueio reativo e imediato de uma conta suspeita, evitando que o golpista leve o dinheiro.

Tudo isso foi desenhado focado em **Velocidade** e **Ergonomia**. O design é limpo de propósito para evitar que os olhos do analista se cansem (fadiga visual) após analisar centenas de transações ao longo do dia.

---

## 🛠️ Ferramentas Utilizadas (Stack Tecnológico)

O projeto foi construído utilizando as ferramentas mais modernas do ecossistema de desenvolvimento Front-end:

*   **React (v18):** Biblioteca principal utilizada para a construção de toda a interface de usuário baseada em componentes reutilizáveis.
*   **Vite:** Ferramenta de *Build* super rápida, substituindo o Webpack, o que garante inicialização e *Hot Module Replacement* instantâneos durante o desenvolvimento.
*   **TypeScript:** Traz tipagem estática ao JavaScript, o que evita bugs inesperados em produção e ajuda o editor de código a entender melhor os dados trafegados.
*   **CSS / UI Design (Glassmorphism):** O visual premium que simula texturas de vidro foi desenvolvido com CSS puro e variáveis semânticas, dispensando a sobrecarga de frameworks enormes.
*   **React Router Dom:** Gerenciamento das rotas, transformando a aplicação em uma verdadeira *Single Page Application* (SPA) rápida e sem recarregamentos (telas de Dashboard, Alertas, Clientes, etc.).
*   **Lucide React:** Biblioteca de ícones moderna, leve e vetorial, escolhida para dar o aspecto de interface corporativa limpa.
*   **React Hot Toast:** Utilizada para exibir os alertas de sistema ("Bloqueado com sucesso", "Transação aprovada") pulando na tela, dando o *feedback* imediato que o analista de operações exige.

---

## 🚀 Como rodar o projeto localmente (Passo a Passo)

Siga os passos abaixo para baixar e rodar este sistema na sua própria máquina (Você vai precisar do `Node.js` instalado).

1. **Baixe o projeto (Clone o repositório):**
Abra o seu terminal (Prompt de Comando ou VSCode) e digite:
```bash
git clone https://github.com/Lucas-Alves123/fraudcontrol.git
```

2. **Acesse a pasta do frontend:**
```bash
cd fraudcontrol/frontend
```

3. **Instale as ferramentas e bibliotecas:**
Esse comando baixa todas as ferramentas (React, Vite, ícones) listadas acima que fazem o projeto funcionar.
```bash
npm install
```

4. **Inicie o sistema:**
```bash
npm run dev
```

Abra o seu navegador (Chrome/Edge/Firefox) e acesse o endereço que o terminal gerar (geralmente será `http://localhost:5173`).

### Como entrar no sistema (Login)
Você será recebido por uma tela de login de segurança. Use as credenciais de teste abaixo para entrar:
> **E-mail:** `admin@banco.com.br`
> **Senha:** `admin`


