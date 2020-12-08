'use strict';

module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, NOW } = app.Sequelize;

    const Banner = app.model.define('banner', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: STRING,
            allowNull: false,
            comment: '轮播图标题'
        },
        src: {
            type: STRING,
            allowNull: false,
            comment: '轮播图地址'
        },
        href: {
            type: STRING(500),
            allowNull: false,
            comment: '轮播图链接'
        },
        sort: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: '轮播图排序'
        }
    });

    // Banner.associate = () => {}

    // Banner.sync({ force: true })    //强制更新表

    return Banner;
};