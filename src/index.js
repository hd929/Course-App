import express from 'express'
import { engine } from 'express-handlebars'

import route from './routes/index.js'

const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './src/resources/views/')

app.use(express.static('public'))

route(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
