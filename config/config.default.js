'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1515124305151_4161';

  config.security = {
    csrf: {
      enable: false,
    },
  };

  // add your config here
  config.middleware = [
    'errorHandler',
    'swagger',
  ];

  config.sequelize = {
    database: 'demo',
    dialect: 'sqlite',
    storage: 'databases/database.sqlite',
  };
  // config.sequelize = {
  //   dialect: 'mysql',
  //   database: 'swaggerdemo',
  //   host: '101.200.52.19',
  //   port: 3306,
  //   username: 'root',
  //   password: 'renrenQQ@@zz123',
  //   timezone: '+08:00',
  // };

  // remote 配置
  config.connectorRemote = {
    enable: true,
    swaggerDefinition: {
      info: { // API informations (required)
        title: 'information_resource_manager', // Title (required)
        version: '1.0.0', // Version (required)
        description: '接口管理', // Description (optional)
      },
      basePath: '/api/v1',
      host: 'localhost:7001',
      securityDefinitions: {
        api_key: { // 对应
          type: 'apiKey',
          name: 'X-Access-Token',
          in: 'header',
        },
      },
    },
    registerRemote: true,
    accessRemote: {
      enable: true,
      getMatchFunc: app => app.model.Role.isInRole,
    },
  };

  // swagger配置项
  config.swagger = {
    enable: true,
    mountPath: '/explorer',
    swaggerFilePath: '/swagger.json',
  };

  return config;
};
