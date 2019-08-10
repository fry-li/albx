$(function () {
    //定义全局的页码和页数
    let pageNum = 1;
    let pageSize = 3;

    function init(search) {
        $.ajax({
            url: '/getAllPost',
            type: 'get',
            data: {
                pageNum: pageNum,
                pageSize: pageSize,
                ...search
            },
            success: function (result) {
                // let res = {
                //     code: 1,
                //     data: {
                //         data: [],
                //         total: 9
                //     }
                // }
                let html = template('postListTemp', result.data)
                $('tbody').html(html)
                //生成分业结构
                setPagenation(Math.ceil(result.data.total / pageSize))

            }
        })
    }
    //输出init
    init();


    //实现分页功能
    function setPagenation(total) {
        //初始化分页结构
        $('.pagination').bootstrapPaginator({
            // 配置
            bootstrapMajorVersion: 3,
            currentPage: pageNum, // 当前页码
            totalPages: total, // 总页数
            onPageClicked: function (event, originalEvent, type, page) {
                // page就是你当前想获取数据的页码
                // 修改全局pageNum
                pageNum = page
                // 重新调用加载数据的方法
                init()
            }
        })
    }


    //加载分类数据
    $.ajax({
        type: 'get',
        url: '/getAllCate',
        dataType: 'json',
        success: function (res) {
            console.log(res)
            var str = '<option value="all">所有分类</option>'
            for (var i = 0; i < res.data.length; i++) {
                str += `<option value ="${res.data[i].id}">${res.data[i].name}</option>`
            }
            $('.cateSelector').html(str)
        }
    })

    //实现筛选
    $('.btn-search').on('click', function () {
        //收集数据
        var obj = {
            cate: $('.cateSelector').val(),
            status: $('.statuSelector').val()
        }
        console.log(obj)
        //发起ajax请求
        init(obj)

    })
})