//此文件处理所有文件数据的操作
const conn = require('../until/conn.js')

exports.getAllPost = (obj, callback) => {

    //创建sql语句---多表连接
    var sql = `select posts.*,users.nickname,categories.name
                from posts
                join users on posts.user_id = users.id
                join categories on posts.category_id = categories.id
                where 1=1 `
    //where加条件
    if (obj.cate && obj.cate != 'all') {
        sql += ` and posts.category_id = ${obj.cate}`
    }
    if (obj.status && obj.status != 'all') {
        sql += ` and posts.status = '${obj.status}'`
    }
    sql += ` order by id desc
            limit ${(obj.pageNum - 1) * obj.pageSize},${obj.pageSize}`
    // 第2页一页2条从2开始查两条

    //调用方法获取数据                        
    conn.query(sql, (err, results) => {

        if (err) {
            callback(err)
        } else {
            //创建sql语句查询总记录数量
            
            sql = `select count(*) as cnt
                    from posts
                    join users on posts.user_id = users.id
                    join categories on posts.category_id = categories.id`
            conn.query(sql, (err2, res2) => {
                if (err2) {
                    callback(err2);
                } else {
                    callback(null, { data: results, total: res2[0].cnt })
                }
            })
        }
    })
}