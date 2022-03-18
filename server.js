const express = require ("express")
const port = 5000
const app = express()
app.use(express.json())

app.get("/" ,(req,res)=>{
    res.send("my is ready too host......")
})
app.listen(port,()=>{
    console.log(`listen on port: ${port}`)
})