Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
})

var app = new Vue({
    el: '#app',
    data: {
        weather: {}
    },
    created() {
        console.log('created')
        fetch('/api')
            .then( x => x.json())
            .then( x => {
                this.weather = x
            })
    }
})