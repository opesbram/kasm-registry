/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  distDir: '../public',
  env: {
    name: 'Opes Kasm Images',
    description: 'Additional images for Kasm supported workspaces.',
    icon: 'https://i0.wp.com/opescyber.com.au/wp-content/uploads/2022/04/POESLogo.png',
    listUrl: 'https://opesbram.github.io/kasm-registry/',
    contactUrl: 'https://opescyber.com.au/contact-us/',
  },
  reactStrictMode: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
