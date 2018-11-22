Page({
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
    wx.showToast({
      title: '收到微信开放功能返回',
      icon: 'none'
    })
    console.log(e)
  },
  // 用户信息
  getUserInfo (e) {
    wx.showToast({
      title: '收到微信开放功能返回',
      icon: 'none'
    })
    console.log(e)
  },
  // 授权设置
  openSetting (e) {
    console.log(e)
  },
  onShareAppMessage (res) {
    return {
      title: '分享标题',
      path: '/pages/index/index'
    }
  }
})