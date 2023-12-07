# Frontend Structure

![GitHub last commit](https://img.shields.io/github/last-commit/MNBoy/frontend-structure?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/MNBoy/frontend-structure?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/MNBoy/frontend-structure?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/MNBoy/frontend-structure?style=social)

A comprehensive Next.js application with React Query, Zustand, Tailwind CSS, TypeScript, and Next UI.

## Scripts

- **dev**: Run the development server.
  
  ```bash
  pnpm dev

- **test**: Run tests.
  
  ```bash
  pnpm test

## Folder Structure

```plaintext
├── .gitignore
├── README.md
├── jest.config.mjs
├── next-env.d.ts
├── next.config.js
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── .DS_Store
│   ├── app
│   │   ├── .DS_Store
│   │   ├── auth
│   │   │   ├── login
│   │   │   │   └── page.tsx
│   │   │   └── register
│   │   │       └── page.tsx
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── common
│   │   ├── .DS_Store
│   │   ├── constants
│   │   │   ├── PATHS.ts
│   │   │   └── index.ts
│   │   ├── interfaces
│   │   │   ├── IUser.ts
│   │   │   └── index.ts
│   │   └── utils
│   │       ├── Schema.ts
│   │       ├── Tools.ts
│   │       ├── index.ts
│   │       └── useYupValidationResolver.ts
│   ├── components
│   │   ├── .DS_Store
│   │   ├── common
│   │   │   ├── Header
│   │   │   │   ├── Header.test.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   ├── Logo.tsx
│   │   │   │   ├── UserInfo.test.tsx
│   │   │   │   ├── UserInfo.tsx
│   │   │   │   ├── UserSkeleton.tsx
│   │   │   │   ├── index.ts
│   │   │   │   ├── useHeader.ts
│   │   │   │   └── useUserInfo.ts
│   │   │   └── index.ts
│   │   ├── pages
│   │   │   └── Auth
│   │   │       ├── AuthForm.test.tsx
│   │   │       ├── AuthForm.tsx
│   │   │       ├── index.ts
│   │   │       └── useAuthForm.ts
│   │   ├── providers
│   │   │   ├── ClientProvider.tsx
│   │   │   └── index.ts
│   │   └── template
│   │       ├── Avatar
│   │       │   └── Avatar.tsx
│   │       ├── Button
│   │       │   └── Button.tsx
│   │       ├── Dropdown
│   │       │   └── Dropdown.tsx
│   │       ├── Input
│   │       │   └── Input.tsx
│   │       ├── Select
│   │       │   └── Select.tsx
│   │       ├── Skeleton
│   │       │   └── Skeleton.tsx
│   │       ├── Template.tsx
│   │       ├── Textarea
│   │       │   └── Textarea.tsx
│   │       ├── User
│   │       │   └── User.tsx
│   │       └── index.ts
│   ├── hooks
│   │   ├── auth.ts
│   │   └── user.ts
│   ├── lib
│   │   ├── index.ts
│   │   ├── slices
│   │   │   ├── auth.ts
│   │   │   └── index.ts
│   │   └── store.ts
│   └── services
│       ├── auth.ts
│       ├── axiosInstance.ts
│       └── user.ts
├── tailwind.config.ts
└── tsconfig.json
