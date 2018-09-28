/**
 * de-label 区块头部label文字
 * 通常与de-list搭配使用
 */
Component({

  properties: {
    // 标题
    title: {
      type: String,
      value: ''
    },
    // 副标题
    fTitle: {
      type: String,
      value: ''
    },
    // 文字颜色
    color: {
      type: String,
      value: '#777'
    },
    // 文字大小
    size: {
      type: String,
      value: '28rpx'
    },
    // 标题背景色
    bgColor: {
      type: String,
      value: '#efeff4'
    },
    // slot内容上下边框
    needBorder: {
      type: Boolean,
      value: true
    },
  },

  data: {

  },

  methods: {

  }
})
