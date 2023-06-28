/** @type {import('next').NextConfig} */

const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();
const nextConfig = {
    images: {
        domains: ['portfolio.tauseedzaman.com'],
    },
}

module.exports = nextConfig