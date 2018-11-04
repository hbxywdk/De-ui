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
    moveDuration: 0
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
    delClick () {
      this.triggerEvent('del')
    },
    start (e) {
      if (this.properties.disabled) return
      const startX = e.changedTouches[0].pageX
      console.log('startX', startX)
      this.setData({ startX })
    },
    move (e) {
      if (this.properties.disabled) return
      if (this.data.isMoving) return
      const x = e.changedTouches[0].pageX
      // console.log('moveX', x)
      // 左滑
      if (x < this.data.startX) {
        console.log('左')
        if (this.data.translateX >= this.data.areaWidth) return
        let translateX = x - this.data.startX
        // let translateX = (x - this.data.startX) > 0 ? 0 : x - this.data.startX
        translateX = translateX < -this.data.areaWidth ? -this.data.areaWidth : translateX
        console.log('translateX', translateX)
        this.setData({ translateX })
      // 右滑
      } else {
        console.log('右')
        if (this.data.translateX >= 0) return
        let translateX = x - this.data.startX
        translateX = translateX > this.data.areaWidth ? 0 : -(this.data.areaWidth - translateX)
        console.log('translateX', translateX)
        this.setData({ translateX })
      }
    },
    end (e) {
      if (this.properties.disabled) return
      const endX = e.changedTouches[0].pageX
      console.log('endX', endX)
      console.log((endX - this.data.startX), Math.ceil(this.data.areaWidth / 3 * 2))
      // 左滑
      if (endX < this.data.startX) {
        // 滑动距离超出2/3，则自动划出
        if (Math.abs(endX - this.data.startX) > Math.ceil(this.data.areaWidth / 3 * 2)) {
          this.setData({ translateX: -this.data.areaWidth, moveDuration: 0.2, isMoving: true })
          // 自动滑回
        } else {
          this.setData({ translateX: 0, moveDuration: 0.2, isMoving: true })
        }
        setTimeout(() => {
          this.setData({ isMoving: false, moveDuration: 0 })
        }, 200)
      // 右滑
      } else {
        // 自动滑回 0
        if ((endX - this.data.startX) > Math.ceil(this.data.areaWidth / 3 * 2)) {
          this.setData({ translateX: 0, moveDuration: 0.2, isMoving: true })
          // 滑回展开状态
        } else {
          this.setData({ translateX: -this.data.areaWidth, moveDuration: 0.2, isMoving: true })
        }
        setTimeout(() => {
          this.setData({ isMoving: false, moveDuration: 0 })
        }, 200)
      }

    }
  }
})
