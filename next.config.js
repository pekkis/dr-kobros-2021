import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
const withVanillaExtract = createVanillaExtractPlugin({
  // Turbopack support is experimental and off by default.
  // "auto" enables it only on Next >= 16; the webpack config is still
  // emitted alongside, so `next build --webpack` keeps working.
  unstable_turbopack: {
    mode: "auto"
  }
});

import { compose } from "ramda";

import createWithBundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = createWithBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
  openAnalyzer: true
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactCompiler: true,
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false
  }
};

export default compose(withBundleAnalyzer, withVanillaExtract)(nextConfig);
