const express=require('express')
const cors=require('cors')
const port=4000;
const bdd=require('./db')
const app=express();
const UserRoute=require('./router/UserRoute');
const AdminRoute=require('./router/AdminRoute');

app.use(express.json())
app.use(cors())
app.use('/', UserRoute);
app.use('/',AdminRoute)
app.listen(port,()=>{
    console.log(`server is runing http://localhost:${port}`)
})