async function AjaxAdapter(type, url, data, success, failed) {
  const type = type.toUpperCase()
  let result
  try {
    // 实际的请求全部由新接口发起
    if (type === "GET") {
      result = (await HttpUtils.get(url)) || {}
    } else if (type === "POST") {
      result = (await HttpUtils.post(url, data)) || {}
    }
    // 假设请求成功对应的状态码是1
    result.statusCode === 1 && success
      ? success(result)
      : failed(result.statusCode)
  } catch (err) {
    // 捕捉网络错误
    if (failed) {
      failed(err.statusCode)
    }
  }
}

// 用适配器适配旧的Ajax方法
async function Ajax(type, url, data, success, failed) {
  await AjaxAdapter(type, url, data, success, failed)
}
