const express = require('express')
require('./db/mongoose')
require('dotenv').config()
const app = express()
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
const port = process.env.PORT 
// app.use((req,res,next) =>{
//        res.status(503).send('Site under maintenance')
//})
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' +port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async() => {
//     const task = await Task.findById('5da7341bf8afb63c881158bb')
//     await task.populate('owner').execPopulate()
//     console.log(task.owner)

//     const user = await User.findById('5da733727cddee2930e39537')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }
// main()

// const bcrypt = require('bcryptjs')
// const myFunction = async() => {
//     const pass = 'Red12345'
//     const hashedPass = await bcrypt.hash(pass,8)

//     console.log(pass)
//     console.log(hashedPass)

//     const isMatch = await bcrypt.compare('red123', hashedPass)
//     console.log(isMatch)
// }
// myFunction()