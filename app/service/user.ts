import { Service } from 'egg';

/**
 * Test Service
 */

export default class User extends Service {

  /**
   * login
   * @param name - your name
   */
  public async login(reqData: any) {
    const result = await this.app.mongo.find('planet', { query: reqData });
    // return reqData;
    return result;
  }

  /**
   * signUp
   * @param reqData user info
   */
  public async signUp(reqData: any) {
    const result = await this.app.mongo.insertOne('planet', {
      doc: reqData,
    });
    return result;
    // return reqData;
  }


  /**
   * findOne
   * @param name - your name
   */
  public async findOne(reqData: any) {
    const result = await this.app.mongo.findOne('planet', { query: reqData });
    // return reqData;
    return result;
  }
}
