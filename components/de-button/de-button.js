// components/de-button/de-button.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 按钮尺寸 default, mini
    size: {
      type: String,
      value: 'default'
    },
    // 按钮样式 success，warning，error
    type: {
      type: String,
      value: 'success'
    },
    // 按钮颜色（若传入这一项，则type失效）
    bgColor: {
      type: String,
      value: ''
    },
    // 按钮禁用
    disabled: {
      type: Boolean,
      value: false
    },
    // 加载
    loading: {
      type: Boolean,
      value: false
    },
    openType: {
      type: String,
      value: ''
    },
  },

  data: {

  },

  methods: {
    // 按钮点击
    bindTap () {
      if (this.properties.loading || this.properties.disabled) return
      this.triggerEvent('click')
    },
    // 客服会话
    contact (e) {
      this.triggerEvent('bindContact', e)
    },
    // 手机号码
    getPhoneNumber(e) {
      this.triggerEvent('bindGetPhoneNumber', e)
    },
    // 用户信息
    getUserinfo (e) {
      this.triggerEvent('bindGetUserinfo', e)

    },
    // 授权设置
    openSetting (e) {
      this.triggerEvent('bindOpenSetting', e)
    },
    // 使用微信开放能力出错
    error (e) {
      this.triggerEvent('bindError', e)
    }
  }
})
