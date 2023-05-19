import express from 'express'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import userRouter from './routes/user.routes.js'

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("public"))

app.get('/menu', function (req, res) {
    res.sendFile(__dirname + '/public/menu.html')
})

app.use('/', userRouter)


app.use(express.json());
app.use('/api', userRouter);



app.listen(PORT, () => console.log("SERVER STARTED ON PORT" + PORT));