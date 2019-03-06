// require('dotenv').config();
// const url = process.env.MONGO_URL;
import * as mongoose from 'mongoose';
import seedUser from './seedData';
import { User } from '../src/repositories/user/UserModel';
// import IUser from '../src/repositories/user/IUserModel';
// console.log(url);
export default class Database{

    open(url:string){
        mongoose.connect(url, {useNewUrlParser:true})
        .then(()=>console.log("Connected to DB..."))
        .catch(err=>console.log(err.message));  
        seedUser(User);
    }

    disconnect(){
        mongoose.disconnect();
    }
}


// db.disconnect();