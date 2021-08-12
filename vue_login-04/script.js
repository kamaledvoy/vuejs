console.log("login script added");

const App = {
    data(){
        return{
            isLogin: true,
            anotherBool: true
        }
    }
}

Vue.createApp(App).mount('#vapp')