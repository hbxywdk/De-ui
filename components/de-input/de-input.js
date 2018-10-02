Component({
  relations: {
    '../de-input-group/de-input-group': {
      type: 'parent'
    }
  },

  properties: {
    // 类型 input textarea
    'type': {
      type: String,
      value: 'input'
    },
    // label文字
    'labelText': {
      type: String,
      value: ''
    },
    // button文字（传入该参数则显示button）
    'buttonText': {
      type: String,
      value: ''
    },
    // 是否是必填项
    'required': {
      type: Boolean,
      value: false
    },
    // 占位文字
    'placeholder': {
      type: String,
      value: ''
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
    // input 默认文本
    value: {
      type: null
    }
  },

  data: {
    platform: wx.getSystemInfoSync().platform,
    isFirstOne: false,
    isLastOne: false
  },

  methods: {
    _setFirstOne(isFirstOne) {
      this.setData({ isFirstOne })
    },
    _setLastOne(isLastOne) {
      this.setData({ isLastOne })
    },
    textInput(e) {
      this.triggerEvent('input', e.detail.value)
    },
    btnClick() {
      this.triggerEvent('btnclick')
    }
  }
})
