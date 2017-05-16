const config = require('../configs'),
      Router = require('koa-router'),
      router = new Router({
          prefix: config.app.routerBaseApi
      }),
      A = require('../controllers/article.js'),
      T = require('../controllers/tag.js'),
      U = require('../controllers/user.js');


/* HTTP动词
    GET     //查询
    POST    //新建
    PUT     //替换
    PATCH   //更新部分属性
    DELETE  //删除指定ID的文档
*/

router
    .get('/articles/:id', A.getArticleById)                      //获取单个文章
    .post('/articles', A.createArticle)                         //创建文章
    .delete('/articles/:id', A.deleteArticleById)                   //删除文章
    .patch('/articles/:id', A.modifyArticle)                      //修改文章
    .get('/allArticles', A.getAllArticles)                      //获取所有文章
    .get('/articles', A.getAllPublishedArticles)                      //获取所以已发布的文章

    .post('/tags', T.createTag)                                  //创建标签
    .get('/tags', T.getAllTags)                                    //获取所有标签
    .patch('/tags/:id', T.modifyTag)                                //修改单个标签
    .delete('/tags/:id', T.deleteTag)                               //删除单个标签

    .post('/login', U.login)                                        //用户登录
    .post('/logout', U.logout)                                      //用户登出
    .post('/modifyUser', U.updateUserMes)                           //更新用户信息
    .post('/modifyPwd', U.resetPwd);                                //更新用户密码


exports = module.exports = router;

