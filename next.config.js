const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "mehalwiam07",
        mongodb_password: "E6fqb9cUVJ9XrXQS",
        mongodb_clustername: "cluster0",
        // mongodb_database: "test",
      },
    };
  }

  return {
    env: {
      mongodb_username: "mehalwiam07",
      mongodb_password: "E6fqb9cUVJ9XrXQS",
      mongodb_clustername: "cluster0",
      // mongodb_database: "my-site",
    },
  };
};
