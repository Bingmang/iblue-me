/**
 * router: /
 */

module.exports = {

GET: async (ctx, next) => {
  await next()
  await ctx.render('main.html')
  return
}

}
