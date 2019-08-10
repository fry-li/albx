//实现与分类相关的业务处理
//引入分类数据模块
const cateModel = require('../models/cateModel.js')

//获取所有分类数据
exports.getAllCate = (req, res) => {
    cateModel.getAllCate((err, data) => {
        if (err) {
            res.json({
                code: 400, msg: '查询数据失败'
            })
        } else {
            res.json({
                code: 200,
                msg: '数据查询成功',
                data: data
            })
        }
    })
}