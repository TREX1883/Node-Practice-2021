import { Router } from 'express'

export const apiRouter = Router()
console.log("test")
apiRouter.get('/api', (req, res) => {
    console.log("test2")
    res.json({
        first_name: 'Daniel',
        last_name: 'Purrington',
        human: true,
        hobby: [
            'Camping',
            'Video Games',
            'Eat chocolate'
        ]
    })
})