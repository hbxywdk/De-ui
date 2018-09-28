//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    text: 'Hello'
  },

  onLoad () {
    console.warn('onLoad')
  },
    
  onShow () {

  },
  
  go (e) {
    const url = e.currentTarget.dataset.link
    wx.navigateTo({
      url: url,
    })
  }
})
