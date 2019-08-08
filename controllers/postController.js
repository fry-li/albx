const postModel = require('../models/postModels.js')
const moment = require('moment')


exports.getAllPost=(req,res) => {
    let obj = req.query
    postModel.getAllPost(obj,(err,data)=>{
        if(err){
            res.json({code:400,msg:'数据查询失败'})
        }else{
            for(var i=0; i<data.length; i++){
                data[i] = moment(data[i].created).format('YYYY-MM-DD HH-mm-ss')
            }
            res.json({
                code:200,
                msg:'数据查询成功',
                data:data
            })
        }
    })

}