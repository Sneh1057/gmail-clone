import mongoose from "mongoose";
import dotenv from 'dotenv';

const connection = ()=>{
    const DB_URI =`mongodb://user2000:Sneh1050@ac-z2e4hhm-shard-00-00.z8mvipt.mongodb.net:27017,ac-z2e4hhm-shard-00-01.z8mvipt.mongodb.net:27017,ac-z2e4hhm-shard-00-02.z8mvipt.mongodb.net:27017/?ssl=true&replicaSet=atlas-yq5i6f-shard-0&authSource=admin&retryWrites=true&w=majority`;
       try {  mongoose.connect(DB_URI,{useNewUrlParser:true});
         console.log("database connected successfully");
    }catch(error){
        console.log('Error while connecting with the database',error.message);
    }
}
 export default connection;