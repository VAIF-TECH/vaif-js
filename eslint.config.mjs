// @ts-check
import tseslint from 'typescript-eslint';
import unusedImports from 'eslint-plugin-unused-imports';

export default tseslint.config(
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { sourceType: 'module' },
    },
    files: ['**/*.ts', '**/*.mts', '**/*.cts', '**/*.js', '**/*.mjs', '**/*.cjs'],
    ignores: ['dist/'],
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      'unused-imports': unusedImports,
    },
    rules: {
      'no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              regex: '^@vaif/client(/.*)?',
              message: 'Use a relative import, not a package import.',
            },
          ],
        },
      ],
    },
  },
  {
    // Transport layer: must not import Domain layer (channel/client/presence/auth)
    files: ['src/lib/realtime/transport/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../channel*', '../client*', '../presence*', '../auth', '../auth.ts'],
              message: 'Transport layer must not import Domain layer',
            },
          ],
        },
      ],
    },
  },
  {
    // Foundation layer: must not import Transport, Domain, or Public layers
    files: [
      'src/lib/realtime/backoff.ts',
      'src/lib/realtime/queue.ts',
      'src/lib/realtime/runtime.ts',
      'src/lib/realtime/cipher.ts',
      'src/lib/realtime/protocol.ts',
      'src/lib/realtime/types.ts',
      'src/lib/realtime/heartbeat.ts',
      'src/lib/realtime/errors.ts',
    ],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                './transport*',
                './channel*',
                './client*',
                './presence*',
                './auth',
                './auth.ts',
                './state*',
              ],
              message: 'Foundation layer must not import upper layers',
            },
          ],
        },
      ],
    },
  },
  {
    files: ['tests/**', 'examples/**'],
    rules: {
      'no-restricted-imports': 'off',
    },
  },
);
