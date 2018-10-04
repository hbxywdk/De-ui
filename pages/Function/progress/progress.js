Page({

  data: {
    percent: 0,
    bgColor: 'red'
  },

  onLoad: function (options) {
    setInterval(() => {
      const percent = Math.floor(Math.random() * 100)
      if (percent >= 90) {
        this.setData({
          percent,
          bgColor: '#51d875'
        })
      } else if (percent < 10) {
        this.setData({
          percent,
          bgColor: 'red'
        })
      } else {
        this.setData({
          percent,
          bgColor: '#2ccaf4'
        })
      }
    }, 2000)
  },

  onShow: function () {

  }

})