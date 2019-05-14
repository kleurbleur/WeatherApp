const weather = require('./weather')

const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    weather.getAllWeather(function(err, JSONObj){
        res.send(JSONObj)
    });
})

app.use(express.static('frontend'))


app.listen(port, () => console.log(`Example app listening on port ${port}!`))