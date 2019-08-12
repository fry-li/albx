$(function(){
    $('#feature').on('change',function(){
        //使用Formdata收集图片数据---共4个步骤
        //1.获取文件对象
        var myfile = document.querySelector('#feature').files[0]
        //2.创建formdata对象
        var formiable = new FormData()
        //3.在formdata中追加数据
        formData.append('img',myfile)
        formdata.append('username',"名字叫：jackandrose") 
        //4.使用ajax发起请求
        $.ajax({
            type:'post',
            url:'/uploadFile',
            data:formdata,
            contentType:false,
            processData:false,
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    //实现预览：为img标签设置Src属性，让浏览器进行解析，发起二次请求
                    $('.thumbnail').attr('src','/uploads'+res.img).show()
                    //将图片名称存储到指定的隐藏域中
                    $('[name=feature]').val(res.img)
                }else{
                    $('.alert-danger > span'),text(res.img).fadeIn(500).delay(3000).fadeout(500)
                }
            }
        })
    })
})