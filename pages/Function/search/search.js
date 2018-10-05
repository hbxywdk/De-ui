// pages/Function/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  search (e) {
    wx.showToast({
      title: `搜索内容：${e.detail}`,
      icon: 'none'
    })
  },

  clear () {
    wx.showToast({
      title: '清空输入框',
      icon: 'none'
    })
  }
})