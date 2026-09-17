import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // The design system ships TypeScript source rather than compiled output,
  // so Next has to compile it alongside our own code.
  transpilePackages: ["@farnazshahriari/design-system"],
}

export default nextConfig
