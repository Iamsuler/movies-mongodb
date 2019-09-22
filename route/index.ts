import express, { Request, Response } from 'express'
import { Movie } from '../schemas/movie'

const Router = express.Router()

Router.get('/', (req: Request, res: Response) => {
  res.render('index', {
    title: '首页',
    movies: ''
  });
})

Router.get('/movie/:id', (req: Request, res: Response) => {
  let mid = req.params.id
  Movie.findById(mid, (err, result) => {
    res.render('detail', {
      title: '首页',
      movie: result
    })
  })
})

Router.get('/admin/movie', (req: Request, res: Response) => {
  let mid = req.query.id
  if (mid) {
    res.render('admin', {
      title: 'list',
      movie: []
    });
  } else {
    res.render('admin', {
      title: 'admin',
      movie: {
        title: '',
        doctor: '',
        country: '',
        years: '',
        poster: '',
        flash: '',
        summary: '',
        language: ''
      }
    })
  }
})

Router.post('/admin/movie/new', (req: Request, res: Response) => {
  let movie = req.body.movie
  let mid = movie.mid
  if (mid !== 'undefined') {
    console.log(mid)
  } else {
    movie.createAt = movie.updateAt = new Date()
    Movie.create(movie, (err: any, result: any) =>{
      console.log(result)
      res.redirect('/movie/' + result._id)
    })
  }
})

Router.get('/admin/list', (req: Request, res: Response) => {
  let start = req.query.page || 0
  Movie.find((err, result) => {
    console.log(result)
    res.render('list', {
      title: 'list',
      movies: result
    })
  })
})

Router.delete('/admin/delete', (req: Request, res: Response) => {
  let mid = req.query.id || 0
  res.json({
    success: 1
  })
})

export default Router