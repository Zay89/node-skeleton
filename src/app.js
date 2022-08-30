//* Dependencias
const express = require('express')
const passport = require('passport')
require('./middlewares/auth.middleware')(passport)

const config = require('./config')

//*Archivos de rutas
const userRouter = require('./users/users.router').router
const authRouter = require('./auth/auth.router').router

//* Configuraciones iniciales
const app = express()

//? Esta configuracion es para habilitar el req.body
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: 'All ok!'})
})


//! Rutas protegidas
//! app.get('/ejemplo',
//!    passport.authenticate('jwt', {session: false}),
//!    (req, res) => {
 //!   res.status(200).json({message: 'Welcome', email: req.user.email})
//! })

app.use('/api/v1/users', userRouter)
app.use('/api/v1/auth', authRouter)

app.listen(config.port, () => {
    console.log(`Server started at port ${config.port}`)
})
