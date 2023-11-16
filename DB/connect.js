// const mongoose=require('mongoose');
// const { options } = require('../routes/productRoutes');

// uri='mongodb+srv://sadhikary0055:Rsi2Xbn2TUazNg0z@cluster0.rllqlzu.mongodb.net/Sukalyan?retryWrites=true&w=majority';

// const connectDB=()=>{
//     return mongoose.connect(uri);
// };


// module.exports=connectDB;


const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://sadhikary0055:Rsi2Xbn2TUazNg0z@cluster0.rllqlzu.mongodb.net/Sukalyan?retryWrites=true&w=majority';
const client = new MongoClient(uri);
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
