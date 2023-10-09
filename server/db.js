const mongoose=require('mongoose')
const URL="mongodb://127.0.0.1:27017/crud_users"
mongoose.connect(URL,{useNewUrlParser:true})
const conn=mongoose.connection;
conn.once('open',()=>{
    console.log('data base connected')
})
conn.on('error',()=>{
    console.log('error')
    process.exit()
})