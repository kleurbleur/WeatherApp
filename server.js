const weather = require('./weather')

const express = require('express')
const app = express()
const port = 3000

app.get('/api', (req, res) => {
    if(req.query.city) {
        weather.setCity(req.query.city)
    }
    weather.getAllWeather(function(err, JSONObj){
        var result = JSONObj
        result.dt = new Date(result.dt * 1000).toDateString()
        res.send(result)
    });
})

app.use(express.static('frontend'))

weather.getAllWeather(function(err, JSONObj){
    console.log(JSONObj)
});

app.listen(port, () => console.log(`I'm live on port ${port}!`))