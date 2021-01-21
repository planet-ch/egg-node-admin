import { Service } from 'egg';

/**
 * Article Service
 */

export default class Article extends Service {

  /**
   * getList
   * @param id key
   */
  public async getList(reqData: any, options: any) {
    console.log(options, reqData);
    const result = await this.app.mongo.find('article', { query: reqData, ...options });
    // return reqData;
    return result;
  }

  /**
   * save
   * @param reqData article info
   */
  public async save(reqData: any) {
    const result = await this.app.mongo.insertOne('article', {
      doc: reqData,
    });
    return result;
    // return reqData;
  }

  public async getArticleByID(reqData: any) {
    const result = await this.app.mongo.find('article', { query: reqData });
    // return reqData;
    return result;
  }
}
