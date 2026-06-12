---
name: reference_pnpm_build_gotcha
description: How to unblock `pnpm build` failing with ERR_PNPM_IGNORED_BUILDS on this repo (pnpm 11 + sharp/unrs-resolver)
metadata:
  type: reference
---

On this machine pnpm is 11.0.8 and `pnpm build` runs a pre-script deps check (`verify-deps-before-run`) that invokes `pnpm install`; if native build scripts are unapproved it exits 1 with `ERR_PNPM_IGNORED_BUILDS` (sharp, unrs-resolver) and the build never starts.

Fix (project-level, committed): in `pnpm-workspace.yaml` use the pnpm 11 `allowBuilds:` map with boolean values — NOT the old package.json `pnpm.onlyBuiltDependencies` list (ignored by 11.0.8) and NOT the `onlyBuiltDependencies` key in workspace yaml (pnpm rewrote it back to an `allowBuilds:` placeholder):

```yaml
allowBuilds:
  sharp: true
  unrs-resolver: true
```

Then `pnpm install` actually compiles them and exits 0. Triggered here by a clean `rm -rf node_modules && pnpm install` (store had been bumped v10 → v10/v11, forcing the reinstall). Quick bypass when you just need to compile/type-check without touching this: `node node_modules/next/dist/bin/next build`.

IMPORTANT: this pnpm (11.0.8) reads these settings from `pnpm-workspace.yaml` (camelCase), NOT from `.npmrc` or the package.json `pnpm` field — both are silently ignored (`pnpm config get` returns undefined for them).

Second gotcha (ESLint): `next lint` / `eslint .` failed with "Cannot find module '@next/eslint-plugin-next'" (and react-hooks). Cause: `eslint-config-next` resolves its plugins by name from the project root via FlatCompat, but pnpm's isolated layout hides those transitive plugins. Fix = `nodeLinker: hoisted` in `pnpm-workspace.yaml` (npm-like flat node_modules) + reinstall; now `next lint` → "No ESLint warnings or errors". Also pin `eslint-plugin-react-hooks@^5` (eslint-config-next 15.5 wants ^5; v7 adds a `set-state-in-effect` rule that errors on the Hero typewriter). The duplicate `eslint.config.mjs` (vs tracked `eslint.config.js`) was deleted. See [[project_motion_system]].
