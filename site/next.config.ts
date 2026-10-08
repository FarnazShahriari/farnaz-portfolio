import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  // The design system ships TypeScript source rather than compiled output,
  // so Next has to compile it alongside our own code.
  transpilePackages: ["@farnazshahriari/design-system"],
  // 90 is for screenshots full of small UI text, where the default 75
  // leaves visible smudges around letters.
  images: { qualities: [75, 90] },
}

export default nextConfig
