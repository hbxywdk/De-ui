Page({

  data: {
    // options配置
    nowOption: '', // 当前展开项
    priceOptions: {
      title: "价格", // 选项名
      name: "price", // 英文名
      hasNumberRegion: true, // 是否带数字范围输入
      options: [
        // label为选项名，value为选项值，disable为选项是否禁用
        { label: "1000元以下", value: "0-1000" },
        { label: "1000-1500元", value: "1000-1500" },
        { label: "1500-2000元", value: "1500-2000" },
        { label: "2000-2500元", value: "2000-2500" },
        { label: "2500元以上", value: "2500-9999999" },
      ],
    },
    // 排序
    sortOptions: {
      title: "排序",
      name: "sort",
      hasNumberRegion: false,
      options: [
        { label: "综合排序", value: "0", disable: true }, // 设置disable可禁用该项
        { label: "评分优先", value: "1" },
        { label: "销量优先", value: "2" },
        { label: "新品有限", value: "3" },
        { label: "评论数由高到低", value: "4" },
        { label: "价格从高到低", value: "5" },
        { label: "价格从低到高", value: "6" },

      ],
    },
  },

  onLoad: function (options) {
  },

  onReady: function () {

  },

  onShow: function () {

  },
  /**
   * 选项
   */
  // 修改当前操作项
  changeTarget(e) {
    console.log('修改当前操作项', e.detail.target)
    this.setData({ nowOption: e.detail.target })
  },
  // 统一处理选中
  commonSelect(e) {
    const data = e.detail
    // 价格
    if (data.name === 'price') {

    }
    // 排序
    else if (data.name === 'sort') {

    }
    // code...
    // else if () {}
  },

})