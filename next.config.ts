import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {
        root: __dirname,
    },
    experimental: {
        mcpServer: false,
    }
};

export default nextConfig;
