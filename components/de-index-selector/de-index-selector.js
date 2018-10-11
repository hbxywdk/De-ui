Component({

  properties: {
    // 数据
    indexData: {
      type: Object,
      value: {}
    },
    // 默认选中项
    firstSelect: {
      type: String,
      value: ''
    }
  },

  data: {
    windowHeight: 0, // 可视区高度
    indexArr: [], // 索引数组
    topArr: [], // 存放每个大类别距离顶部的高度
    barInfo: {}, // indexBar的长宽信息
    /* nowIndex 与 nowIndex2只使用其中一个存在Bug */
    nowIndex: '', // 当前Index（用来控制scroll-view滚动）
    nowIndex2: '', // 当前Index的copy（用来控制indexBar高亮）
    showCenterIndex: false, // 中部索引显隐
    timer: null, // 倒计时
  },
  attached () {
    // 设置scroll-view高度
    const sys = wx.getSystemInfoSync()
    const indexData = this.properties.indexData
    let indexArr = []
    for( let x in indexData ){
      indexArr.push(x)
    }
    this.setData({ 
      windowHeight: sys.windowHeight,
      indexArr,
    })
    
  },
  ready () {
    this.getMainTypeTop()
    const query = wx.createSelectorQuery().in(this)
    query.select('.index-bar-box').boundingClientRect(res => {
      // console.log(res)
      this.setData({
        barInfo: res
      })
    }).exec()
    // 首选选中项目
    const firstSelect = this.properties.firstSelect
    // 正确设置了首选中项
    if (firstSelect !== '' && this.data.indexArr.indexOf(firstSelect) > -1) {
      this.setData({ nowIndex: firstSelect, nowIndex2: firstSelect})
    } else {
      this.setData({ nowIndex: this.data.indexArr[0], nowIndex2: this.data.indexArr[0] })
    }
  },
  
  methods : {
    // 初始时获取每个大类别距离顶部的高度
    getMainTypeTop() {
      const query = wx.createSelectorQuery().in(this)
      let topArr = []
      query.selectAll('.index-name').boundingClientRect(rects => {
        rects.forEach((rect, index) => {
          let top = rect.top // 每个标题相对于scroll-view的top值
          topArr.push(top)
        })
        this.setData({ topArr: topArr })
      }).exec()
    },
    // scroll-view滚动
    scroll (e) {
      const scrollTop = e.detail.scrollTop // 滚上去的高度
      let nowIndex = 0 // 当前滚动索引
      this.data.topArr.forEach((e, i) => {
        if (e <= scrollTop) {
          nowIndex = i
        }
      })
      this.setData({
        nowIndex2: this.data.indexArr[nowIndex]
      })

    },
    // 项目被点击
    itemClick (e) {
      this.triggerEvent('select', { item: e.currentTarget.dataset.item })
    },
    // 手指滑动indexBar
    indexBarMove (e) {
      const top = e.changedTouches[0].pageY - this.data.barInfo.top
      const index = Math.floor(top / 20)
      if (this.data.indexArr[index] !== undefined) {
        this.setData({ 
          nowIndex: this.data.indexArr[index],
          nowIndex2: this.data.indexArr[index]
        })
        this.showCenterIndex()
      }
    },
    // 显示中间的索引
    showCenterIndex (e) {
      clearTimeout(this.data.timer)
      this.setData({
        showCenterIndex: true,
        timer: setTimeout(() => {
          this.setData({ showCenterIndex: false })
        }, 1500)
      })
    }

  }
})
