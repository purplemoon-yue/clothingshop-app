/**
 * 一些静态的常量定义
 */

const staticVal = {
  // 接口响应状态码
  Code: {
    Success: 1000, // 成功
    Fail: 9999, // 失败
    NotFound: 1504, // 地址不存在
    Invalid: 1100, // 无效的凭证
    Expired: 1110 // 凭证过期
  },
  LanguageList: [{
    code: 'zh',
    desc: '简体中文'
  }, {
    code: 'en',
    desc: 'English'
  }]
}

export default staticVal
