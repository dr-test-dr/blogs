### 初始化
  npm init egg --type=simple  初始化一个简单的egg项目

  基本目录结构：
    ├── app
    │ ├── controller（控制器）
    │ │ └── home.js
    │ └── router.js（路由）
    ├── config（配置）
    │ └── config.default.js（配置项，项目基本配置，数据库的链接，egg-swagger-doc配置）
    │ └── plugin.js（第三方插件配置，引用，开启状态）
    └── package.json
  cd 
  npm install
  npm run dev 
  项目可以运行起来 http://127.0.0.1:7001  -> hi，egg

  app下需要新增 contract（返回值约束） service（业务逻辑）  middleware (中间件) util (工具) pubulic（静态文件）model (数据库模型) 六个文件夹

### mysql
  npm install --save egg-sequelize  mysql2  安装sequlize 和mysql
  npm install egg-sequelize-auto --save-dev // 对照数据库自动生成相应的models插件


  配置config:config.default.js:
    //sequlize
     config.sequelize = {
        dialect: 'mysql', // 支持: mysql, mariadb, postgres, mssql
        database: 'test',
         host: 'localhost',
         port: '3306',
         username: 'root',
          password: '111111',
       };
  config/plugin.js:  //使用插件
    exports.sequelize = {
      enable: true,
      package: 'egg-sequelize'
    }
  sequlzie使用：
    model：定义模型（app/model）

