import { Router } from 'express'

export const apiRouter = Router()
apiRouter.get('/', (req, res) => {
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

