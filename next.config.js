const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "maximilian",
        mongodb_password: "2YkcXq43KyPk0vqp",
        mongodb_clustername: "cluster0",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "maximilian",
      mongodb_password: "2YkcXq43KyPk0vqp",
      mongodb_clustername: "cluster0",
      mongodb_database: "my-site",
    },
  };
};

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: "empty",
//       };
//     }

//     return config;
//   },
// };
