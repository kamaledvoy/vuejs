console.log("add script");

const App = {
    data(){
        return{
            name: "kamal"
        }
    }
}

Vue.createApp(App).mount('#app');

Vue.createApp({
    data(){
        return{
            name: "Learn vue js"
        }
    }
}).mount('#onemoreapp');