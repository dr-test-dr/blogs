'use strict';

const Service = require('egg').Service;
const { ERROR, SUCCESS } = require('../util/util');

class CatcaegoryService extends Service {
    async getCategory(id) {
        const { ctx } = this
        try {
            const category = await ctx.app.model.Category.findOne({ where: { id: id } })
            if (category) {
                return Object.assign(SUCCESS, {
                    data: category,
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
    async createCategory(body) {
        const { ctx } = this;
        try {
            const category = await ctx.app.model.Category.create(body)
            return Object.assign(SUCCESS, {
                data: category,
            })
        } catch (error) {
            ctx.status = 500;
            throw (error);
        }
    }

    async updateCategory(id,body){
        const { ctx } = this;
        const category = await ctx.app.model.Category.findOne({ where: { id: id } });
        if (!category) {
            return Object.assign(ERROR, {
                msg: 'not found',
            });
        }
        await category.update(body)
        return SUCCESS
    }

    async deleteCategory(id){
        const { ctx } = this;
        const category = await ctx.app.model.Category.findOne({ where: { id: id } });
        if (!category) {
            return Object.assign(ERROR, {
                msg: 'not found',
            });
        }
        await category.destroy();
        return Object.assign(SUCCESS, {
            msg: 'delete ok',
        });
    }
}

module.exports = CatcaegoryService;
