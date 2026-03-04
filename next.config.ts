import createMDX from "@next/mdx"
import remarkGfm from "remark-gfm"
import type { NextConfig } from "next"

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [],
    },
  },
})

const nextConfig: NextConfig = {
  reactStrictMode: true,
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
}

export default withMDX(nextConfig)
