//引入中间键  express
const express = require('express');
const router = require('./router.js');
//创建服务器
const app = express();
//添加端口监听
app.listen(8282, () => {
    console.log('http://127.0.0.1:8282')
})

//托管静态资源
app.use('/assets', express.static('assets'));
app.use('/uploads', express.static('uploads'));

//配置ejs模板引擎
app.set('view engine', 'ejs');
//进行ejs模板文件查询的默认目录配置
app.set('views', __dirname + '/views');

//让app服务器使用Router进行路由管理
app.use(router);