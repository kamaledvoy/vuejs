console.log("script added");

const App = {
    data() {
        return{
            courseList : [{
                id: "#01",
                courseName: "Angular js Front End",
                subTitle: "Make sure to use the production build when deploying for production",
                price: "1999",
                courseImage: "img01.jpg",
                url: "https://angularjs.org/"
            }, {
                id: "#02",
                courseName: "React js Front End",
                subTitle: "Make sure to use the production build when deploying for production",
                price: "1999",
                courseImage: "img02.jpg",
                url: "https://reactjs.org/"
            }, {
                id: "#03",
                courseName: "Vue js Front End",
                subTitle: "Make sure to use the production build when deploying for production",
                price: "1999",
                courseImage: "img03.jpg",
                url: "https://v3.vuejs.org/"
            }]
        }
    }
}

Vue.createApp(App).mount('#vapp')