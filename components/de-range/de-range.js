// 暂时搁置
Component({

  properties: {
    // 类别 single：单滑块 dual：双滑块
    type: {
      type: String,
      value: 'single'
    },
    // 范围最小值
    min: {
      type: Number,
      value: 0
    },
    // 范围最大值
    max: {
      type: Number,
      value: 100
    },
    lineColor: {
      type: String,
      value: '#2ccaf4'
    },
    lineWeight: {
      type: String,
      value: '10rpx'
    },
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {
    // de-range的信息
    width: 0,
    left: 0,
    // 最小值
    originLeft: 0, // 原始Left
    minStart: 0, // touch起始Left
    minLeft: 0, // Left
    // 最大值
    maxStart: 0, // touch起始Left
    maxLeft: 0, // Left
  },
  ready () {
    const query = wx.createSelectorQuery().in(this)
    query.select('.de-range').boundingClientRect(res => {
      console.log(res)
      this.setData({ 
        width: res.width,
        left: res.left
      })
    }).exec()
  },

  methods: {
    touchStart (e) {
      console.log('start', e.changedTouches[0].pageX)
      this.setData({ minStart: e.changedTouches[0].pageX })
    },
    touchMove(e) {
      let minLeft = Math.round(e.changedTouches[0].pageX - this.data.minStart + this.data.originLeft)
      if (minLeft < 0) {
        minLeft = 0
      }
      if (minLeft > this.data.width) {
        minLeft = this.data.width
      }
      // console.log(e.changedTouches[0].pageX)
      this.setData({ minLeft })
    },
    touchEnd(e) {
      let left = Math.round(e.changedTouches[0].pageX - this.data.minStart + this.data.originLeft)
      if (left < 0) {
        left = 0
      }
      if (left > this.data.width) {
        left = this.data.width
      }
      console.log('end', e.changedTouches[0].pageX)
      this.setData({ 
        minLeft: left,
        originLeft: left
      })
    },
  }
})
