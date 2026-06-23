/** @type {import('next').NextConfig} */

const BASE_PATH = process.env.NODE_ENV === "production" ? "/ek-koshish-ngo" : "";

const nextConfig = {
  output: "export",
  ...(BASE_PATH
    ? {
        basePath: BASE_PATH,
        assetPrefix: `${BASE_PATH}/`,
      }
    : {}),
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: BASE_PATH,
  },
};

export default nextConfig;
