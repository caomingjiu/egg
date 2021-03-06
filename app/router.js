'use strict'

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = (app) => {
  const { router, controller } = app
  router.get('/', controller.home.index)
  router.get('/list', controller.home.list)
  router.post('/reg', controller.user.reg)
  router.post('/login', controller.user.login)
  // 退出登录
  router.post('/logout', controller.user.logout)
  router.post('/upload', controller.file.upload)
}
