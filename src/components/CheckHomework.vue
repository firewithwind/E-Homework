<template>
    <div class="checkhomework">
        <h3 class="title">{{info&&info.title}}</h3>
        <el-tag type="success" size="mini">{{courseEnum[info&&info.course]}}</el-tag><span class="time">{{info&&info.question_release_time}}</span>
        <p class="desc">{{info&&info.desc}}</p>
        <div id="question" style="text-align:left"></div>
        <div class="split">请在下面区域解答</div>
        <div id="editArea" style="text-align:left"></div>
        <el-button type="primary" style="margin-top: .1rem" @click="submit">提交答案</el-button>
    </div>
</template>
<script>
import {courseEnum} from '@/dataMap'
export default {
    data() {
        return {
            courseEnum,
            info: null,
            editorContent: ''
        }
    },
    created() {
        let query = location.href.split('?')[1]
        let id = query.split('=')[1]
        this.getHomeworkInfo(id)
    },
    mounted() {
        let Editor = this.wangEditor
        let editor = new Editor('#question')
        let editor2 = new Editor('#editArea')
        editor.customConfig.menus = []
        editor2.customConfig.menus = [
            'head',  // 标题
            'bold',  // 粗体
            'italic',  // 斜体
            'underline',  // 下划线
            'strikeThrough',  // 删除线
            'foreColor',  // 文字颜色
            'backColor',  // 背景颜色
            'link',  // 插入链接
            'list',  // 列表
            'justify',  // 对齐方式
            'quote',  // 引用
            'image',  // 插入图片
            'table',  // 表格
            'undo',  // 撤销
            'redo'  // 重复
        ]
        editor2.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.create()
        editor2.create()
        this.editor = editor
        editor.$textElem.attr('contenteditable', false)
    },
    methods: {
        getHomeworkInfo(id) {
            this.request
                .post('/mock/getHomeworkInfo')
                .send({
                    hid: id,
                    uid: this.uid
                })
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                        if(err) {
                            this.$message.error(err.toString())
                        } else {
                            let data = JSON.parse(res.text).data
                            this.info = data
                            this.editor.txt.html(this.info && this.info.question)
                        }
                })
        },
        submit() {
            this.request
                .post('/mock/submitAnswer')
                .send({
                    hid: this.info.hid,
                    uid: this.uid,
                    answer: this.editorContent
                })
                .set('Content-Type', 'application/json')
                .end((err, res) => {
                        if(err) {
                            this.$message.error(err.toString())
                        } else {
                            this.$message({
                                type: 'success',
                                message: '提交成功'
                            })
                        }
                })
        }
    }
}
</script>
<style lang="stylus" scoped>
.checkhomework
    font-size: .18rem
    .title
        font-size: .18rem
    .time
        margin-left: .1rem
    .desc, .time
        font-size: .14rem
    .split
        margin-top: .1rem
        margin-bottom: .1rem
        font-size: .14rem
</style>
