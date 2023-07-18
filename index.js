const  express = require('express');
const mongoose = require('mongoose')
const cors = require('cors');

const app = express();
app.use(cors())

const PORT = 3000;
app.use(express.json())

app.post("/",(req,res)=>{
    res.send("Hello")
})

app.use(require('./router/userRouter'))



const Server = '127.0.0.1:27017'
const db = 'Task-4'


mongoose.connect(`mongodb://${Server}/${db}`)
    .then(() => {


        app.listen(PORT, () => {
            console.log('Server is Started.......')

        })

    }).catch((err) => {
        console.log(err);
    })