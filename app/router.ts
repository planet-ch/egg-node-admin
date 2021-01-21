import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  /**
   * user
   */
  router.get('/', controller.home.index);
  router.post('/login', controller.user.login);
  router.post('/signUp', controller.user.signUp);
  router.get('/api/notices', controller.home.index);
  router.get('/notices', controller.home.index);

  /**
   * article
   */
  router.get('/article/getList', controller.article.getList);
  router.post('/saveArticle', controller.article.save);
  router.get('/getArticleByID', controller.article.getArticleByID);
};
