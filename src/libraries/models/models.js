import { Schema, model } from 'mongoose'

const ProductSchema = new Schema({
  id: String,
  name: String,
  brand: String,
  price: Number,
  description: String,
  image: String,
  type: String,
})

export const ProductModel = model('products', ProductSchema)
