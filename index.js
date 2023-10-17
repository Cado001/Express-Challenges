import  express from 'express'

const app = express()
app.use(express.json())

app.get('/lorem', (request, response) => {
    response.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit... odio unde.")
})

app.get('/user', (request, response) => {
    response.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit... odio unde.")
})


app.listen(3000, () => {
    console.log('Listening on http://localhost:3000...')
})