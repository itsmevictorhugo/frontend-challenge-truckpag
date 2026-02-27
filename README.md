# 🎬 Frontend Challenge – Studio Ghibli Movies

Aplicação desenvolvida como parte de um desafio técnico frontend utilizando **React + TypeScript**, consumindo a API pública do Studio Ghibli.

O objetivo foi construir uma interface organizada, funcional e escalável, aplicando boas práticas de estruturação, gerenciamento de estado e persistência de dados.

---

# 🎯 Objetivo do Desafio

Desenvolver uma aplicação React que consome a API pública do Studio Ghibli e permita:

- Listagem de filmes
- Interações do usuário (favoritar, marcar como assistido)
- Filtros e ordenação
- Anotações e avaliação pessoal
- Persistência de dados
- Boas práticas de arquitetura e organização

---

# 🛠️ Tecnologias Utilizadas

- **React (versão mais recente)**
- **TypeScript**
- **Vite**
- **Zustand** (gerenciamento de estado global)
- **Zustand Persist Middleware** (persistência no LocalStorage)
- **TailwindCSS** (estilização)
- **Sonner** (toast notifications)
- **Vitest** (testes unitários)
- **Axios** (requisições HTTP)

---

# 📜 Requisitos Implementados

## ✅ Requisitos Obrigatórios

### 🎥 Listagem de Filmes

- [x] Imagem do filme
- [x] Título
- [x] Ano de lançamento
- [x] Duração
- [x] Sinopse
- [x] Diretor e Produtor
- [x] Nota de avaliação (`rt_score`)

### ⭐ Interações

- [x] Marcar filme como assistido
- [x] Marcar filme como favorito

### 🔎 Filtros

- [x] Filtrar por título
- [x] Buscar palavras do filtro na sinopse
- [x] Opção “Incluir sinopse na busca”
- [x] Highlight do texto buscado na sinopse
- [x] Filtrar por:
  - [x] Assistido
  - [x] Favorito
  - [x] Com anotação
  - [x] Número de estrelas

### 📝 Anotações

- [x] Adicionar anotação ao filme
- [x] Adicionar avaliação pessoal de 1 a 5 estrelas

### 🔀 Ordenação

Ordenação crescente e decrescente por:

- [x] Título
- [x] Duração
- [x] Nota (`rt_score`)
- [x] Avaliação pessoal

---

## ✨ Requisitos Desejáveis

- [x] Utilização de **TypeScript**
- [x] Responsividade básica
- [x] Persistência no LocalStorage:
  - [x] Metadados do filme (assistido, favorito, anotação, avaliação)
  - [x] Filtros selecionados
  - [x] Ordenação selecionada
- [x] Toast para:
  - [x] Marcar/desmarcar assistido
  - [x] Marcar/desmarcar favorito
  - [x] Adicionar/editar/remover anotação
- [x] Teste unitário (Vitest)
- [x] Separação clara de responsabilidades
- [x] Biblioteca de estilo (TailwindCSS)
- [x] Estado global (Zustand)
- [x] Gerenciamento de estado assíncrono via Axios

---

# 🧠 Arquitetura do Projeto

O projeto segue organização por **feature**, facilitando manutenção e escalabilidade:

# 🎬 Frontend Challenge – Studio Ghibli Movies

Aplicação desenvolvida como parte de um desafio técnico frontend utilizando **React + TypeScript**, consumindo a API pública do Studio Ghibli.

O objetivo foi construir uma interface organizada, funcional e escalável, aplicando boas práticas de estruturação, gerenciamento de estado e persistência de dados.

---

# 🎯 Objetivo do Desafio

Desenvolver uma aplicação React que consome a API pública do Studio Ghibli e permita:

- Listagem de filmes
- Interações do usuário (favoritar, marcar como assistido)
- Filtros e ordenação
- Anotações e avaliação pessoal
- Persistência de dados
- Boas práticas de arquitetura e organização

---

# 🛠️ Tecnologias Utilizadas

- **React (versão mais recente)**
- **TypeScript**
- **Vite**
- **Zustand** (gerenciamento de estado global)
- **Zustand Persist Middleware** (persistência no LocalStorage)
- **TailwindCSS** (estilização)
- **Sonner** (toast notifications)
- **Vitest** (testes unitários)
- Fetch API (requisições HTTP)

---

# 📜 Requisitos Implementados

## ✅ Requisitos Obrigatórios

### 🎥 Listagem de Filmes

- [x] Imagem do filme
- [x] Título
- [x] Ano de lançamento
- [x] Duração
- [x] Sinopse
- [x] Diretor e Produtor
- [x] Nota de avaliação (`rt_score`)

### ⭐ Interações

