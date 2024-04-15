import express from "express";
import mathRouter from './routers/math'
import newsPaperRouter from './routers/newspaper'

const app = express();

app.set("port", 3000)

app.use('/math', mathRouter)
app.use('/paper', newsPaperRouter)

app.get("/", (req, res) => {
    res.type("text/html")
    res.send("<h1> WELCOME HOME <h1><p>Available routers: <a href='/math'>/math</a><p> <a href='/paper'> /paper</a>")
})

app.listen(app.get("port"), () => {
    console.log("[server] https:localhost:" + app.get("port"))
})