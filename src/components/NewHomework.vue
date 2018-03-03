<template>
    <div class="newhomework">
        <el-form v-model="infor">
            <el-form-item label="作业标题" label-width="80px">
                <el-input v-model="infor.title"></el-input>
            </el-form-item>
            <el-form-item label="作业要求" label-width="80px">
                <el-input v-model="infor.desc"></el-input>
            </el-form-item>
            <el-form-item label="科目" label-width="80px">
                <span>{{courseEnum[type]}}</span>
            </el-form-item>
            <el-upload
                accept="image/*"
                :multiple="true"
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview">
              <i class="el-icon-plus"></i>
            </el-upload>
            <div id="editorElem" style="text-align:left"></div>
            <el-button type="primary" @click="publish">发布</el-button>
        </el-form>
        <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl">
        </el-dialog>
    </div>
</template>
<script>
import { courseEnum } from '@/dataMap'
export default {
    data() {
        return {
            courseEnum,
            type: 0,
            editorContent: '',
            infor: {
                title: '',
                desc: ''
            },
            dialogImageUrl: '',
            dialogVisible: false
        }
    },
    created() {
    },
    mounted() {
        let Editor = this.wangEditor
        let editor = new Editor('#editorElem')
        editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        editor.customConfig.menus = [
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
        editor.create()
    },
    methods: {
        publish() {
            if(!this.infor.title) {
                this.$message.error('标题不能为空')
            } else if(!this.editorContent) {
                this.$message.error('内容不能为空')
            } else {
                this.request
                    .post('/mock/createNewHomework')
                    .send({
                        ...this.infor,
                        uid: this.uid,
                        course: this.type,
                        question: this.editorContent,
                        question_release_time: Date.now().toString()
                    })
                    .set('Content-Type', 'application/json')
                    .end((err, res) => {
                            if(err) {
                                this.$message.error(err.toString())
                            } else {
                                this.$message({
                                    type: 'success',
                                    message: '发布成功'
                                })
                            }
                    })
            }
        },
        handlePictureCardPreview(file) {
            this.dialogImageUrl = file.url
            this.dialogVisible = true
        }
    }
}
</script>
<style lang="stylus">
.newhomework
    font-size: .14rem
    .el-form
        text-align: left
        .el-button
            margin-top: .1rem
    .el-dialog
        z-index: 150
</style>
