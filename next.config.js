module.exports = () => {
  const env = {
    NEXT_PUBLIC_LS_URL: "https://teable.kr/api",
  };

  return {
    env,
    reactStrictMode: false,
    experimental: {
      images: {
        allowFutureImage: true,
      },
      esmExternals: false,
    },
    redirects: async () => [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ],
  };
};
