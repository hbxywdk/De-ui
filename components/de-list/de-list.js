Component({

  relations: {
    '../de-list-group/de-list-group': {
      type: 'parent'
    }
  },

  properties: {
    // 左侧文字
    text: { 
      type: String,
      value: ''
    },
    // 右侧文字
    fText: {
      type: String,
      value: ''
    },
    // 左侧小图
    img: {
      type: String,
      value: ''
    },
    // 计数红点
    count: { 
      type: Number,
      value: 0
    }
  },

  data: {
    isFirstOne: false,
    isLastOne: false
  },

  methods: {
    // 父组件(de-list-group)调用方法隐藏第一个和最后一个list的border
    _setFirstOne (isFirstOne) {
      this.setData({ isFirstOne })
    },
    _setLastOne(isLastOne) {
      this.setData({ isLastOne })
    }
  }
})
