// 暂时搁置
Component({

  properties: {
    // 类别 single：单滑块 dual：双滑块（暂只做单滑块）
    // type: {
    //   type: String,
    //   value: 'single'
    // },
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
    // 初始值
    value: {
      type: Number,
      value: 0
    },
    lineColor: {
      type: String,
      value: '#2ccaf4'
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
    // value: 0, // 值 
    // 最小值
    originLeft: 0, // 原始Left
    minStart: 0, // touch起始Left
    minLeft: 0, // 实时Left
    // 最大值（预留双滑块）
    // maxStart: 0, // touch起始Left
    // maxLeft: 0, // 实时Left
  },
  ready () {
    const value = this.properties.value
    const query = wx.createSelectorQuery().in(this)
    query.select('.de-range').boundingClientRect(res => {
      // console.log(res)
      let width = res.width
      let left = res.left
      if (value && value >= this.properties.min && value <= this.properties.max) {
        let leftValue = res.width * (value / (this.properties.max - this.properties.min))
        this.setData({ originLeft: leftValue, minStart: leftValue, minLeft: leftValue })
        
      }
      this.setData({ width, left })
    }).exec()
  },

  methods: {
    touchStart (e) {
      if (this.properties.disabled) return
      console.log('start', e.changedTouches[0].pageX)
      this.setData({ minStart: e.changedTouches[0].pageX })
    },
    touchMove(e) {
      if (this.properties.disabled) return
      let minLeft = Math.round(e.changedTouches[0].pageX - this.data.minStart + this.data.originLeft)
      if (minLeft < 0) {
        minLeft = 0
      }
      if (minLeft > this.data.width) {
        minLeft = this.data.width
      }
      // console.log(e.changedTouches[0].pageX)
      // console.log(minLeft / this.data.width, '---', this.properties.max - this.properties.min)
      const value = Math.round((minLeft / this.data.width) * (this.properties.max - this.properties.min)) + this.properties.min
      this.setData({ 
        minLeft,
        // value
      })
      this.triggerEvent('change', value)
    },
    touchEnd(e) {
      if (this.properties.disabled) return
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
