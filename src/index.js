import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
// -- Data from MongoDB
// import getProducts from './libraries/getData/getProducts.js'
// const products = await getProducts()

// -- Data from local Json
import getDataFromJson from './libraries/getData/getDataFromJson.js'
const products = await getDataFromJson('assets/DB/products.json')

const app = express()
const PORT = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(join(__dirname, 'public')))

// ROUTES
app.get('/', (req, res) => res.render('index', { title: 'Botillería on-line' }))
app.get('/productos', (req, res) =>
  res.render('productos/productos-view', { products: products })
)

app.listen(PORT)
console.log(`Server listening on port ${PORT}`)
