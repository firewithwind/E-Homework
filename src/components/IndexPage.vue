<template>
    <div class="indexpage">
        <div class="header">
            <el-upload action="https://jsonplaceholder.typicode.com/posts/"
                      list-type="picture-card"
                      accept="image/*"
                      :show-file-list="false"
                      :multiple="false"
                      :limit="1"
                      :data="user.id"
                      :on-success="uploadPic"
                      :on-error="uploadPicErr">
                <img class="avator" :src="avator">
            </el-upload>
            <h4 class="user-name">{{user.name}}</h4>
        </div>
        <el-form class="infor" ref="form" :model="user" label-width="80px">
            <el-form-item label="在读学校">
                <el-input v-model="user.school"></el-input>
            </el-form-item>
            <el-form-item label="所属年级">
                <el-input v-model="user.grade"></el-input>
            </el-form-item>
            <el-form-item label="所属班级">
                <el-input v-model="user.class"></el-input>
            </el-form-item>
            <el-button type="primary">
                保存修改
            </el-button>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data () {
        return {
            avator: require('../assets/avator.png'),
            user: {
                name: '',
                school: '',
                grade: '',
                class: ''
            }
        }
    },
    created() {
        if(!localStorage.user) {
            this.$message({
                type: 'warning',
                message: '您还未登入'
            })
        } else {
            this.request
                .post('/mock/getUserInfor')
                .send({
                    uid: localStorage.user
                })
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                        if(err) {
                            this.$message.error(err.toString())
                        } else {
                            let data = JSON.parse(res.text).data
                            this.user = data
                        }
                })
        }
    },
    methods: {
        uploadPic(res, file) {
            this.avator = URL.createObjectURL(file.raw)
            this.$message({
              message: '更新成功',
              type: 'success'
            })
        },
        uploadPicErr() {
            this.$message.error('上传失败')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
.indexpage
    font-size: .14rem
    .header
        .avator
            width: 1.5rem
            height: 1.5rem
            margin-top: -1px
            margin-left: -1px
        .user-name
            margin-top: .05rem
    .el-input__inner
        border: none
</style>
