import express from 'express'
import userRouter from './routes/user.routes.js'

const PORT = process.env.PORT || 8080;

const app = express();
app.use(express.static("public"))
app.get('/', function (req, res) {
    res.sendFile('index.html')
})

app.use(express.json());
app.use('/api', userRouter);



app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT));