//实现文件上传功能
const formidable = require('formidable')
let path = require('path')

exports.uploadFile=(req,res)=>{
    //1.创建文件上传对象
    let form = formidable.IncomingForm()
    //2.设置编码
    form.encoding = 'utf-8'
    //3.设置文件储存目录
    form.uploadDir = __dirname+'/../uploads'
    //4.设置保留文件扩展名
    form.keepExtensions = true
    //5.调用方法实现文件上传
    form.parse(req,(err,fields,files) =>{
        if(err){
            res.json({
                code:400,
                msg:'文件上传失败',
            })
        }else{
            var imgname = path.basename(files.img.path)
            res.json(({
                code:200,
                msg:'文件上传成功',
                img:imgname
            }))
        }
    })
}