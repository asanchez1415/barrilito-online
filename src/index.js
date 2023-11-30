import express from 'express'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

//import indexRoutes from './routes/index'

const app = express()
const PORT = 3000
const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join(__dirname, 'views'))
app.set('view engine', 'ejs')

//app.use(indexRoutes)
app.use(express.static(join(__dirname, 'public')))

app.get('/', (req, res) => res.render('index', { title: 'Botillería on-line' }))

app.get('/vinos', (req, res) => res.render('vinos'))

app.get('/cervezas', (req, res) => res.render('cervezas'))

app.get('/licores', (req, res) => res.render('licores'))
app.get('/productos', (req, res) => res.render('productos/productos-view'))

app.listen(PORT)
console.log(`Server listening on port ${PORT}`)