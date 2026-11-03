# MySite — Digital storefront

A responsive Nuxt 3 storefront prototype for discovering digital products, including AI assistants, creative software and operating systems.

> **Important:** This is a frontend prototype. It is not production-ready to collect real account credentials or accept payments. Registration, checkout, contact delivery and admin data require backend integrations.

## Run locally

Use Node.js 22 and npm.

```sh
npm install
npm run dev
```

The development server prints its local URL. If port 3000 is busy, Nuxt may choose another port automatically.

## Validation

```sh
npm run build
npm run typecheck
```

GitHub Actions verifies builds and types on pushes to `master` and PRs into `master`.

## Pages and current status

| Route | Purpose | Notes |
| --- | --- | --- |
| `/` | Storefront, featured collections | Responsive light and dark modes |
| `/productpage` | Catalog browsing | Search/filter/sort in browser |
| `/search` | Keyword search | Product data comes from the local Pinia store |
| `/product/:id` | Product details | Cart additions are saved locally |
| `/cart` | Saved cart | Quantity and subtotal work; checkout is not connected |
| `/login` | Sign-in form | **Development demo only**; unavailable in production |
| `/signup` | Registration preview | No account is created or password saved |
| `/dashboard` | Customer dashboard preview | Local cart and demo account, not real orders |
| `/about` | Storefront introduction | Informational page |
| `/contact` | Contact message draft | Copies user text; does not send anything |
| `/admin` | Admin integration status | No admin functions or private data |

## Key folders

- `components/layouts/` — public navigation, hero, collections and footer
- `components/ui/` — shared buttons, product logos, theme switcher and icons
- `assets/css/main.css` — theme tokens, soft interaction glow and accessibility styles
- `stores/product.ts` — sample product catalog
- `stores/cart.ts` — persisted browser cart
- `stores/auth.ts` — development-only demo session (not secure authentication)
- `public/temp/pic/` — existing product and banner assets
- `FRONTEND_REVIEW.md` — readiness checklist, backend blockers and next phases

## Next steps before launch

1. Implement secure backend registration, authentication and server-enforced authorization.
2. Connect real product data, inventory, terms and pricing.
3. Build order creation, checkout, payment and order-history APIs.
4. Provide a verified contact endpoint and protect the admin console.
5. Complete cross-device visual checks, accessibility testing and integration/end-to-end tests.

Do not deploy the demo authentication flow as a real login or expose sensitive customer data without backend access controls.
