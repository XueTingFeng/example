export default class HttpUtils {
  //get方法
  static get(url) {
    return new Promise((resolve, reject) => {
      //调用fetch
      fetch(url)
        .then((response) => response.json())
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  //post
  static post(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: "POST",
        header: {
          Accept: "application/json",
          "Content-Type": "application/x-www-form-urlencoded",
        },
        // 将object类型的数据格式化为合法的body参数
        body: this.changeData(data),
      })
        .then((response) => response.json())
        .then((result) => {
          resolve(result)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  // body请求体的格式化方法
  static changeData(obj) {
    var prop,
      str = ""
    var i = 0
    for (prop in obj) {
      if (!prop) {
        return
      }
      if (i == 0) {
        str += prop + "=" + obj[prop]
      } else {
        str += "&" + prop + "=" + obj[prop]
      }
      i++
    }
    return str
  }
}
