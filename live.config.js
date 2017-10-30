module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps: [
    {
      name: "live-reader-6000",
      script: "release/server.js",
      max_memory_restart: "500M",
      env: {
        PORT: 6000,
        WEBSITE_HOSTNAME: "https://mangarock.com",
        SERVER_RENDERING: true,
        NODE_ENV: "production",
      },
    },
    {
      name: "live-reader-6500",
      script: "release/server.js",
      max_memory_restart: "500M",
      env: {
        PORT: 6500,
        WEBSITE_HOSTNAME: "https://mangarock.com",
        SERVER_RENDERING: true,
        NODE_ENV: "production",
      },
    },
    {
      name: "master-reader-7000",
      script: "release/server.js",
      env: {
        PORT: 7000,
        WEBSITE_HOSTNAME: "https://mangarock.com",
        MASTER: true,
        NODE_ENV: "production",
      },
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy: {
    production: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/production",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env production",
    },
    dev: {
      user: "node",
      host: "212.83.163.1",
      ref: "origin/master",
      repo: "git@github.com:repo.git",
      path: "/var/www/development",
      "post-deploy": "npm install && pm2 reload ecosystem.config.js --env dev",
      env: {
        NODE_ENV: "dev",
      },
    },
  },
};
