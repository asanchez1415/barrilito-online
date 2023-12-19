import { Schema, connect, disconnect, model } from 'mongoose'

export default async function getData() {
  connect('mongodb://localhost:27017/barrilito-online')
  const ProductSchema = new Schema({
    id: String,
    name: String,
    brand: String,
    price: Number,
    description: String,
    image: String,
    type: String,
  })

  const ProductModel = model('products', ProductSchema)

  const data = await new Promise((resolve, reject) => {
    return ProductModel.find({})
      .then((products) => {
        return resolve(products)
      })
      .catch((err) => {
        reject(err)
      })
      .finally(() => {
        disconnect()
      })
  })

  return data
}
