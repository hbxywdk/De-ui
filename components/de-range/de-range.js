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

  },

  methods: {

  }
})
