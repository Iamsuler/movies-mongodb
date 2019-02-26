const mongoose = require('mongoose')
const movieSchema = require('../schemas/movie')
// 编译生成movie模型
const movie = mongoose.model('Movie', movieSchema)

module.exports = movie