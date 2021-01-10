import express, { Request, Response, NextFunction } from 'express'
// const express = require('express')

const app = express()

// middleware
app.use((req, res, next) => {
  console.log('hello')
  throw new Error()
  next()
})

// route
app.get('/', (req, res, next) => {
  res.send('<h1>Hello</h1>')
})

// error handling
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  next()
})

app.listen(3000)