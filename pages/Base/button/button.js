Page({

  data: {

  },

  onLoad: function (options) {

  },

  onShow: function () {

  },
  // 按钮点击
  click () {
    wx.showToast({
      title: '按钮点击',
      icon: 'none'
    })
  },
  // 客服会话
  contact (e) {
    console.log(e)
  },
  // 获取手机
  getPhoneNumber (e) {
    console.log(e)
  },
  // 用户信息
  getUserInfo (e) {
    console.log(e)
  },
  // 授权设置
  openSetting (e) {
    console.log(e)
  },
  // 客服会话
  // contact (e) {
  //   console.log(e)
  // },
  onShareAppMessage (res) {
    return {
      title: '分享标题',
      path: '/pages/index/index'
    }
  }
})