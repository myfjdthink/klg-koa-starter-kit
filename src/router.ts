const router = require('koa-router')({
  prefix: '/api/v1'
})

// const RequestMonitor = require('./common/middleware/RequestMonitor')
// const responseFormatter = require('./common/middleware/ResponseFormatter') TODO
// router.use('/', RequestMonitor, responseFormatter('^/api'))

/**
 * @apiDefine userId
 * @apiParam {String} userId 用户ID.
 */

/**
 * @apiDefine response
 * @apiSuccess {Number} code 0 代表成功，非 0 则表示失败
 * @apiSuccess {String} message  提示信息
 * @apiSuccess {Object} data   返回结果
 */

/**
 * @apiDefine responseExample
 * @apiSuccessExample {json} Success-Response:
 *    HTTP/1.1 200 OK
 *    {
 *      "code" : 0
 *      "data" : {}
 *    }
 */

/**
 * @api {*} * 返回值格式
 * @apiDescription 返回值格式
 * @apiName response
 * @apiGroup Common
 *
 * @apiUse response
 * @apiUse responseExample
 */

require('./user/router').router(router)

module.exports = router