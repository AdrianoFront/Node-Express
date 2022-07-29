import * as express from 'express'

const app = express()

import userController from './controller/userController'
import postController from './controller/userController'

app.use('/user', userController)
app.use('/post', postController)


app.post('/user/signup', (req, res) => {
  res.send('SIGNUP /')
})

app.post('/user/login', (req, res) => {
  res.send('LOGIN /')
})

app.post('/post', (req, res) => {
  res.send('CREATE POST /')
})

app.get('/post/:id?', (req, res) => {
  res.send('GET POST /')
})

app.listen(3000, () => console.log('ONLINE http://localhost:3000'))