- [x] Marcar filme como assistido
- [x] Marcar filme como favorito

### 🔎 Filtros

- [x] Filtrar por título
- [x] Buscar palavras do filtro na sinopse
- [x] Opção “Incluir sinopse na busca”
- [x] Highlight do texto buscado na sinopse
- [x] Filtrar por:
  - [x] Assistido
  - [x] Favorito
  - [x] Com anotação
  - [x] Número de estrelas

### 📝 Anotações

- [x] Adicionar anotação ao filme
- [x] Adicionar avaliação pessoal de 1 a 5 estrelas

### 🔀 Ordenação

Ordenação crescente e decrescente por:

- [x] Título
- [x] Duração
- [x] Avaliação pessoal
- [x] Nota (`rt_score`)

---

## ✨ Requisitos Desejáveis

- [x] Utilização de **TypeScript**
- [x] Responsividade básica
- [x] Persistência no LocalStorage:
  - [x] Metadados do filme (assistido, favorito, anotação, avaliação)
  - [x] Filtros selecionados
  - [x] Ordenação selecionada
- [x] Toast para:
  - [x] Marcar/desmarcar assistido
  - [x] Marcar/desmarcar favorito
  - [x] Adicionar/editar anotação
- [x] Teste unitário (Vitest)
- [x] Separação clara de responsabilidades
- [x] Biblioteca de estilo (TailwindCSS)
- [x] Estado global (Zustand)
- [x] Gerenciamento de estado assíncrono via Fetch + camada de serviço

---

# 🧠 Arquitetura do Projeto

O projeto segue organização por **feature**, facilitando manutenção e escalabilidade:

```
├── src/
│   ├── features/
│   │   └── movies/
|   |       ├── components/
│   │       |   ├── EmptyState.tsx
│   │       |   ├── FiltersBar.tsx
│   │       |   ├── HighlightedText.tsx
│   │       |   ├── MovieCard.tsx
│   │       |   ├── MovieCardSkeleton.tsx
│   │       |   ├── RatingStars.tsx
│   │       |   └── SortSelector.tsx
|   |       ├── services/
|   |       |    └── moviesService.ts
|   |       ├── store/
│   │       |   ├── useMoviesStore.test.ts
│   │       |   └── useMoviesStore.ts
|   |       └── types/
│   │           └── movie.ts
│   ├── pages/
│   │   └── Home.tsx
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
```

## Separação de responsabilidades

- **components/** → Componentes visuais e reutilizáveis
- **services/** → Comunicação com a API pública do Studio Ghibli
- **store/** → Estado global e regras de negócio (Zustand)
- **types/** → Tipagens centralizadas

A lógica de filtros, ordenação e manipulação de metadados foi centralizada na store, mantendo os componentes mais simples e focados apenas na renderização.

---

# 💾 Persistência

Foi utilizado o middleware `persist` do Zustand para salvar no LocalStorage:

- Metadados dos filmes (assistido, favorito, anotação, avaliação pessoal)
- Filtros selecionados
- Campo e ordem de ordenação

A persistência é parcial, evitando salvar dados desnecessários da API e mantendo controle explícito sobre o que deve ser armazenado.

---

# 🧪 Testes

Foi implementado teste unitário utilizando **Vitest**, validando regras de negócio da store:

- Alternância de favorito (`toggleFavorite`)
- Normalização da avaliação pessoal (`setPersonalRating`)

---

# ▶️ Como Rodar o Projeto

```bash
# Instalar dependências
npm install

# Ambiente de desenvolvimento
npm run dev

# Rodar os testes
npm run test

# Build
npm run build

# Preview da Build
npm run preview
```

#### A aplicação estará disponível em: http://localhost:5173

---

# 🎯 Decisões Técnicas

- Separação dos metadados (`meta`) da lista original de filmes para manter organização e evitar mutações diretas.
- Centralização da lógica de filtros e ordenação na store, evitando lógica espalhada nos componentes.
- Persistência parcial utilizando `persist` do Zustand, garantindo controle sobre o que é salvo no LocalStorage.
- Uso de TypeScript para maior previsibilidade, segurança de tipos e melhor manutenção.
- Organização por feature para facilitar escalabilidade.
- Implementação de testes unitários focados em regras de negócio da store.

---

# 📌 Considerações Finais

O foco do projeto foi entregar uma aplicação:

- Funcional
- Organizada
- Escalável
- Com boas práticas
- Testável
- Totalmente alinhada aos requisitos do desafio

---

# 👨‍💻 Autor

#### Victor Hugo | Desenvolvedor Frontend

- GitHub: https://github.com/itsmevictorhugo
- LinkedIn: https://www.linkedin.com/in/itsmevictorhugo/
