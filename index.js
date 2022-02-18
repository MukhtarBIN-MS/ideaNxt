import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import dotenv from 'dotenv';
import usersRoutes from './routes/users.js';
import bodyParser  from 'body-parser';


dotenv.config();

const router = express.Router();
//const DB = process.env.MONGO_URI;

const app = express();


app.use(bodyParser.json({ extende:"true"}));
app.use(bodyParser.urlencoded({extended:"true"}));
app.use(helmet());
app.use(morgan("common"));
app.use(cors());




app.use('/api/register', usersRoutes);
app.use('/', (req, res)=>{
  res.send('Hello');
})



const PORT = process.env.PORT || 5000;

mongoose.connect("mongodb+srv://mukyl:myl772ng@ideanxtcluster.lnv1q.mongodb.net/ideaNxtDatabase?retryWrites=true&w=majority", {useNewUrlParser :true, useUnifiedTopology: true})
  .then(()=> app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)))
  .catch((error)=> console.log(error.message));

mongoose.set('useFindAndModify', false);
