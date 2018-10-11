Page({

  data: {
    index0: 0,
    index1: 0,
    footerConfig1: [
      {
        icon: '/assets/tab/tab_card.png',
        activeIcon: '/assets/tab/tab_card_active.png',
        name: '首页'
      },
      {
        icon: '/assets/tab/tab_radar.png',
        activeIcon: '/assets/tab/tab_radar_active.png',
        name: '雷达'
      },
      {
        icon: '/assets/tab/tab_maillist.png',
        activeIcon: '/assets/tab/tab_maillist_active.png',
        name: '通讯录'
      },
      {
        icon: '/assets/tab/tab_my.png',
        activeIcon: '/assets/tab/tab_my_active.png',
        name: '我的'
      }
    ],
    footerConfig2: [
      {
        icon: '/assets/tab/tab_card.png',
        activeIcon: '/assets/tab/tab_card_active.png',
        name: '首页'
      },
      {
        icon: '/assets/tab/tab_radar.png',
        activeIcon: '/assets/tab/tab_radar_active.png',
        name: '雷达',
        msg: true
      },
      {
        icon: '/assets/tab/tab_maillist.png',
        activeIcon: '/assets/tab/tab_maillist_active.png',
        name: '通讯录',
        msg: 100
      },
      {
        icon: '/assets/tab/tab_my.png',
        activeIcon: '/assets/tab/tab_my_active.png',
        name: '我的'
      }
    ]
  },
  tabClick1 (e) {
    this.setData({
      index0: e.detail.index
    })
  },
  tabClick2 (e) {
    this.setData({
      index1: e.detail.index
    })
  }
})