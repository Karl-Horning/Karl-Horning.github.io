/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "karl-horning.github.io",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
