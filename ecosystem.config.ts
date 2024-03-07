module.exports = {
    apps: [{
      name: 'promas-frontend',
      script: 'npm',
      args: 'run dev',
      instances: 1,
      autorestart: true,
      watch: true,
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }]
  };