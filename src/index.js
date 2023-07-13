import express from 'express'
import { engine } from 'express-handlebars'
import 'dotenv/config'

import route from './routes/index.js'
import { connect as connectDB } from './app/config/db/index.js'

const app = express()
const port = process.env.PORT

// Connect to DB
connectDB()

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './src/resources/views/')

app.use(express.static('public'))

route(app)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
