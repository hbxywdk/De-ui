
/**
 * 
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 默认为80
    padding: {
      type: Number,
      value: 20,
    },
    // 当前激活的options（用于多个选择器组合使用时保持只有一个被激活）
    nowOption: {
      type: String,
      value: '',
      observer: 'onNowOptionsChange',
    },
    // 综合配置项
    optionsSet: {
      type: Object,
      value: {}
    }
  },

  ready () {
    const query = wx.createSelectorQuery().in(this)
    query.select('.warp-options').boundingClientRect(res => {
      console.log(res.bottom)
      this.setData({
        bottom: res.bottom
      })
    }).exec()
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    bottom: 0, // 控件所在底边定位
    openStatus: false, // 该组件的开关状态
    selectItem: null, // 当前选中项
  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 对比当前展开项，以关闭该组件中可能存在的处于open状态的Options
    onNowOptionsChange(newVal, oldVal) {
      if (newVal !== oldVal && oldVal !== '' && newVal !== '' && newVal !== this.properties.optionsSet.name) {
        this.setData({ openStatus: false })
      }
    },
    // 开关
    switchOptions() {
      this.setData({ openStatus: !this.data.openStatus })
      const target = this.properties.optionsSet.name === this.properties.nowOption ? '' : this.properties.optionsSet.name
      this.triggerEvent("changeTarget", { target })
      console.log('开关状态', this.data.openStatus)
    },
    // 选项选中
    optionSelect(e) {
      const data = e.currentTarget.dataset
      console.log('选中事件', data)
      if (data.disable) return
      // 触发选中事件
      this.triggerEvent("selectOption", { name: this.properties.optionsSet.name, value: data.value })
      // 关闭已打开选项 & 设置选中项
      this.setData({
        openStatus: false,
        selectItem: data.value
      })
      this.triggerEvent("changeTarget", { target: '' })
    }
  }
})
