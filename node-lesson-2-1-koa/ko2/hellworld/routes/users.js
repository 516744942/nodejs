const router = require('koa-router')()

router.prefix('/users')

router.get('/', function (ctx, next) {
  ctx.body = 'this is a users response!'
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})
router.post('/post', function (ctx, next) {
  console.log(ctx)
  ctx.body = 'this is a users/bar response'
})

// router.get('/user/:id',(ctx,next)=>{
//   return User.findOne(ctx.name.id).then(user=>{
//     ctx.user = user
//     return next()
//   })
// },
//   (ctx)=>{
//     console.log(user);
//     // =>{id,name:"Alex"}
//   }
// )

module.exports = router
