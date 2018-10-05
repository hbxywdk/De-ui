// 搜索组件

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'placeholder': {
      type: String,
      value: ''
    },
    'padding': {
      type: String,
      value: '16rpx'
    },
    'width': {
      type: String,
      value: '718rpx'
    },
    'height': {
      type: String,
      value: '56rpx'
    },
    // 填写none则外圈没有颜色
    'background': {
      type: String,
      value: '#efefef'
    },
    'borderRadius': {
      type: String,
      value: '10rpx'
    },
    'maxLength': {
      type: String,
      value: '20'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: '',
    inputFocus: false,
    showInput: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    input(e) {
      this.setData({
        inputValue: e.detail.value
      })
    },
    blur(e) {
      if (e.detail.value === '') {
        this.setData({
          showInput: false
        })
      }
    },
    // 搜索
    confirm(e) {
      this.triggerEvent('search', this.data.inputValue)
    },
    // 清空输入框
    clearInput() {
      this.setData({
        inputValue: '',
        showInput: false
      })
      this.triggerEvent('clear')
    },
    showSearch() {
      this.setData({
        showInput: true,
        inputFocus: true
      })
    }
  }
})
