import * as express from 'express'
import * as cookieParser from 'cookie-parser'

const app = express()
app.use(express.json())
app.use(cookieParser())

import userController from './modules/user/userController'
import postController from './modules/post/postController'

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