import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: "export",
    // Sub-path on GitHub Pages; not needed once a custom domain is configured.
    basePath: process.env.GITHUB_ACTIONS ? "/karlhorning.dev" : "",
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
