import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.type("text/html")
    res.send("<h1> THIS IS A MATH ROUTE <h1>")
});

export default router;