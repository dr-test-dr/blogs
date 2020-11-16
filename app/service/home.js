const { EggApplication } = require("egg");

'use strict';

const Service = require('egg').Service;
// const { ERROR, SUCCESS } = require('../util/util');

class UserService extends Service {
    async getUser() {
        let { ctx } = this;
        return ctx.app.model.User.findAll()
    }

}

module.exports = UserService;
