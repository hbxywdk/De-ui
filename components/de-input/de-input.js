Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'kindOfType': {
      type: String
    },
    // 上边框
    'bTop': {
      type: Boolean,
      value: true
    },
    // 下边框
    'bBottom': {
      type: Boolean,
      value: false
    },
    // label文字
    'labelText': {
      type: String
    },
    // button文字
    'buttonText': {
      type: String
    },
    // 是否是必填项（必填项显示红色*）
    'isRequired': {
      type: Boolean,
      value: false
    },
    'placeholder': {
      type: String
    },
    // 最大长度
    'maxLength': {
      type: Number,
      value: 11
    },
    // 键盘弹起后距离光标的距离
    cursorSpacing: {
      type: 'Number',
      value: 0
    },
    value: {
      type: null
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    platform: 'app.globalData.system.platform'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    textInput(e) {
      this.triggerEvent('input', e.detail.value)
    },
    btnClick() {
      this.triggerEvent('btnclick')
    }
  }
})
