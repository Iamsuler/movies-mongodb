import mongoose from 'mongoose'
import { movieSchema } from '../schemas/movie'
// 编译生成movie模型
const movie = mongoose.model('Movie', movieSchema)

export default movie