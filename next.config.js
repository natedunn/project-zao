module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    compress: true,
    experimental: {
      urlImports: ['https://cdn.skypack.dev'],
    },
  };
  return nextConfig;
};
