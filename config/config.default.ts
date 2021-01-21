import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1608104616034_3369';

  // add your egg config in here
  config.middleware = [];

  config.bodyParser = {
    jsonLimit: '50mb',
    formLimit: '60mb',
    enableTypes: [ 'json', 'text', 'form', 'mp3' ],
  };

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  config.mongo = {
    client: {
      host: '127.0.0.1',
      port: '27017',
      name: 'user',
      user: '',
      password: '',
      options: { useNewUrlParser: true },
    },
  };
  // config.cluster = {
  //   listen: {
  //     path: '',
  //     port: 7001,
  //     hostname: '0.0.0.0',
  //   },
  // };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
  };
};
