/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1605530102895_4687';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  //sequlize
  config.sequelize = {
    dialect: 'mysql', // 支持: mysql, mariadb, postgres, mssql
    database: 'blog',
    host: 'localhost',
    port: '3306',
    username: 'root',
    password: '111111',
  };

  return {
    ...config,
    ...userConfig,
  };
};
