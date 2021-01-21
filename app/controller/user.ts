import { Controller } from 'egg';
import sha1 = require('sha1');
import rand = require('csprng');
import { error_002 } from './../common/user';

const loginRules = {
  name: 'string',
  password: 'string',
};

const signRules = {
  name: 'string',
  password: 'string',
  mobile: 'string',
};

export default class User extends Controller {

  async signUp() {
    const { ctx, app } = this;
    const salt = rand(160, 36);
    const reqData: any = { ...ctx.request.body };
    try {
      ctx.validate(signRules);
    } catch (e) {
      return ctx.helper.error(ctx, error_002[0], error_002[1]);
    }
    reqData.password = sha1(ctx.request.body.password + salt);
    reqData.salt = salt;
    reqData.id = await ctx.helper.getNextSequenceValue(app, 'userId');
    const data: any = await ctx.service.user.signUp(reqData);
    ctx.helper.success(ctx, data.ops, 'signUp success !');
  }


  async login() {
    const { ctx } = this;
    const reqData = { ...ctx.request.body };
    const user = await ctx.service.user.findOne({ mobile: reqData.mobile });
    reqData.password = sha1(ctx.request.body.password + user.salt);
    try {
      ctx.validate(loginRules);
    } catch (e) {
      return ctx.helper.error(ctx, error_002[0], error_002[1]);
    }
    ctx.body = await ctx.service.user.login(reqData);
  }
}
