// pages/Function/range/range.js
Page({
  data: {
    val1: 0,
    val2: 0,
    val3: 0,
    val4: 0,
  },
  change1 (e) {
    this.setData({
      val1: e.detail
    })
  },
  change2 (e) {
    this.setData({
      val2: e.detail
    })
  },
  change3(e) {
    this.setData({
      val3: e.detail
    })
  },
  change4(e) {
    this.setData({
      val4: e.detail
    })
  }
})