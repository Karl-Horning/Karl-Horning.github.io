/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
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
