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
    startPoint: '', // 起始点
  },
  
  ready () {
    // 获取按钮区宽度
    const query = wx.createSelectorQuery().in(this)
    query.select('.work-area').boundingClientRect(res => {
      this.setData({
        areaWidth: res.width
      })
    }).exec()
  },

  methods: {
    start (e) {
      if (this.properties.disabled) return
      console.log('start', e.changedTouches[0].pageX)
      this.setData({ startPoint: e.changedTouches[0].pageX })
    },
    move (e) {
      if (this.properties.disabled) return
      const x = e.changedTouches[0].pageX
      let translateX = x - this.data.startPoint > 0 ? 0 : x - this.data.startPoint
      translateX = translateX < -this.data.areaWidth ? -this.data.areaWidth : translateX
      console.log('translateX', translateX)
      this.setData({
        translateX
      })
      
    },
    end (e) {
      if (this.properties.disabled) return
      console.log('end', e.changedTouches[0].pageX)
    }
  }
})
