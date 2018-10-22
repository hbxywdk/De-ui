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
      value: [],
      observer: 'setDafaultItem'
    }
  },

  data: {
    selectItem: {}
  },

  ready() {
    // console.log(this.properties.options, '--', this.properties.select)
    if (Array.isArray(this.properties.select) && this.properties.select.length) {
      this.setDafaultItem()
    }
  },

  methods: {
    setDafaultItem(index) {
      const select = this.properties.select
      const options = this.properties.options
      const obj = {}
      for(let i = 0; i < select.length; i++){
        for (let j = 0; j < options.length; j++) {
          (options[j].value === select[i] && !options[j].disabled) && (obj[select[i]] = options[j].value)
        }
      }
      // console.warn(obj)
      this.setData({
        selectItem: obj
      })
      this.triggerEvent('change', obj)
    },
    select(e) {
      const item = e.currentTarget.dataset.item
      if (item.disabled) return
      const selectItem = this.data.selectItem
      if (selectItem[item.value]){
        delete selectItem[item.value]
      } else {
        selectItem[item.value] = item.value
      }
      this.setData({ selectItem: selectItem })
      this.triggerEvent('change', selectItem)
    }
  }
})
