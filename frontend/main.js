Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        weather: {},
        city: ''
    },
    created() {
        fetch('/api')
            .then( x => x.json())
            .then( x => {
                this.weather = x
            })
    },
    methods: {
        getWeather: function(city){
            this.weather.name = city
            // x = api.openweathermap.org/data/2.5/weather?q={city}
            // .then( x => x.json())
            // .then( x => {
            //     this.weather = x
            // })
        }
    }
})