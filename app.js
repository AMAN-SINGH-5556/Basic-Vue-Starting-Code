


const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and learn Vue.',
            courseGoalB: 'Master Vue and build amazing apps!',
            vueLink: 'https://www.npmjs.com/package/axios#credits'
        };
    },
    methods: {
        outputGoal() {
            const randomNUMBER = Math.random();
            if(randomNUMBER < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');