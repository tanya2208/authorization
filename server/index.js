const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const User = require('./models/user.model')
const jwt = require('jsonwebtoken')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/login')

app.post('/api/register', async (req, res) => {
    try{
         await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status : 'ok'})
    } catch (err) {
        res.json({status : 'error', error: err})
    }
})

app.post('/api/login', async (req, res) => {
    const user = await User.findOne({email: req.body.email, password: req.body.password,})

    if(user){
        const token = jwt.sign({
            name: user.name,
            email: user.email
        }, 'secret123')

        return res.json({status: 'ok', user: true})
    } else{
        return res.json({status: 'error', user: false})
    }
})

app.listen(1337, () => {
    console.log('Server has started')
})