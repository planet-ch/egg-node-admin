import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  // static: true,
  // nunjucks: {
  //   enable: true,
  //   package: 'egg-view-nunjucks',
  // },
  mongo: {
    enable: true,
    package: 'egg-mongo-native',
  },
  redis: {
    enable: true,
    package: 'egg-redis',
  },
  oss: {
    enable: true,
    package: 'egg-oss',
  },
  validate: {
    enable: true,
    package: 'egg-validate',
  },
  cors: {
    enable: true,
    package: 'egg-cors',
  },
};

export default plugin;
