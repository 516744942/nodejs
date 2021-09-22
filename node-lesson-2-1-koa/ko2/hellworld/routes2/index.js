const router = require('koa-router')();
router.prefix('/xixi')
router.get('/', (ctx, next) => {
  ctx.body = "嘻嘻哈哈"
})
module.exports = router
