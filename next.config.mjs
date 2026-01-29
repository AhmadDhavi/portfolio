// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",  
//   images: {
//     unoptimized: true  
//   }
// };

// export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

