import mongoose from 'mongoose'
import 'dotenv/config'

export async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL)
    console.log('Database connected')
  } catch (error) {
    console.log(error)
  }
}
