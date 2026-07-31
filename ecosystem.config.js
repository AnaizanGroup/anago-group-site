module.exports = {
  apps: [
    {
      name: "anago-group-site",
      script: "node_modules/next/dist/bin/next",
      args: "start -p 3038",
      cwd: "./",
      instances: "max",
      exec_mode: "cluster",
      env: {
        PORT: 3038,
        NODE_ENV: "production"
      }
    }
  ]
};
