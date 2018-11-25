// pages/Form/swicth/swicth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    status1: true,
    status2: true
  },
  onLoad () {
    // setTimeout(() => {
    //   this.setData({ status1: false })
    // }, 2000)
  },
  switchChange (e) {
    // console.log(e)
    this.setData({ status1: e.detail.status })
  }
})