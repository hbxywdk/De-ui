/**
 * 图片组件
 * 默认图片宽高100%，需再组件外部包裹给定宽高的<view>
 * props: 
 *  src：图片地址
 *  errorSrc：图片出错时显示的错误图片
 *  imgMode：图片的填充方式，默认'aspectFill'
 */
Component({

  properties: {
    // 图片地址
    src: {
      type: String,
      value: ''
    },
    // 当图片发生错误时显示的图片
    errorSrc: {
      type: String,
      value: ''
    },
    // 图片的填充模式 默认aspectFill
    imgMode: {
      type: String,
      value: 'aspectFill'
    },
    // 图片样式
    imgStyle: {
      type: String,
      value: ''
    }
  },
  attached() {
    if (this.properties.src === '') {
      this.setData({ showErrorImg: true })
    }
  },
  data: {
    showErrorImg: false
  },

  methods: {
    imgErrorEvent(e) {
      this.setData({ showErrorImg: true })
    }
  }

})
