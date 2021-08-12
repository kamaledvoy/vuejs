console.log("script added");
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce

const App = {
    data() {
        return{
            holdMyItem: [],
            courseList : [{
                id: "#01",
                courseName: "Angular js Front End",
                subTitle: "Make sure to use the production build when deploying for production",
                price: 1999,
                courseImage: "img01.jpg",
                url: "https://angularjs.org/"
            }, {
                id: "#02",
                courseName: "React js Front End",
                subTitle: "Make sure to use the production build when deploying for production",
                price: 2999,
                courseImage: "img02.jpg",
                url: "https://reactjs.org/"
            }, {
                id: "#03",
                courseName: "Vue js Front End",
                subTitle: "Make sure to use the production build when deploying for production",
                price: 999,
                courseImage: "img03.jpg",
                url: "https://v3.vuejs.org/"
            }]
        }
    },
    computed: {
       finalBill(){
           return this.holdMyItem.reduce((accumulator, course) => Number(course.price) + accumulator, 0);
       }
    },
    methods: {
        addToHolder(course){
            this.holdMyItem.push(course)
        }
    }
}

Vue.createApp(App).mount('#vapp')