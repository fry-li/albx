//这个控制器完成所有与用户相关的业务操作
const userModel = require('../models/userModels.js');

//用户登录验证
exports.login = (req, res) => {
    //接收参数
    var obj = req.body
    //业务处理--调用数据模块
    userModel.login(obj.email, (err, data) => {
        if (err) {
            res.json({ code: 400, msg: '服务器异常' })
        } else {
            //判断是否结果集
            if (data) {
                //再判断密码是否正确
                if (data.password == obj.password) {
                    //写入当前登录状态
                    req.session.isLogin = 'true';
                    //把当前用户对象存储session
                    req.session.currentUser = data;

                    res.end(JSON.stringify({ code: 200, msg: '登录成功' }))
                } else {
                    res.json({ code: 400, msg: '密码错误' })
                }
            } else {
                res.json({ code: 400, msg: '邮箱错误' })
            }
        }
    })
}