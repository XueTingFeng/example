Array.prototype._filter = function (fn) {
  if (typeof fn !== "function") {
    throw new TypeError("should be function")
  }
  let array = this
  let len = array.length
  let res = []
  for (let i = 0; i < len; i++) {
    let isTrue = fn.call(arguments[1], array[i], i, array)
    if (isTrue) {
      res.push(array[i])
    }
  }
  return res
}

console.log([5, 6, 7]._filter((i) => i > 5))
