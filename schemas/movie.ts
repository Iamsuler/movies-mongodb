import { Schema, Document, Model, model } from 'mongoose'

interface IMovie {
  title: string;
  doctor: string;
  language: string;
  country: string;
  summary: string;
  flash: string;
  poster: string;
  year: number;
  meta: object
}

interface IMovieModel extends IMovie, Document {
  mid: string;
}

const movieSchema: Schema = new Schema({
  title: String,
  doctor: String,
  language: String,
  country: String,
  summary: String,
  flash: String,
  poster: String,
  year: Number,
  createAt: {
    type: Date,
    default: Date.now()
  },
  updateAt: {
    type: Date,
    default: Date.now()
  }
})

// movieSchema.pre 表示每次存储数据之前都先调用这个方法
// movieSchema.pre('save', function (next: any) {
//   if (this.isNew) {
//     this.meta.createAt = this.meta.updateAt = Date.now()
//   } else {
//     this.meta.updateAt = Date.now()
//   }

//   next()
// })

// movieSchema 模式的静态方法
movieSchema.statics = {
  fetch (cb: any) {
    return this.find({}).sort('meta.updateAt').exec(cb)
  },
  findById (id: string, cb: any) {
    return this.findOne({_id: id}).exec(cb)
  }
}

const Movie: Model<IMovieModel> = model<IMovieModel>('Movie', movieSchema)

export {
  movieSchema,
  Movie
}