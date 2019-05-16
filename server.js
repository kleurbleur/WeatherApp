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

weather.getAllWeather(function(err, JSONObj){
    console.log(JSONObj)
});

app.listen(port, () => console.log(`I'm live on port ${port}!`))