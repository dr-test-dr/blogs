'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class UserService extends Service {
    async getOneUser(id) {
        const { ctx } = this
        try {
            const user = await ctx.app.model.User.findOne({ where: { id: id } })
            if (user) {
                return Object.assign(SUCCESS, {
                    data: user,
                });
            } else {
                return Object.assign(ERROR, {
                    msg: 'not found',
                });
            }
        } catch (error) {
            ctx.status = 500;
            throw (error);
        }
    }

    async createUser(body) {
        const { ctx } = this;
        try {
            const user = await ctx.app.model.User.create(body)
            return Object.assign(SUCCESS, {
                data: user,
            })
        } catch (error) {
            ctx.status = 500;
            throw (error);
        }
    }

    async updateUser(id, body) {
        const { ctx } = this;
        const user = await ctx.app.model.User.findOne({ where: { id: id } });
        if (!user) {
            return Object.assign(ERROR, {
                msg: 'not found',
            });
        }
        await user.update(body)
        return SUCCESS
    }

    async deleteUser(id) {
        const { ctx } = this;
        const user = await ctx.app.model.User.findOne({ where: { id: id } });
        if (!user) {
            return Object.assign(ERROR, {
                msg: 'not found',
            });
        }
        await user.destroy();
        return Object.assign(SUCCESS, {
            msg: 'delete ok',
        });
    }
}

module.exports = UserService;
