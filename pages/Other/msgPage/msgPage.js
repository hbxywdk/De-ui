Page({
  success () {
    wx.navigateTo({
      url: '/page/de-msg-page/de-msg-page?type=1&title=操作结果&firstTit=操作成功&secondTit=您的操作成功了&btnText=返回',
    })
  },
  fail () {
    wx.navigateTo({
      url: '/page/de-msg-page/de-msg-page?type=2&title=操作结果&firstTit=操作失败&&btnText=返回首页&back=2',
    })
  }
})