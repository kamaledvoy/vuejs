console.log("add script");

const App = {
    data(){
        return{
            heading: "A trip to japan",
            content: "Some quick example text to build on the card title and make up the bulk of the card's content.",
            myImg: "park.jpg",
            imgurl: "https://www.pexels.com/photo/empty-bench-in-the-garden-5760/"
        }
    }
}

Vue.createApp(App).mount('.vapp')