import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    // const { ctx, app } = this;
    // const data = await ctx.helper.getNextSequenceValue(app, 'userId');
    // ctx.helper.success(ctx, data, 'get Index success !');
    const { ctx } = this;
    ctx.body = await ctx.service.test.sayHi('egg');
  }
}
