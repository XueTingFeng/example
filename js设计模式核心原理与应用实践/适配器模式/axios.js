// 若用户未手动配置适配器，则使用默认的适配器
var adapter = config.adapter || defaults.adapter

// dispatchRequest方法的末尾调用的是适配器方法
return adapter(config).then(
  function onAdapterResolution(response) {
    // 请求成功的回调
    throwIfCancellationRequested(config)

    // 转换响应体
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    )

    return response
  },
  function onAdapterRejection(reason) {
    // 请求失败的回调
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config)

      // 转换响应体
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        )
      }
    }

    return Promise.reject(reason)
  }
)

function getDefaultAdapter() {
  var adapter
  // 判断当前是否是node环境
  if (
    typeof process !== "undefined" &&
    Object.prototype.toString.call(process) === "[object process]"
  ) {
    // 如果是node环境，调用node专属的http适配器
    adapter = require("./adapters/http")
  } else if (typeof XMLHttpRequest !== "undefined") {
    // 如果是浏览器环境，调用基于xhr的适配器
    adapter = require("./adapters/xhr")
  }
  return adapter
}

module.exports = function httpAdapter(config) {
  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    // 具体逻辑
  }
}


module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    // 具体逻辑
  }
}
