import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Une 404 commune est nécessaire avec deux layouts racine (FR et EN)
    globalNotFound: true,
  },
};

export default nextConfig;
