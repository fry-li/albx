const express = require('express');

//引入页面返回控制器
const pagesController = require('./controllers/pagesController.js')
const userController = require('./controllers/userController.js')
const postController = require('./controllers/postController')
const cateController = require('./controllers/cateController.js')
const uploadController = require('./controllers/uploadController.js')
let router = express.Router();

//配置路由
//后台页面
router.get('/admin', pagesController.getAdminIndexPage)
    .get('/admin/categories', pagesController.getAdminCategoriesPage)
    .get('/admin/comments', pagesController.getAdminCommentsPage)
    .get('/admin/login', pagesController.getAdminLoginPage)
    .get('/admin/navmenus', pagesController.getAdminNavMenusPage)
    .get('/admin/passwordreset', pagesController.getAdminPasswordResetPage)
    .get('/admin/postadd', pagesController.getAdminPostAddPage)
    .get('/admin/posts', pagesController.getAdminPostsPage)
    .get('/admin/profile', pagesController.getAdminProfilePage)
    .get('/admin/settings', pagesController.getAdminSettingsPage)
    .get('/admin/sildes', pagesController.getAdminSlidesPage)
    .get('/admin/users', pagesController.getAdminUsersPage)
    //前台页面
    .get('/', pagesController.getIndexPage)
    .get('/detail', pagesController.getDetailPage)
    .get('/list', pagesController.getListPage)

    //业务处理路由
    .post('/login', userController.login)
    .get('/getAllPost', postController.getAllPost)
    .get('/getAllCate', cateController.getAllCate)
    .post('/uploadFile',uploadController.uploadFile)
module.exports = router 