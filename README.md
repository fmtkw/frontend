# FKF-MT — Frontend

Next.js (App Router) + TypeScript do site e painel da Federação Matogrossense de Kung Fu.

Arquitetura: `../about/arquitetura-frontend-react.md`.

## Stack

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS 4 + design tokens
- TanStack Query (painel / client state)
- React Hook Form + Zod
- Auth via BFF (`/api/auth/*`) com cookies HttpOnly (sem `localStorage`)

## Setup

```bash
cp .env.example .env
npm install
npm run dev
```

App em [http://localhost:3000](http://localhost:3000). API Django esperada em `http://localhost:8000/api/v1`.

## Scripts

| Comando | Uso |
|---|---|
| `npm run dev` | desenvolvimento (Turbopack) |
| `npm run build` | build de produção |
| `npm run start` | servir build |
| `npm run lint` | ESLint |
| `npm test` | Vitest |

## Estrutura

```
app/(public)     # site institucional (SEO)
app/(auth)       # /entrar, /recuperar-senha
app/(painel)     # /painel/* (auth obrigatória, sem link público)
app/api/auth     # BFF login/logout/refresh
src/components   # UI + layouts
src/features     # domínios alinhados ao backend
src/lib          # api, auth, forms, utils
src/styles       # tokens + globals
```

## Auth

1. `POST /api/auth/login` → grava `fkf_access` / `fkf_refresh` HttpOnly
2. Middleware protege `/painel/*`
3. Layout do painel valida sessão com `GET /api/v1/auth/me/`
4. Logout em `POST /api/auth/logout`

O endereço `/painel` **não** aparece no header/footer públicos (RF-90).
