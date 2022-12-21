function prePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 20
  }
  return originPrice * 0.9
}

function onSalePrice(originPrice) {
  if (originPrice >= 100) {
    return originPrice - 30
  }
  return originPrice * 0.8
}

function backPrice(originPrice) {
  if (originPrice >= 200) {
    return originPrice - 50
  }
  return originPrice
}

function freshPrice(originPrice) {
  return originPrice * 0.5
}

function askPrice(tag, originPrice) {
  // 处理预热价
  if (tag === "pre") {
    return prePrice(originPrice)
  }
  // 处理大促价
  if (tag === "onSale") {
    return onSalePrice(originPrice)
  }

  // 处理返场价
  if (tag === "back") {
    return backPrice(originPrice)
  }

  // 处理尝鲜价
  if (tag === "fresh") {
    return freshPrice(originPrice)
  }
}

const priceProcessor = {
  pre(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 20
    }
    return originPrice * 0.9
  },
  onSale(originPrice) {
    if (originPrice >= 100) {
      return originPrice - 30
    }
    return originPrice * 0.8
  },
  back(originPrice) {
    if (originPrice >= 200) {
      return originPrice - 50
    }
    return originPrice
  },
  fresh(originPrice) {
    return originPrice * 0.5
  },
}

function askPrice(tag, originPrice) {
  return priceProcessor[tag](originPrice)
}

priceProcessor.newUser = function (originPrice) {
  if (originPrice >= 100) {
    return originPrice - 50
  }
  return originPrice
}
