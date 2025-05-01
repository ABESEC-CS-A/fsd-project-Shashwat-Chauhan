import express from 'express'
const app = express()

app.use(express.json())

app.get("/" , (req , res) => {
    res.send("Welcome to home route")
})


app.listen(PORT , `listening on http://localhost:${PORT}`)


