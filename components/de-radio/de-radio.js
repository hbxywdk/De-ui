Component({

  properties: {
    // 配置
    options: {
      type: Array,
      value: []
    },
    // 默认选中项
    select: {
      type: String,
      value: ''
    }
  },

  data: {
    selectItem: ''
  },

  ready () {
    // 未传默认项
    if (!this.properties.select) {
      this.setData({
        selectItem: this.properties.options[0].value
      })
    }
  },

  methods: {
    select (e) {
      const item = e.currentTarget.dataset.item
      if (item.disabled) return 
      this.setData({ selectItem: item.value })
      this.triggerEvent('change', item)
    }
  }
})
