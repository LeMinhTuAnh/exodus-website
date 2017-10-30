module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "stage-reader-7500",
      script: "release/server.js",
      max_memory_restart: "500M",
      env: {
        PORT: 7500,
        WEBSITE_HOSTNAME: "https://beta.mangarock.com",
        SERVER_RENDERING: true,
        NODE_ENV: "production",
      },
    },
  ],
};
