import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    res.type("text/html")
    res.send("<p> This is a news paper path <p>")
});

export default router;