const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
  title: String,
  doctor: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    }
  }
})

// movieSchema.pre 表示每次存储数据之前都先调用这个方法
movieSchema.pre('save', next => {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now()
  } else {
    this.updateAt = Date.now()
  }

  next()
})

// movieSchema 模式的静态方法
movieSchema.statics = {
  fetch: cb => {
    return this.find({}).sort('meta.updateAt').exec(cb)
  },
  findById: (id, cb) => {
    return this.findOne({_id: id}).exec(cb)
  }
}