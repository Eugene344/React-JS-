const PORT = 9001
const URLDB = 'mongodb://127.0.0.1:27017'

const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const { secret } = require('./config')
const User = require('./models/User')
const Product = require('./models/Product')
const { jwtDecode } = require('jwt-decode')

const app = express()

app.use(cors())
app.use(express.json())

const generateAccessToken = (id, login) => {
    const payload = {
        id, login
    }
    return jwt.sign(payload, secret, {expiresIn: '24h'})
}

app.post('/registration', async (req, res) => {
    console.log(req.body)
    const {login, password, email} = req.body
    const user = new User({login, password, email})
    await user.save()
    res.json({
        message: 'Вы успешно зарегистрировались!'
    })
})

app.post('/login', async (req, res) => {
    console.log(req.body)
    const {login, password} = req.body
    const user = await User.findOne({login}) 
    if (!user){
        return res.status(400).json({message: 'Пользователь не найден!'})
    }
    if (user.password !== password){
        return res.status(400).json({message: 'Неверный логин или пароль!'})
    }
    const jwtToken = generateAccessToken(user._id, user.login)
    res.json({
        message: 'Вы успешно авторизовались!',
        token: jwtToken
    })
})

app.get('/products', async (req, res) => {
    let products

        products = await Product.find()

    /*const products = [
        { id: 1, header: 'Товар 1', price: 120 },
        { id: 2, header: 'Товар 2', price: 2100 },
        { id: 3, header: 'Товар 3', price: 1220 },
        { id: 4, header: 'Товар 4', price: 999 },
        { id: 5, header: 'Товар 5', price: 399 },
        { id: 6, header: 'Товар 6', price: 3500 },
        { id: 7, header: 'Товар 4', price: 14999 },
        { id: 8, header: 'Товар 5', price: 54 },
        { id: 9, header: 'Товар 6', price: 1359 }
      ]*/

    res.json({
        data: products
    })
})

app.post('/user/changeEmail', async (req, res) => {
    console.log(req.body)
    const {token, email} = req.body
    let user 
       {user = await User.findOneAndUpdate({ login: jwtDecode(token).login }, { email: email }, { returnOriginal: false })} 
    res.json({
        message: 'E-Mail изменён!',
        newEmail: user.email
    })
})

app.post('/user/changePassword', async (req, res) => {
    console.log(req.body)
    const {token, password} = req.body
    let user 
       {user = await User.findOneAndUpdate({ login: jwtDecode(token).login }, { password: password }, { returnOriginal: false })} 
    res.json({
        message: 'E-Mail изменён!',
        newPassword: user.password
    })
})

const start = async () => {
    try {
        await mongoose.connect(URLDB, {authSource: "admin"})
        app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порте`))
    } catch (e) {
        console.log(e)
    }
}

start()
