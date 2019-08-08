const conn = require('../until/conn.js')

exports.getAllPost = (obj,callback) =>{
    let sql =`select post.*, users.nickname, categories.name
                form posts
                join users on posts.user_id = user.id
                join categories on posts.category_id = categories.id
                order by id desc
                limit (pageNum-1)*pageSize,pageSise`
                // 第2页一页2条从2开始查两条
    conn.query(sql,(err,results)=>{
        if(err){
            callback(err)
        }else{
            callback(null,results)
        }
    })
}