Page({

  data: {

  },

  onLoad: function (options) {

  },

  onShow: function () {

  },
  delItem () {
    wx.showModal({
      title: '提示',
      content: '确定要删除吗？'
    })
  }
})