import e = require('express')

const routes = e.Router()

routes.post('/number', (req, res) => {
    const { number } = req.body

    if(number < 0) {
        return res.status(406).json({"message": "Somente números positivos são aceitos."})
    }

    let sum = 0;
    for(let i = 0; i < number; i++) {
        if(i % 3 === 0 || i % 5 === 0) {
            sum += i
        }
    }

    return res.json({sum})
})

export default routes