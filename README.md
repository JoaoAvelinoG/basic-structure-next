# Estrutura do Projeto

Este projeto utiliza **React/Next.js com TypeScript** e segue uma organização modular para facilitar escalabilidade e manutenção.

## Estrutura de Pastas

```
└── 📁src
    └── 📁app
        └── 📁(site)
            └── 📁contato
                ├── page.tsx
            └── 📁sobre
                ├── page.tsx
            ├── layout.tsx
            ├── page.tsx
        └── 📁dashboard
            ├── layout.tsx
            ├── page.tsx
        ├── favicon.ico
        ├── globals.css
        ├── layout.tsx
    └── 📁components
        └── 📁feedbacks
            ├── Spinner.tsx
            ├── Toast.tsx
        └── 📁layout
            ├── Container.tsx
            ├── Flex.tsx
            ├── Footer.tsx
            ├── Grid.tsx
            ├── Header.tsx
            ├── Main.tsx
        └── 📁ui
            ├── Accordion.tsx
            ├── Card.tsx
            ├── Drawer.tsx
            ├── Logo.tsx
            ├── Modal.tsx
            ├── Section.tsx
    └── 📁features
        └── 📁auth
            └── 📁components
                ├── LoginForm.tsx
                ├── RegisterForm.tsx
            └── 📁hooks
            └── 📁services
        └── 📁cart
            └── 📁components
                ├── CartItem.tsx
                ├── CartList.tsx
            └── 📁services
        └── 📁products
            └── 📁components
                ├── ProductCard.tsx
                ├── ProductDetails.tsx
                ├── ProductsList.tsx
            └── 📁hooks
            └── 📁services
    └── 📁hooks
        ├── useDebounce.ts
        ├── useMediaQuery.ts
    └── 📁lib
        ├── axios.ts
        ├── firebaseConfig.ts
        ├── zodSchema.ts
    └── 📁stores
        ├── authStore.ts
        ├── cartStore.ts
    └── 📁types
        ├── cart.d.ts
        ├── product.d.ts
        ├── user.d.ts
    └── 📁utils
        ├── calcDiscount.ts
        └── formatCurrency.ts
```

## Observações

- **app/**: Estrutura de páginas públicas e privadas. `layout.tsx` serve como layout global ou de rota específica.
- **components/**: Componentes UI genéricos ou específicos de layout/feedback.
- **features/**: Cada funcionalidade do app tem sua própria pasta com componentes, hooks e serviços.
- **hooks/**: Hooks reutilizáveis por toda a aplicação.
- **lib/**: Configurações externas e helpers, como Axios ou Firebase.
- **stores/**: Estados globais usando Zustand.
- **types/**: Tipagens TypeScript para garantir consistência.
- **utils/**: Funções utilitárias de uso geral (ex.: formatação de moeda ou cálculo de desconto).
