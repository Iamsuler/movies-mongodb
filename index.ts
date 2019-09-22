import express from 'express'
import http from 'http'
import bodyParser from 'body-parser'
import path from 'path'
import Router from './route/index'
import moment from 'moment'
require('./mongodb/index')

const app = express()
// set
app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({extended: true}))
app.use('/public', express.static(path.join(__dirname, '/public')))
app.use('/', Router)
app.locals.moment = moment


// create server
const port = process.env.port || '8080'
const server = http.createServer(app)
server.listen(port, () => {
  console.log(`your server is running at: http://localhost:${port}`)
})
server.on('error', onError)
server.on('listening', onListening)

function onError (error: any) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`
  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges.`)
      process.exit(1)
      break;
    case 'EADDRINUSE':
      console.error(`${bind} is already in use.`)
      process.exit(1)
      break;
    default:
      throw error
      break;
  }
}
function onListening () {
  let addr = server.address() || port
  let bind = typeof addr === 'string' ? `Pipe ${addr}` : `Port ${addr.port}`
  console.log(`Listening on ${bind}`)
}