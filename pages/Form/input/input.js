Page({

  data: {
    name: '这是姓名'
  },

  onLoad: function (options) {

  },

  onShow: function () {

  },
  input (e) {
    console.log(e.detail)
  },
  btnclick () {
    wx.showToast({
      title: '点击了按钮',
      icon: 'none'
    })
  }
})