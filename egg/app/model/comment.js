'use strict';

module.exports = app => {
    const { STRING, INTEGER, DATE, TEXT, NOW } = app.Sequelize;

    const Comment = app.model.define('comment', {
        id: {
            type: INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: TEXT,
            allowNull: false,
            comment: '评论内容'
        },
        like: {
            type: INTEGER,
            defaultValue: 0,
            comment: '评论点赞'
        },
        created_time: {
            type: DATE,
            defaultValue: NOW,
            comment: '评论时间'
        },
        userId: {
            type: INTEGER,
            allowNull: false,
            comment: '评论的用户id'
        },
        blogId: {
            type: INTEGER,
            allowNull: false,
            comment: '评论的博客id'
        },
        parentId: {
            type: INTEGER,
            comment: '评论的上一级，null为对blog的评论，有值则是顶级评论下的评论'
        },
        toCommendId: {
            type: INTEGER,
            comment: '对当前id的评论（顶级或者某一个评论，顶级时也为null）'
        }
    })

    Comment.associate = () => { }

    // Comment.sync({ force: true })    //强制更新表
    return Comment;
}
