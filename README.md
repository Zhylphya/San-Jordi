# San Jordi

Um pequeno projeto desenvolvido com Vue 3 como forma de estudo e prática de desenvolvimento Frontend.

A ideia foi criar uma experiência interativa inspirada em **Sant Jordi**, utilizando perguntas, imagens, animações e suporte a múltiplos idiomas.

O projeto começou de forma simples e foi sendo aprimorado durante o desenvolvimento, principalmente para praticar conceitos importantes do ecossistema Vue.

---

## Objetivo do projeto

Este projeto foi criado principalmente para **estudo e aprendizado**.

Durante o desenvolvimento, foram praticados conceitos como:

- Componentização com Vue
- Composition API
- `ref` e `computed`
- Props e eventos entre componentes
- `defineModel`
- Renderização condicional
- Transições com `<Transition>`
- Responsividade com Tailwind CSS
- Organização de dados e traduções
- Internacionalização básica
- Acessibilidade
- Organização e refatoração de código

Mais do que criar uma aplicação complexa, o objetivo foi entender melhor como estruturar uma interface interativa utilizando Vue.

---

## Funcionalidades

- Questionário interativo
- Perguntas acompanhadas de imagens
- Navegação entre perguntas
- Botões com comportamento dinâmico
- Tela final com opção de recomeçar
- Animações suaves entre perguntas
- Animações e estados de interação nos botões
- Interface responsiva
- Seleção de idioma
- Suporte para:
  - 🇧🇷 Português
  - 🏴 Català

---

## Tecnologias

- [Vue 3](https://vuejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PrimeVue](https://primevue.org/)
- pnpm

O projeto utiliza Vue 3, Tailwind CSS e PrimeVue como dependências principais. :contentReference[oaicite:2]{index=2}

A configuração do Vite utiliza os plugins oficiais para Vue e Tailwind CSS. :contentReference[oaicite:3]{index=3}

---

##  Estrutura

A aplicação foi organizada buscando separar responsabilidades entre página, componentes e dados.

```text
src/
│
├── asserts/
│   ├── buttonFinalImage/
│   ├── buttonImage/
│   └── styleImage/
│
├── components/
│   ├── languageSelector.vue
│   ├── questionButton.vue
│   └── questionContent.vue
│
├── data/
│   ├── questions.ts
│   └── translations.ts
│
├── pages/
│   └── Home.vue
│
└── ...