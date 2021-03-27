const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT 
const redisRouter = require('./routers/redisRouter')

const app = express()
app.use(cors())
app.use(express.json())
app.use(redisRouter)

app.use('/', (req, res) => {
    res.send()
})

app.listen(PORT, () => {
    console.log('Server is up, port: ',PORT)
})