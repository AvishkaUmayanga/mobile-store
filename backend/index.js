const express = require('express')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const cors = require('cors')
const app = express()
require('dotenv').config()

app.use(cors())
app.use(express.json({ limit: '10mb' }));

const addMobile = require('./routes/addMobile')
const fetchMobile = require('./routes/fetchMobile')
const signup = require('./routes/signupRoute')
const loginRoute = require('./routes/loginRoute')
const allMobiles = require('./routes/fetchAllMobiles')
const addToCart = require('./routes/addToCart')
const fetchCart = require('./routes/fetchCartDetails')
const mobileDetails = require('./routes/fetchMobileDetails')
const latestMobiles = require('./routes/fetchLatestMobiles')

const port = process.env.PORT 
const url = process.env.MONGODB_URL

mongoose.connect(url).then(()=>{
    console.log('connected...') 
})
.catch((err)=> console.log(err))

app.listen(port, ()=>{
    console.log(`app is running port ${port}`)
})

app.use(addMobile)
app.use(fetchMobile)
app.use(signup)
app.use(loginRoute)
app.use(allMobiles)
app.use(addToCart)
app.use(fetchCart)
app.use(mobileDetails)
app.use(latestMobiles)