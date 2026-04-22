import type { NextConfig } from "next";

const basePath = process.env.GITHUB_ACTIONS ? "/karlhorning.dev" : "";

const nextConfig: NextConfig = {
    output: "export",
    // Sub-path on GitHub Pages; not needed once a custom domain is configured.
    basePath,
    env: {
        NEXT_PUBLIC_BASE_PATH: basePath,
    },
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
