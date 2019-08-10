//实现分类数据处理的操作
var conn = require('../until/conn.js')
//获取所有的分类数据
exports.getAllCate = (callback) => {
    let sql = `select * from categories`
    conn.query(sql, (err, data) => {
        if (err) {
            callback(err)
        } else {
            callback(null, data)
        }
    })
}