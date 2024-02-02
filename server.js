const express = require('express')
const articleRouter = require('./routes/article')
const mongoose = require('mongoose')
const app = express()
app.set('view engine','ejs')
 app.get('/',(req,res)=>{
    const articles = [
    {
        title: 'Test article 1',
        createdAt: new Date(),
        description: 'Test description'
    },
    {
        title : 'Test article 2',
        createdAt : new Date(),
        description: 'Test description'
    }
]

    
    res.render('article/index',{articles:articles})
 })
 app.use('/article',articleRouter)
app.listen(3000)