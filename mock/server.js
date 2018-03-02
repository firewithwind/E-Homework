const Koa = require('koa')

const app = new Koa()

app.use(async ctx => {
    let req = ctx.request
    ctx.response.type = 'application/json'
    if(req.url === '/getAllHomeWork') {
        ctx.body = {
            data: [
                {
                    hid: 1,
                    course: 0,
                    title: '语文第一小节课后练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 2,
                    course: 0,
                    title: '五一假期课后作业',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 3,
                    course: 1,
                    title: '数学练习测试',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 4,
                    course: 2,
                    title: '完形填空练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 5,
                    course: 3,
                    title: '寒假作业第一阶段练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 6,
                    course: 4,
                    title: '寒假练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 7,
                    course: 5,
                    title: '寒假作业',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                }
            ]
        }
    } else if(req.url === '/getDoneHomeWork') {
        ctx.body = {
            data: [
                {
                    hid: 1,
                    course: 0,
                    title: '语文第一小节课后练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 2,
                    course: 0,
                    title: '五一假期课后作业',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 3,
                    course: 1,
                    title: '数学练习测试',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 4,
                    course: 2,
                    title: '完形填空练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 5,
                    course: 3,
                    title: '寒假作业第一阶段练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                }
            ]
        }
    } else if(req.url === '/getUnDoneHomeWork') {
        ctx.body = {
            data: [
                {
                    hid: 6,
                    course: 4,
                    title: '寒假练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 7,
                    course: 5,
                    title: '寒假作业',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                }
            ]
        }
    } else if(req.url === '/getSelfHomework') {
        ctx.body = {
            data: [
                {
                    hid: 1,
                    course: 0,
                    title: '语文第一小节课后练习',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                },{
                    hid: 2,
                    course: 0,
                    title: '五一假期课后作业',
                    time: '2018-1-1',
                    desc: '假期之前做完'
                }
            ]
        }
    } else if(req.url === '/createNewHomework') {
        ctx.body = {
        }
    } else if(req.url === '/getHomeworkInfo') {
        ctx.body = {
            data: {
                course: 0,
                title: '语文第一小节课后练习',
                time: '2018-1-1',
                desc: '假期之前做完',
                question: '<p>这是一道测试题</p>',
                uid: 1,
                answer: '<p>这是一道测试答案</p>',
                question_release_time: '2018-01-12',
                answer_release_time: '2018-01-20'
            }
        }
    } else if(req.url === '/submitAnswer') {
        ctx.body = ''
    }
})

app.listen(3000)
