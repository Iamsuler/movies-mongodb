import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/movies', {useNewUrlParser: true})
let db = mongoose.connection

db.on('error', () => {
  console.error.bind(console, 'connection error:')
})
db.once('open', () => {
  console.log('mongoose opended!')
})
db.on('close', () => {
  console.log('connection closed!')
})

export default db