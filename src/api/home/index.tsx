import http from '../../utils/http'
// promise的封装操作
function to (promise: any) {
  return promise
    .then((data: Object) => {
      return [null, data]
    })
    .catch((err: any) => [err])
}

const httpApi = {
  // banner请求
  async banner(params: any) {
    const url = '/banner'
    const [err, res] = await to(http.get(url, params))
    if (err) {
      // 请求失败
      return Object.assign(
        err,
        {
          status: '406',
          description: err.errMsg,
        },
        true
      )
    }
    // 请求成功
    return res
  },
  // personalized 请求
  async getRecommendPlay(params: any) {
    const url = '/personalized'
    const [err, res] = await to(http.get(url, params))
    if (err) {
      return Object.assign(
        err,
        {
          status: '406',
          description: err.errMsg,
        },
        true
      )
    }
    return res
  },
  // async examineTbAccount (params: any) {
  //   const url = '/examine/tbAccount'
  //   const [err, res] = await to(http.post(url, params))
  //   if (err) {
  //     return Object.assign(
  //       err,
  //       {
  //         status: '406',
  //         description: err.errMsg
  //       },
  //       true
  //     )
  //   }
  //   return res
  // }

  // 其他业务请求.....
}

export default httpApi
