Component({

  properties: {
    // 显示
    show:{
      type: Boolean,
      value: false
    },
    title: {
      type: String,
      value: ''
    },
    btnText: {
      type: String,
      value: '确定'
    },
    // 是否显示取消按钮
    showCancel: {
      type: Boolean,
      value: true
    },
    // 微信开放能力
    openType: {
      type: String,
      value: ''
    },
  },

  data: {

  },

  methods: {
    confirm () {
      this.triggerEvent('confirm')
    },
    cancel () {
      this.triggerEvent('cancel')
    },
    // 客服会话
    contact(e) {
      this.triggerEvent('bindContact', e)
    },
    // 手机号码
    getPhoneNumber(e) {
      this.triggerEvent('bindGetPhoneNumber', e)
    },
    // 用户信息
    getUserinfo(e) {
      this.triggerEvent('bindGetUserinfo', e)

    },
    // 授权设置
    openSetting(e) {
      this.triggerEvent('bindOpenSetting', e)
    },
    // 使用微信开放能力出错
    error(e) {
      this.triggerEvent('bindError', e)
    }
  }
})
