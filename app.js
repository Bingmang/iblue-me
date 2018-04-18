const Koa    = require('koa')
const Router = require('koa-router')
const static = require('koa-static')
const views  = require('koa-views')

const _      = require('lodash')
const path   = require('path')
const app = new Koa()
const router = new Router()

const ice_tech_router = require('./router')
for (let url of Object.keys(ice_tech_router)) {
  for (let method of Object.keys(ice_tech_router[url])) {
    router[method.toLowerCase()](url, ice_tech_router[url][method])
  }
}

const port = process.env.PORT || 19031

app
  .use(static(path.join(__dirname, 'views')))
  .use(views(path.join(__dirname, 'views/templates')))
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(port)
console.log('app started at port', port)
