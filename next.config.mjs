/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    trailingSlash: true,
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "karl-horning.github.io",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "www.karlhorning.dev",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
