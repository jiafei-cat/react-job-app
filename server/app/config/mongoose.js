/**
 * 数据库配置及模型建立
 */
let mongoose = require('mongoose')
let config = require('./config.js')

module.exports = function() {
    let db = mongoose.connect(config.mongodb)
    return db
}