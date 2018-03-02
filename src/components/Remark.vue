<template>
    <div class="remark">
        <div class="header">
            <el-button type="primary" size="mini" @click="createWork">新建作业</el-button>
        </div>
        <home-work :showHeader="false" :works="works"></home-work>
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
            works: [],
            uid: ''
        }
    },
    created() {
        this.getSelfHomework()
    },
    methods: {
        getSelfHomework() {
            this.request
                .post('/mock/getSelfHomework')
                .send({
                    uid: this.uid
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
        },
        createWork() {
            this.$router.push('/homework/new')
        }
    }
}
</script>
<style lang="stylus" scoped>
.remark
    text-align: left
    .header
        margin-bottom: .4rem
</style>
