var weather = require('openweather-apis');
 
weather.setLang('en');
weather.setCity('The Hague');

 // or set the coordinates (latitude,longitude)
// weather.setCoordinate(50.0467656, 20.0048731);
// // or set city by ID (recommended by OpenWeatherMap)
// weather.setCityId(4367872);

// // or set zip code
// weather.setZipCode(33615);

// 'metric'  'internal'  'imperial'
 weather.setUnits('metric');
 weather.setAPPID('657a9ea75015a174cddf7fd389f23baf');

module.exports = weather