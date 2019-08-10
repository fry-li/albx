var itcast ={
    //获取路由名称
    getRouterName:(str)=>{
        let index = str.indexof('?')//查询参数标记
        let routerName = ''
        if(index == -1){
            //说明没有参数
            routerName = str.substring(str.lastIndex('/')+1)
        }else{
            routerName = str.substring(str.lastIndex('/')+1)
        }
    }
}