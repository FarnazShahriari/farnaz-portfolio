import coreWebVitals from "eslint-config-next/core-web-vitals"
import typescript from "eslint-config-next/typescript"

/**
 * Flat config, taken straight from eslint-config-next's own entry points.
 * The FlatCompat shim that older Next templates use crashes against
 * ESLint 9 here, and is no longer needed — Next 16 ships flat config.
 */
const config = [
  ...coreWebVitals,
  ...typescript,
  { ignores: [".next/**", "node_modules/**", "next-env.d.ts"] },
]

export default config
