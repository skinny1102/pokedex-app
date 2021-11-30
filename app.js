import express from  'express'
// const exphbs = require('express-handlebars')
import {engine} from 'express-handlebars'
import path from 'path'
import homeRouter from './routes/home.js'
import pokemonRouter from './routes/pokemon.js'
// import connectDB  from './config/db.js'
const app = express();
const PORT = 3000
const __dirname = path.resolve(path.dirname(''));
// import {loadDB} from './utils/db.js'
// loadDB.load('select *from tblPokemon')
// connectDB()
import {modelPokemon} from './models/pokemon.js'
console.log( await modelPokemon.all())
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views')
app.use('/public', express.static(__dirname + '/public'))

app.use("",homeRouter)
app.use("/pokemon",pokemonRouter)

app.listen(PORT,()=>{
    console.log(`Server đang chạy ở PORT ${3000}`)
})