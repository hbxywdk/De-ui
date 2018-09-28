Page({

  data: {
    currentPages: 1, // 当前页码
    hasData: true, // 是否还有数据
    refreshing: false, // scroll组件是否在刷新中
    loadingMore: false, // 是否在加载更多状态中
    nomore: false, // 没有更多了
    renMaiLists: [],
  },

  onLoad: function (options) {
    // 获取设备信息
    wx.getSystemInfo({
      success: res => {
        this.setData({
          scrollerHeight: res.windowHeight - (res.windowWidth / 750) * 160
        })
      }
    })
    this.loadDefaultPage()
  },

  onShow: function () {

  },
  /**
   * 统一拉取人脉数据
   * params：请求参数
   * clear：是否需要清除原有数据
   */
  fetchRenMaiLists(params, clear) {
    setTimeout(() => {
      // 下拉刷新则先清空之前数据
      if (clear) {
        this.setData({
          renMaiLists: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          refreshing: false,
          loadingMore: false
        })
      } else {
        console.log(1213123123)
        let link = [1]
        link = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        const lists = [...this.data.renMaiLists, ...link]
        this.setData({
          renMaiLists: lists,
          refreshing: false,
          loadingMore: false
        })
        if (this.data.renMaiLists.length > 30 || lists.length == 1) {
          this.setData({
            nomore: true
          })
        }
      }


    }, 1000)
  },
  // 拉取第一页数据
  loadDefaultPage() {
    this.setData({ refreshing: true })
    let params = {
      page_no: 1
    }
    this.fetchRenMaiLists(params)
  },
  // 加载更多
  loadMoreRenMai() {
    this.setData({ loadingMore: true })
    let params = {
      page_no: this.data.currentPages
    }
    this.fetchRenMaiLists(params)
  },
  // 下拉刷新
  pullDownRefresh() {
    // 还原所有数据
    this.setData({
      currentPages: 1,
      refreshing: true,
      nomore: false
    })
    let params = {
      page_no: 1
    }
    this.fetchRenMaiLists(params, true)
  },
})