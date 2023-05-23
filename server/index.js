import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import postRoutes from './routes/postRoutes.js'
import DallERoutes from './routes/DallERoutes.js'
const app = express()
const port = 3000

dotenv.config()
app.use(cors())
app.use(express.json({limit:'50mb'}))
app.use('/api/v1/post',postRoutes)
app.use('/api/v1/dalle',DallERoutes)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  try {
    connectDB(process.env.MONGODB_URL)
    console.log(`Example app listening on port ${port}`)
  } catch (error) {
    console.log(error)
  }
})