/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'weather';

const nextConfig = {
    webpack(config) {
        config.module.rules.push({
          test: /\.svg$/,
          use: ['@svgr/webpack'],
        });
    
        return config;
    },
    output: "export",
    assetPrefix: isProd ? `/${repoName}/` : '',
    basePath: isProd ? `/${repoName}` : ''
};

export default nextConfig;
