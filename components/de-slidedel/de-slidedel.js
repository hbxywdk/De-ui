Component({

  properties: {
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {
    areaWidth: 0, // 按钮区宽度
    translateX: 0, // X轴位移距离
    startX: '', // 起始点
    isMoving: false, // 滑块是否在动画中
  },
  
  ready () {
    // 获取按钮区宽度
    const query = wx.createSelectorQuery().in(this)
    query.select('.work-area').boundingClientRect(res => {
      this.setData({
        areaWidth: res.width
      })
      console.log('滑块宽度', res.width)
    }).exec()
  },

  methods: {
    start (e) {
      if (this.properties.disabled) return
      const startX = e.changedTouches[0].pageX
      console.log('startX', startX)
      this.setData({ startX })
    },
    move (e) {
      if (this.properties.disabled) return
      const x = e.changedTouches[0].pageX
      console.log('move', x)
      let translateX = x - this.data.startPoint > 0 ? 0 : x - this.data.startPoint
      translateX = translateX < -this.data.areaWidth ? -this.data.areaWidth : translateX
      console.log('translateX', translateX)
      this.setData({
        translateX
      })
      
    },
    end (e) {
      if (this.properties.disabled) return
      const endX = e.changedTouches[0].pageX
      console.log('endX', endX)
      // 滑动距离超出2/3，则自动划出
      if ((endX - this.data.startX) > Math.ceil(this.data.areaWidth/3*2)) {
        
      // 自动滑回
      } else {

      }
    }
  }
})
