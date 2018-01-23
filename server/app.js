const express = require('express')

const app = express()

// 引入 mongoose 配置文件,执行配置文件中的函数，以实现数据库的配置和 Model 的创建等
let mongoose = require('./app/config/mongoose.js')
let db = mongoose()

module.exports = app
