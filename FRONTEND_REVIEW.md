# Frontend review — 2026-11-02

## Scope
Repository: `imfarzdfrh/web-design`, base `master`. Review includes the project tree, global styles, layout, Nuxt configuration, product/store/cart flows, authentication, registration, catalog, search, product details, about/contact, and admin/dashboard. The design implementation in this branch focuses on the public storefront and shopping journey.

## Completed on this feature branch
- Modern, mobile-first storefront with a consistent design system, reduced-motion support, hover states, responsive layouts and light/dark tokens.
- Reworked navigation with a working search route, category links, mobile menu, theme control, and cart item count.
- Rebuilt hero, category discovery, featured banners, cards and catalog with actual product categories.
- Working catalog filtering/sorting, search results, product detail quantity selection, cart item count and subtotal.
- Product store typing/import cleanup; removed fixed-width slider and hard-coded desktop margins.
- Replaced deprecated Nuxt persisted-state module; removed duplicate invalid Pinia plugin; adjusted cart persistence and normalized price/quantity handling.
- Honest cart checkout placeholder instead of a dead-end button.
- Corrected shared input component to emit `update:modelValue`.
- Added a Nuxt build verification workflow.

## Risks and blockers before production

### P0 — blocking
1. **Authentication is a demo.** `stores/auth.ts` contains a hard-coded test credential/token rather than server-side identity/session handling. Do not expose it as a real secure login.
2. **Registration is not implemented.** `pages/signup.vue` calls `auth.register(...)`, which does not exist in the auth store. Needs a real backend and proper error states.
3. **Checkout is absent.** Previous cart checkout action had no implementation. The new storefront explicitly disables checkout until an API/payment flow exists.
4. **Admin area is UI-only.** `pages/admin/index.vue` contains fixed sample totals. Server-side role enforcement and data integration are required before publishing admin capability.

### P1 — functional / usability
1. `pages/contact.vue` currently only logs form contents and clears the form; no submission endpoint or delivery confirmation.
2. Secondary routes (login/signup, dashboard, about, contact, admin) have not yet been migrated to the new responsive design system.
3. Existing copy on the About page makes assertions about security and support that have not been technically verified; edit before launch.
4. Product catalog data lives in the client store; real products/stock/price/fulfillment require trusted server data.
5. Pricing does not define whether items are one-time, subscription, region-restricted or licensed. Do not infer a payment model from a plain number.

### P2 — refinement / performance
1. Migrate large PNG assets and animated GIFs to optimized formats where possible; test LCP/CLS on real mobile devices.
2. Add image dimension metadata, lazy loading policies, and real product metadata.
3. Add end-to-end flow tests for search, filters, cart persistence and keyboard navigation.
4. Review dependency security advisories using `npm audit` and fix selectively; do not force-upgrade blindly.
5. Expand SEO (product metadata, sitemap, OG visuals), empty/loading/error states and localization after product requirements are confirmed.

## Suggested phases
1. **Phase A: Storefront visual QA:** run the app at 320/375/768/1024/1440px, test both themes, page navigation and build/typecheck; fix any integration regressions.
2. **Phase B: Auth and account:** real auth/session APIs, login/signup redesign, protected routes, user dashboard.
3. **Phase C: Commerce:** server-backed catalog/pricing, order summary, payment and fulfillment, cart synchronization.
4. **Phase D: Remaining pages:** contact, about, admin, content and privacy/legal copy.
5. **Phase E: Release readiness:** E2E tests, performance/accessibility audits, security review, monitoring and launch checklist.

## Verification
A GitHub Actions build workflow was added. Build, typecheck and browser QA have **not** been confirmed as passing from this editing environment. Run `npm install`, `npm run dev`, `npm run build` and `npm run typecheck` before merge. No changes have been merged into `master`.
