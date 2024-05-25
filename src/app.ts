import express, { Application, Request, Response } from 'express'
import { EcommerceRoter } from './modules/e-commerce/e-commerce.router'
const app:Application = express()




app.use(express.json())

app.use('/api/products' , EcommerceRoter)
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})

export default app;