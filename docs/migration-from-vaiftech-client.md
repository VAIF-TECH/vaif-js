# Migrating from `@vaiftech/client` to `@vaif/client`

This guide helps you migrate from the legacy `@vaiftech/client` SDK (last published as `1.5.7`) to the new `@vaif/client` package (current `0.3.x`).

The new package is a Stainless-generated TypeScript SDK with first-class subpath exports for realtime and storage layers.

---

## TL;DR

For most projects you can:

```sh
# 1. swap the dep
yarn remove @vaiftech/client
yarn add @vaif/client

# 2. search/replace imports
#    macOS / BSD sed:
grep -rl '@vaiftech/client' src | xargs sed -i '' "s|@vaiftech/client|@vaif/client|g"
#    GNU sed:
grep -rl '@vaiftech/client' src | xargs sed -i  "s|@vaiftech/client|@vaif/client|g"
```

That covers ~90% of call sites. The rest are noted under [Method-name mappings](#method-name-mappings) below.

---

## Why the rename?

- `@vaiftech/client` was a hand-written SDK that grew organically alongside the early VAIF Studio API.
- `@vaif/client` is generated from a single OpenAPI contract via [Stainless](https://www.stainless.com), with hand-written `src/lib/realtime/` and `src/lib/storage/` layers preserved on top.
- New realtime + storage subpaths (`@vaif/client/realtime`, `@vaif/client/storage`, `@vaif/client/storage/browser`, `@vaif/client/storage/resume`) ship as tree-shakable imports so the REST core stays small.

The old package will be deprecated on npm with a redirect to this guide once the controller's migrate codemod (`@vaif/migrate`) ships. Until then this manual path is the supported route.

---

## Step-by-step

### 1. Update `package.json`

```diff
- "@vaiftech/client": "^1.5.7",
+ "@vaif/client": "^0.3.0",
```

Then run your install:

```sh
yarn install
```

### 2. Rewrite imports

The package name changes; the default export shape (the `Vaif` client class) is the same.

```diff
- import Vaif from '@vaiftech/client';
+ import Vaif from '@vaif/client';

- import { ApiError } from '@vaiftech/client';
+ import { APIError as ApiError } from '@vaif/client';
```

Note: `ApiError` was renamed to `APIError` to match Stainless conventions.

### 3. Adopt the new subpath exports (optional but recommended)

The legacy SDK shipped realtime and storage helpers via the same root entry, which inflated bundle size. The new package exposes them as separate, tree-shakable subpaths:

```ts
// REST only — keeps your bundle small
import Vaif from '@vaif/client';

// Realtime channels (WebSocket)
import { Realtime } from '@vaif/client/realtime';

// Storage uploads (multipart, signed URLs, retries)
import { Storage } from '@vaif/client/storage';

// Browser-only storage helpers (FileReader, drag-drop)
import { pickFile } from '@vaif/client/storage/browser';

// IndexedDB-backed resume tokens for interrupted uploads
import { IndexedDBResumeStore } from '@vaif/client/storage/resume';
```

Bundle budgets enforced in CI (`size-limit`):

| Layer | Limit (gzipped) |
| --- | --- |
| REST only | 20 KB |
| Realtime | 40 KB |
| Storage | 28 KB |

### 4. Method-name mappings

Most methods carry over 1:1. The notable shifts:

| Legacy `@vaiftech/client@1.5.7` | New `@vaif/client@0.3.x` | Notes |
| --- | --- | --- |
| `client.auth.login(...)` | `client.auth.login(...)` | unchanged |
| `client.auth.signup(...)` | `client.auth.signUp(...)` | camelCase'd |
| `client.realtime.subscribe(...)` | `import { Realtime } from '@vaif/client/realtime'; new Realtime(client).channel(...).subscribe(...)` | now an explicit subpath; mirrors Supabase ergonomics |
| `client.storage.upload(...)` | `import { Storage } from '@vaif/client/storage'; new Storage(client).upload(...)` | resumable + multipart by default for files > 5 MB |
| `client.functions.invoke(...)` | `client.functions.invoke(...)` | unchanged |
| `ApiError` | `APIError` | also `APIConnectionError`, `APIUserAbortError`, etc. |

If you hit a method that doesn't exist on the new client, please file an issue at https://github.com/VAIF-TECH/vaif-js/issues with the legacy call site — odds are it's a naming change we missed in this list.

### 5. Verify

```sh
# type-check your project
yarn tsc --noEmit

# run your test suite
yarn test
```

---

## Codemod (planned)

A `@vaif/migrate` CLI is planned in the controller monorepo (`packages/migrate/`). It will:

1. Walk a target directory.
2. Use `ts-morph` to rewrite `import ... from '@vaiftech/client'` to `'@vaif/client'`.
3. Apply the method-name mappings from the table above.
4. Print a diff and prompt for confirmation.

Until that ships, the manual `sed` approach above plus a TypeScript pass should get you fully migrated in under 30 minutes for a typical app.

---

## Questions?

- Slack: `#vaif-sdk` in the VAIF workspace
- Email: support@vaif.tech
- Issues: https://github.com/VAIF-TECH/vaif-js/issues
