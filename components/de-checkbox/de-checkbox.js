Component({

  properties: {
    // 配置
    options: {
      type: Array,
      value: []
    },
    // 默认选中项
    select: {
      type: Array,
      value: []
    }
  },

  data: {
    selectItem: ''
  },

  ready() {
    // 默认选中第一项
    if (!this.properties.select) {
      this.setDafaultItem(0)
    } else {
      const item = this.properties.options.filter((e, i) => {
        return e.value === this.properties.select
      })
      this.setData({
        selectItem: item[0].value
      })
      this.triggerEvent('change', item[0])
    }
  },

  methods: {
    setDafaultItem(index) {
      this.setData({
        selectItem: this.properties.options[index].value
      })
      this.triggerEvent('change', this.properties.options[index])
    },
    select(e) {
      const item = e.currentTarget.dataset.item
      if (item.disabled) return
      this.setData({ selectItem: item.value })
      this.triggerEvent('change', item)
    }
  }
})
