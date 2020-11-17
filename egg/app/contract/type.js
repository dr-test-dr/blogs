'use strict';

module.exports = {
    baseResponse: {
        result: { type: 'boolean', required: true },
        message: { type: 'string' },
    },
    createUser: {
        username: { type: 'string', required: true, example: '张三' },
        password: { type: 'string', required: true, example: '123123' },
    }
}
