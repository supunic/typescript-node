import express from 'express'
// const express = require('express')

const app = express()

// middleware
app.use((req, res, next) => {
  console.log('hello')
  next()
})

// route
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>')
})

// error handling
// app.use((err, req, res, next) => {
//   next()
// })

app.listen(3000)