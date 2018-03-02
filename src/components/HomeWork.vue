<template>
    <div class="homework">
        <div class="header">
            <el-checkbox :indeterminate="isIndeterminate" v-model="showAll" @change="selectAll">全选</el-checkbox>
            <div style="margin-top: .1rem"></div>
            <el-checkbox-group v-model="checkedList" @change="handleCheckedListChange">
                <el-checkbox v-for="(course, index) in courses" :label="index" :key="course">{{course}}</el-checkbox>
            </el-checkbox-group>
            <div style="margin-top: .1rem"></div>
            <el-button type="primary" size="mini">查询</el-button>
            <div style="margin-top: .1rem"></div>
        </div>
        <div class="content">
            <div class="work-list" v-for="(work, index) in works" :key="index">
                <el-tag type="success" size="mini">{{courses[work.course]}}</el-tag>
                <span class="work-title">{{work.title}}</span>
                <span class="work-time">{{work.time}}</span>
                <p class="work-desc">{{work.desc}}</p>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                showAll: false,
                isIndeterminate: false,
                checkedList: [],
                courses: ['语文','数学','英语','物理','化学','生物','政治','历史','地理','信息'],
                works:[
                    {
                        course: 0,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    },{
                        course: 0,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    },{
                        course: 1,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    },{
                        course: 2,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    },{
                        course: 3,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    },{
                        course: 4,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    },{
                        course: 5,
                        title: '暑假作业',
                        time: '2018-1-1',
                        desc: '假期之前做完'
                    }
                ]
            }
        },
        methods: {
            selectAll() {
                if (!!this.showAll) {
                    this.checkedList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
                    this.isIndeterminate = false
                } else {
                    this.checkedList = []
                    this.isIndeterminate = false
                }
            },
            handleCheckedListChange() {
                if(this.checkedList.length === 10) {
                    this.isIndeterminate = false
                    this.showAll = true
                } else if (this.checkedList.length === 0) {
                    this.isIndeterminate = false
                    this.showAll = false
                } else {
                    this.isIndeterminate = true
                    this.showAll = false
                }
            }
        }
    }
</script>
<style lang="stylus" scoped>
.homework
    .header
        text-align: left
        border-bottom: 1px solid #F2F6FC
    .content
        max-height: 100%
        margin-top: .1rem
        text-align: left
        border-bottom: 1px solid #EBEEF5
        overflow-y: auto
        .work-title
            font-size: .18rem
        .work-time
            float: right
            margin-right: .3rem
        .work-desc
            margin-top: .05rem
            text-indent: .4rem
</style>
