// const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  // const isDev = phase === PHASE_DEVELOPMENT_SERVER;
  const isDev = true;

  const env = isDev
    ? {
        NEXT_PUBLIC_DEV_MODE: true,
        NEXT_PUBLIC_LS_URL: "http://127.0.0.1:8000/api",
      }
    : {
        NEXT_PUBLIC_DEV_MODE: false,
        NEXT_PUBLIC_LS_URL: "https://teable.kr/api",
      };

  return {
    env,
    reactStrictMode: false,
    experimental: {
      images: {
        allowFutureImage: true,
      },
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
