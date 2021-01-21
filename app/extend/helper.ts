export default {
  error(ctx, code, message) {
    ctx.body = {
      code,
      message,
    };
  },
  success(ctx, result = null, message = 'Succeed') {
    ctx.body = {
      code: 0,
      message,
      data: result,
    };
  },
  /**
   * save
   * @param reqData article info
   */
  async getNextSequenceValue(app: any, sequenceName: string) {
    const sequenceDocument: any = await app.mongo.findOneAndUpdate('ids',
      {
        filter: { _id: sequenceName },
        update: { $inc: { sequence_value: 1 } },
      },
    );
    return sequenceDocument.value.sequence_value;
  },
  getListSuccerr(ctx, result = [], message = 'Succeed') {
    result.map((item: any) => {
      delete item._id;
      return item;
    });
    ctx.body = {
      code: 0,
      message,
      data: result,
    };
  },
};
