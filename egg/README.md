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
  cd xxx  
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
        database: 'xxx',  
         host: 'localhost',  
         port: '3306',  
         username: 'root',  
          password: 'xxxxxx',  
       };  
  config/plugin.js:  //使用插件  
    exports.sequelize = {  
      enable: true,  
      package: 'egg-sequelize'  
    }  
  sequlzie使用：  
    model：定义模型（app/model）  

###  swagger 使用
  npm i egg-swagger-doc --save  安装swagger  
  配置：   
	// {app_root}/config/plugin.js
	exports.swaggerdoc = {
		enable: true,
		package: 'egg-swagger-doc',
	};

	// {app_root}/config/config.default.js
	//swagger
	exports.swaggerdoc = {
		dirScanner: './app/controller',
		apiInfo: {
			title: 'egg-swagger',
			description: 'swagger-ui for egg',
			version: '1.0.0',
		},
		schemes: ['http', 'https'],
		consumes: ['application/json'],
		produces: ['application/json'],
		securityDefinitions: {
			// apikey: {
			//   type: 'apiKey',
			//   name: 'clientkey',
			//   in: 'header',
			// },
			// oauth2: {
			//   type: 'oauth2',
			//   tokenUrl: 'http://petstore.swagger.io/oauth/dialog',
			//   flow: 'password',
			//   scopes: {
			//     'write:access_token': 'write access_token',
			//     'read:access_token': 'read access_token',
			//   },
			// },
			},
		enableSecurity: false,
		// enableValidate: true,
		routerMap: false,
		enable: true,
	};
  使用  
	router.js:    
		router.redirect('/swagger', '/swagger-ui.html');  //重定位到swagger页面  访问http://127.0.0.1:7001/swagger  -> swagger-ui.html  
	要在swagger页面中显示，必须在controller中使用装饰器：  
		/**
		 * @Controller 用户                                              -> controller 装饰器
		 */

		/**
		 * @Router get /api/user
		 * @Request query string *id eg:1 userId                        -> 路由restful 装饰器 
		 * @Response 200 baseResponse OK
		 */
	另外需要在contract文件夹中新增type.js来配置swagger基本的返回类型，其他接口create的类型页需要在这里定义
	'use strict';

	module.exports = {
		baseResponse: {
			result: { type: 'boolean', required: true },
			message: { type: 'string' },
		},
	}

	在util中配置返回类型(在返回的result中固定成功返回success类型，错误则是error类型)：
		'use strict';

		module.exports = {
			ERROR: {
				code: -1,
				msg: 'error',
			},
			SUCCESS: {
				code: 200,
				msg: 'ok',
			},
		};
