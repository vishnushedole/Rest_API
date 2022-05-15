// import is used in ES6 to import functions from other file or folder.
import express from 'express';
import bodyparser from 'body-parser';
import router  from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyparser.json());


app.use('/users',router );

app.use('/',(req,res)=>{
    res.send('hello from api');
})
app.listen(PORT,()=> console.log(`server is running on port http://localhost:${PORT}`));
