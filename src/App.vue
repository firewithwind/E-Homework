<template>
  <div id="app">
    <el-container>
        <el-header>
            <span class="logo">E-HOMEWORk</span>
            <div class="avator">
                <img v-if="!avator" class="pic" src="./assets/avator.png">
                <img v-else class="pic" :src="avator">
                <span v-if="!!user">{{user.name}}</span>
                <div v-if="!user">
                <a @click="login">登入</a>|<a>注册</a>
                </div>
            </div>
        </el-header>
        <el-container>
            <el-aside>
                <el-menu
                    mode="vertical"
                    default-active="1"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                    <el-menu-item index="1">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-geren"></use>
                        </svg>
                        <span>个人主页</span>
                        <router-link to="/"></router-link>
                    </el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-zuoye"></use>
                            </svg>
                            <span>查看作业</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="2-1">
                                <router-link to="/homework/all"></router-link>
                                <span>全部</span>
                            </el-menu-item>
                            <el-menu-item index="2-2">
                                <router-link to="/homework/undone"></router-link>
                                <span>未完成</span>
                            </el-menu-item>
                            <el-menu-item index="2-3">
                                <router-link to="/homework/done"></router-link>
                                <span>已完成</span>
                            </el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-menu-item index="3">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-shengpi"></use>
                        </svg>
                        <span>作业审批</span>
                        <router-link to="/remark"></router-link>
                    </el-menu-item>
                </el-menu>
            </el-aside>
            <el-main>
                <router-view/>
            </el-main>
        </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
        user: '',
        avator: ''
    }
  },
  created() {
    this.getUserInfor()
    if (!!localStorage.getItem('user')) {
        let user = localStorage.getItem('user')
        this.getUserInfor(user.id)
    }
  },
  methods: {
    getUserInfor(id) {
        this.request
                .post('/mock/getUserInfor')
                .send({
                    uid: id
                })
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                        if(err) {
                            this.$message.error(err.toString())
                        } else {
                            let data = JSON.parse(res.text).data
                            localStorage.user = data.uid
                            this.user = data
                        }
                })
    },
    login() {
        this.getUserInfor(1)
    }
  }
}
</script>

<style lang="stylus">
body
    padding: 0;
    margin: 0;
    font-size: 0;
    a
        text-decoration: none
        cursor: pointer
    #app
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        .el-container
            .el-header
                font-size: .14rem
                height: .6rem
                line-height: .6rem
                border-bottom: 1px solid #F2F6FC
                .logo
                    font-size: .28rem
                    float: left
                    margin-left: .8rem
                    color: #ffd04b
                .avator
                    display: flex
                    float: right
                    align-items: center
                    .pic
                        width: .32rem
                        height: .32rem
                        border-radius: .32rem
                        margin-right: .1rem
            .el-aside
                height: 100%
                .router-link-exact-active
                    color: #ffd04b
                a
                    display: inline-block
                    width: 100%
                    height: 100%
                    position: absolute
                    top: 0
                    left: 0
                    color: #fff
</style>
