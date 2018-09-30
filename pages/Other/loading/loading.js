Page({

  data: {
    loading: true
  },

  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        loading: false
      })
    }, 2000)
  },

  onShow: function () {

  }
})