import express from  'express'
// const exphbs = require('express-handlebars')
import {engine} from 'express-handlebars'
import path from 'path'
import express_handlebars_sections from 'express-handlebars-sections'
import homeRouter from './routes/home.js'
import pokemonRouter from './routes/pokemon.js'
const app = express();
const PORT = 3000
const __dirname = path.resolve(path.dirname(''));


app.engine('handlebars', engine({
    helpers:{
        section: express_handlebars_sections() ,
        stt:(a)=>{
            if(a<10){
                return '00'+a
            }if(a>=10&&a<100){
                return '0'+a
            }if(a>=100){
                return a
            }
        }
    }
}));
app.set('view engine', 'handlebars');
app.set('views', './views')
app.use('/public', express.static(__dirname + '/public'))

app.use("",homeRouter)
app.use("/pokemon",pokemonRouter)

app.listen(PORT,()=>{
    console.log(`Server đang chạy ở PORT ${3000}`)
})