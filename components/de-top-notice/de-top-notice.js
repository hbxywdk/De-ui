Component({

  properties: {
    // 文字
    text: {
      type: String,
      value: ''
    },
    // 背景色
    bgColor: {
      type: String,
      value: '#f7e17a'
    },
    // 是否可关闭
    closeable: {
      type: Boolean,
      value: false
    },
    // 文字内容是否滚动
    roll: {
      type: Boolean,
      value: false
    }
  },

  // ready后获取元素信息
  ready () {
    this.properties.roll && (this.startRoll())
  },

  data: {
    show: true
  },

  methods: {
    close () {
      this.setData({ show: false })
    },
    startRoll () {
      console.log('Roll')
    }
  }
})
