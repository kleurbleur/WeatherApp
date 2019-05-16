
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
        getWeather: function(){
            let city = this.city
            x = fetch('/api/?city='+city+'&banaan=lekker')
            .then( x => x.json())
            .then( x => {
                this.weather = x
            })
        }
    }
})