Component({
  properties: {
    // 数据是否加载完
    nomore: {
      type: Boolean,
      value: false
    },
    // 没有更多数据后显示的文字提示
    nomoreText: {
      type: String,
      value: '没有更多数据了'
    },
    // 下拉距离
    pullDownHeight: {
      type: Number,
      value: 60
    },
    // scroll-view高度
    scrollHeight: {
      type: Number,
      value: 600
    },
    // 刷新状态对比
    refreshContrast: {
      type: Boolean,
      value: false,
      observer: 'onRefreshFinished'
    },
    // 加载更多状态对比
    loadingMoreContrast: {
      type: Boolean,
      value: false,
      observer: 'onLoadMoreFinished'
    }
  },

  data: {
    fillHeight: 600, // 撑高度块
    viewName: 'scroller-wapper', // scroller-wapper：滚动到slot区域，pulldown： 滚动道下拉区域
    pullDownStatus: 0, // 下拉状态
    pullUpStatus: 2, // 上拉状态
    lastScrollEnd: 0,
    touching: 0, //0: 未触摸  1: 触摸中
  },

  ready() {
    // 计算撑高度view的高度
    let query = wx.createSelectorQuery().in(this);
    query.select('.scroller-wapper').fields({
      size: true,
    }, res => {
      if (res.height > this.properties.scrollHeight) {
        this.setData({
          fillHeight: 0
        });
      } else {
        this.setData({
          fillHeight: this.properties.scrollHeight - res.height - 44
        });
      }
    }).exec();
  },

  methods: {
    /**
     * pullDownStatus:{
     *    0:未操作状态（看不见loading）
     *    1:正在下拉
     *    2:下拉到顶，准备刷新
     *    3:正在刷新
     *    4:刷新完成
     * * }
     */
    /**
     * pullUpStatus:{
     *    0: 看不见
     *    1：上拉时
     *    2：松开加载
     *    3：正在加载
     *    4：加载完成
     * }
     */

    // 滚动
    onScroll: function (e) {
      this.triggerEvent('scroll', e.detail)

      const status = this.data.pullDownStatus
      // 正在下拉刷新 与 刷新完成 时，return
      if (status === 3 || status == 4) return

      const height = this.properties.pullDownHeight
      const scrollTop = e.detail.scrollTop

      let targetStatus
      if (scrollTop <= 0) {
        targetStatus = 2 // 下拉到顶，准备刷新
      } else if (scrollTop < height) {
        targetStatus = 1 // 正在下拉
      } else {
        targetStatus = 0
      }
      if (status != targetStatus) {
        this.setData({
          pullDownStatus: targetStatus,
        })
      }
    },
    // 触摸开始
    onTouchStart: function (e) {
      console.log('touch开始')
      this.setData({
        touching: 1 // 正在触摸状态中
      })
    },
    // 触摸结束
    onTouchEnd: function (e) {
      console.log('touch结束')
      this.setData({ touching: 0 }) // 触摸状态更改为未触摸
      const status = this.data.pullDownStatus

      // 状态0，回到原点
      if (status === 0) {
        setTimeout(() => { // touchEnd触发，等待滚动动画停止后再继续
          const newStatus = this.data.pullDownStatus
          if (newStatus !== status && (newStatus == 2 || newStatus == 1)) {
            this.setData({
              viewName: 'scroller-wapper',
            })
          }
        }, 200)

        // 状态1，回到原点
      } else if (status == 1) {
        this.setData({
          viewName: 'scroller-wapper',
        })

        // 状态2，将状态修改为 3 (正在刷新)
      } else if (status === 2) {
        this.setData({
          pullDownStatus: 3,
        })
        this.properties.refreshContrast = true
        setTimeout(() => {
          this.triggerEvent('pulldownrefresh')
        }, 500)

        // 状态3，4 显示下拉loading
      } else if (status == 3 || status == 4) {
        this.setData({
          viewName: 'pulldown'
        })
      }
    },
    // 刷新（onTouchEnd后触发onRefresh）
    onRefresh(e) {
      console.log('触发刷新')
      const status = this.data.pullDownStatus
      if (!this.data.touching) {
        if (status === 2) {
          this.setData({
            pullDownStatus: 3,
          })
          this.properties.refreshContrast = true
          setTimeout(() => {
            this.triggerEvent('pulldownrefresh')
          }, 500)
        } else if (status == 1) {
          this.setData({
            viewName: 'scroller-wapper',
          })
        } else if (status == 3 || status == 4) {
          this.setData({
            viewName: 'pulldown'
          })
        }
      }
    },

    onRefreshFinished(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.setData({
          pullDownStatus: 3,
          lastScrollEnd: 0,
        })

        setTimeout(() => {
          // 修改撑高度view的高度
          let query = wx.createSelectorQuery().in(this);
          query.select('#scroller-wapper').fields({
            size: true,
          }, res => {
            if (res.height >= this.properties.scrollHeight) {
              this.setData({
                fillHeight: 0
              })
            } else {
              this.setData({
                fillHeight: this.properties.scrollHeight - res.height - 44
              })
            }
          }).exec();
          setTimeout(() => {
            this.setData({
              viewName: 'scroller-wapper',
              pullDownStatus: 0,
            })
          }, 100);
        }, 200);

      }
    },

    // 加载更多状态对比
    onLoadMoreFinished(newVal, oldVal) {
      if (oldVal === true && newVal === false) {
        this.setData({
          pullUpStatus: 2,
        })
        // 修改撑高度view的高度
        setTimeout(() => {
          let query = wx.createSelectorQuery().in(this);
          query.select('#scroller-wapper').fields({
            size: true,
          }, res => {
            if (res.height >= this.properties.scrollHeight) {
              this.setData({
                lastScrollEnd: 0,
                fillHeight: 0
              })
            } else {
              this.setData({
                fillHeight: this.properties.scrollHeight - res.height - 44
              })
            }
          }).exec();
        });
      }
    },

    // 加载更多
    onLoadmore(e) {
      if (!this.properties.nomore) { // 还有数据
        let query = wx.createSelectorQuery().in(this)
        query.select('.scroll-view').fields({
          size: true,
          scrollOffset: true,
        }, res => {
          if (Math.abs(res.scrollTop - this.data.lastScrollEnd) > 88) {
            this.setData({
              lastScrollEnd: res.scrollTop,
              pullUpStatus: 3,
            })
            this.triggerEvent('loadmore')
          }
        }).exec()
      }
    },
  }
})
