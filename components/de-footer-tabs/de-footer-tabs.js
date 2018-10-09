Component({

  properties: {
    // 配置
    config: {
      type: Array,
      value: []
    },
    // 图片宽度
    width: {
      type: Number,
      value: 0
    },
    // 图片高度
    height: {
      type: Number,
      value: 0
    },
    // 字颜色
    color: {
      type: String,
      value: '#333'
    },
    // 当前激活tab
    nowTab: {
      type: Number,
      value: 0
    }
  },

  data: {

  },

  methods: {
    tab (e) {
      const index = e.currentTarget.dataset.index
      this.triggerEvent('click', { index })
    }
  }
})
