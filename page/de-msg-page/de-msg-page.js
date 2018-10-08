/**
 * 操作的结果页
 * type 1: 成功 2：失败
 * back 1：后退一页 2：回首页
 * title：NavigationBarTitle
 * firstTit：主标题
 * secondTit：副标题
 * btnText：按钮文字
 */

Page({

  data: {
    iconType: '',
    firstTit: '',
    secondTit: '',
    btnText: '',
    back: '',
    iconUrl: ''
  },

  onLoad: function (opt) {
    console.log(opt)
    this.setData({
      iconType: opt.type,
      firstTit: opt.firstTit || '',
      secondTit: opt.secondTit || '',
      btnText: opt.btnText || '返回',
      back: opt.back || '1'
    })
    wx.setNavigationBarTitle({
      title: opt.title,
    })
  },

  goBack() {
    if (this.data.back === '1') {
      wx.navigateBack({ delta: 1 })
    } else {
      console.log(12312)
      wx.navigateTo({
        url: '/pages/index/index',
      })
    }
  }
})