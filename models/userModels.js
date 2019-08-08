var mysql = require('mysql');

//创建数据库链接
var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'baixiu'
})

// 实现登录验证
exports.login = (email, callback) => {
    //创建sql语句
    var sql = `select * from users where email = "${email}"`
    //调用mysql模块----固定写法connection.query(sql, (err, result) => {}
    connection.query(sql,(err, results) => {
        //返回操作结果
        if (err) {
            callback(err)
        } else {
            callback(null, results[0]);
        }
    })
}
