import { Controller } from 'egg';
import { error_002 } from './../common/user';

const listRules = {
};

const byIdListRules = {
  id: 'number',
  title: { required: false, type: 'string' },
};

export default class Article extends Controller {
  /**
   * getList
   * @param 获取文章列表
   */
  public async getList() {
    const { ctx } = this;
    const reqData: any = { ...ctx.request.body, ...ctx.request.query };
    const options: any = {
      skip: Number(reqData.page) * Number(reqData.number),
      limit: Number(reqData.number),
    };
    // ctx.body = options;
    try {
      ctx.validate(listRules);
    } catch (e) {
      return ctx.helper.error(ctx, error_002[0], error_002[1]);
    }
    delete reqData.page;
    delete reqData.number;
    const data: any = await ctx.service.article.getList(reqData, options);
    ctx.helper.getListSuccerr(ctx, data, 'request success');
  }
  /**
   * save
   * @param 保存文章
   */
  public async save() {
    const { ctx, app } = this;
    const reqData: any = { ...ctx.request.body };
    reqData.id = await ctx.helper.getNextSequenceValue(app, 'articleId');
    reqData.create_time = new Date();
    const data: any = await ctx.service.article.save(reqData);
    ctx.helper.success(ctx, data.ops, 'save article success !');
  }
  /**
   * getArticleByID
   * @param id 通过ID查询文章
   */
  public async getArticleByID() {
    const { ctx } = this;
    const reqData: any = { ...ctx.request.body, ...ctx.request.query };
    reqData.id = Number(reqData.id);
    try {
      ctx.validate(byIdListRules, reqData);
    } catch (e) {
      return ctx.helper.error(ctx, error_002[0], error_002[1]);
    }
    ctx.body = await ctx.service.article.getList(reqData, {});
    // ctx.body = reqData;
  }
}
