'use strict';

const Controller = require('egg').Controller;
/**
 * @Controller 分类管理
 */
class CategoryController extends Controller {
    /**
       * @Router get /api/category
       * @Request query string *categoryId eg:1 categoryId
       * @Response 200 baseResponse OK
       */
    async getCategory() {
        const { ctx, service } = this
        console.log(ctx.query.categoryId)
        let res = await service.category.getCategory(ctx.query.categoryId)
        ctx.body = {
            result: res,
            message: 'ok'
        }
    }

    /**
     * @Router post /api/category
     * @Request body createCategory  创建分类
     * @Response 200 baseResponse OK
     */
    async createCategory() {
        const { ctx, service } = this
        let res = await service.category.createCategory(ctx.request.body)
        ctx.body = {
            result: res,
            message: 'ok'
        }
    }

    /**
     * @Router put /api/category
     * @Request query string *categoryId eg:1 categoryId
     * @Request body createCategory  
     * @Response 200 baseResponse OK
     */
    async updateCategory() {
        const { ctx, service } = this
        let res = await service.category.updateCategory(ctx.query.categoryId, ctx.request.body)
        ctx.body = {
            result: res,
            message: 'ok'
        }
    }

    /**
     * @Router delete /api/category
     * @Request query string *categoryId eg:1 categoryId
     * @Response 200 baseResponse OK
     */
    async deleteCategory() {
        const { ctx, service } = this
        console.log(ctx.params, ctx.query)
        let res = await service.category.deleteCategory(ctx.query.categoryId)
        ctx.body = {
            result: res,
            message: 'ok'
        }
    }
}

module.exports = CategoryController;

