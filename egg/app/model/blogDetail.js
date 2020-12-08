'use strict';

module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, NOW, TEXT } = app.Sequelize;

    const BlogDetail = app.model.define('blogDetail', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: TEXT,
            allowNull: false,
            comment: '文章内容'
        },
        imgList: {
            type: STRING,
            allowNull: false,
            comment: '文章图片组'
        },
        blogId: {
            type: INTEGER,
            allowNull: false,
            comment: '文章外键'
        }
    });

    BlogDetail.associate = () => {
        BlogDetail.belongsTo(app.model.Blog, { foreignKey: 'blogId', constraints: false });
    }

    // BlogDetail.sync({ force: true })    //强制更新表

    return BlogDetail;
};