<template>
<div class="homeworkundone">
    <home-work :works="works"></home-work>
</div>
</template>
<script>
import HomeWork from '@/components/HomeWork'
export default {
    components: {
        HomeWork
    },
    data() {
        return {
            works: []
        }
    },
    created() {
        this.getUnDoneHomeWork()
    },
    methods: {
        getUnDoneHomeWork() {
            this.request
                .post('/mock/getUnDoneHomeWork')
                .send({
                    uid: this.uid,
                    courses: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                })
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                        if(err) {
                            this.$message.error(err.toString())
                        } else {
                            let data = JSON.parse(res.text).data
                            this.works = data
                        }
                })
        }
    }
}
</script>
<style lang="stylus">
div
    font-size: 14px
</style>
