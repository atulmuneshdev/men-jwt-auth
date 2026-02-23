const app = require('./src/app')
require('dotenv/config')

const Port = process.env.PORT

app.listen(Port,()=>{
    console.log(`Server run on ${Port} `)
})

