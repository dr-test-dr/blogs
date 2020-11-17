'use strict';

module.exports = app => {
    //定义数据库类型
    const { STRING, INTEGER, DATE } = app.Sequelize;

    //定义数据库模型
    const User = app.model.define('users', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: { type: STRING(30) },
        password: { type: STRING(30) },

        // created_at: DATE,
        // updated_at: DATE,
    }, {
        timestamps: false,  //去除createAt updateAt
        // freezeTableName: true,  //使用自定义表名
        // // 实例对应的表名
        // tableName: 'user',
        // // 如果需要sequelize帮你维护createdAt,updatedAt和deletedAt必须先启用timestamps功能
        // // 将createdAt对应到数据库的created_at字段
        // createdAt: 'created_at',
        // // 将updatedAt对应到数据库的updated_at字段
        // updatedAt: 'updated_at',
        // //And deletedAt to be called destroyTime (remember to enable paranoid for this to work)
        // deletedAt: false, //'deleted_at',
        // //删除数据时不删除数据，而是更新deleteAt字段 如果需要设置为true，则上面的deleteAt字段不能为false，也就是说必须启用
        // paranoid: false
      });

    //强制重新更新数据库
    // User.sync({ force: true });

    return User;
};