// pages/Alert/alert/alert.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show1: false,
    show2: false,
    show3: false,
    show4: false,
    show5: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
  btnClick1() {this.setData({ show1: true })},
  btnClick2() {this.setData({ show2: true })},
  btnClick3() {this.setData({ show3: true })},
  btnClick4() {this.setData({ show4: true })},
  btnClick5() {this.setData({ show5: true })},
  cancel1() { this.setData({ show1: false }) },
  cancel2() { this.setData({ show2: false }) },
  cancel3() { this.setData({ show3: false }) },
  cancel4() { this.setData({ show4: false }) },
  cancel5() { this.setData({ show5: false }) },
  toast() { wx.showToast({ title: '点击了确定', icon: 'none' }) },
  confirm1() {
    this.toast()
    this.cancel1()
  },
  confirm2() {
    this.toast()
    this.cancel2()
  },
  confirm3() {
    this.toast()
    this.cancel3()
  },
  confirm5() {
    this.toast()
    this.cancel5()
  },
  getUserinfo (e) {
    console.log(e.detail)
    wx.showToast({ title: '获取到加密信息', icon: 'none' }) 
    this.cancel4()
  }
})