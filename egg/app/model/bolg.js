'use strict';

module.exports = app => {
    const { STRING, INTEGER, BOOLEAN, DATE, NOW } = app.Sequelize;

    const Blog = app.model.define('blog', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: STRING,
            allowNull: false,
            comment: '文章标题'
        },
        author: {
            type: STRING,
            allowNull: false,
            comment: '文章作者'
        },
        summary: {
            type: STRING(500),
            allowNull: false,
            comment: '文章摘要'
        },
        sort: {
            type: BOOLEAN,
            allowNull: false,
            defaultValue: false,
            comment: '文章排序'
        },
        browse: {
            type: INTEGER,
            allowNull: true,
            defaultValue: 0,
            comment: '文章浏览次数'
        },
        createTime: {
            type: DATE,
            defaultValue: NOW,
            comment: '文章创建时间'
        },
        categoryId: {
            type: INTEGER,
            allowNull: false,
            comment: '文章分类外键'
        }
    });

    Blog.associate = () => {
        Blog.belongsTo(app.model.Category, { foreignKey: 'categoryId', constraints: false });
    }

    // Blog.sync({ force: true })    //强制更新表

    return Blog;
};
