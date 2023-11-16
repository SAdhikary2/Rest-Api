const express =require('express');
const { Promise } = require('mongoose');
const app = express();
const product_routes=require('./routes/productRoutes')
const port=5000;
const connectDB=require('./DB/connect')


app.get('/',(req,res)=>{
    res.send('Home Page \n This is Sukalyan from this side  ')
})

//middleware or setting the path
app.use('/api/products',product_routes)




//listening the server
const start=async ()=>{
    try{
        await connectDB();
        app.listen(port,()=>{
            console.log(`successfully connected at ${port}`);
        })
    }
    catch(err){
        console.log(err);
    }
}

start();