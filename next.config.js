// module.exports = {
//     publicRuntimeConfig: {
//         APP_NAME: process.env.APP_NAME,
//         API_DEVELOPMENT: process.env.API_DEVELOPMENT,
//         API_PRODUCTION: process.env.API_PRODUCTION,
//         PRODUCTION:process.env.PRODUCTION,
//         DOMAIN_DEVELOPMENT: process.env.DOMAIN_DEVELOPMENT,
//         DOMAIN_PRODUCTION: process.env. DOMAIN_PRODUCTION,
//         FB_APP_ID: process.env. FB_APP_ID,
//         DISQUS_SHORTNAME: process.env.DISQUS_SHORTNAME,
//         GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,
//         SENDGRID_API_KEY:process.env.SENDGRID_API_KEY,
//         webpack5: true,

//     }
// }

require("dotenv").config();
const isProduction = process.env.PRODUCTION_OR_DEVELOPMENT === "production";

module.exports = {
  reactStrictMode: true,
  //   env: {
  //     API_PRODUCTION: process.env.API_PRODUCTION,
  //   },

  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    return config;
  },
  publicRuntimeConfig: {
    API: isProduction
      ? process.env.API_PRODUCTION
      : process.env.API_DEVELOPMENT,
    APP_NAME: process.env.APP_NAME,
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
