/** @type {import('next').NextConfig} */
const isStaticExport = process.env.PORTFOLIO_STATIC_EXPORT === "true";

const nextConfig = {
  ...(isStaticExport ? { output: "export" } : {}),
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
