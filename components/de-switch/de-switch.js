Component({

  properties: {
    // 开关状态
    status: {
      type: Boolean,
      value: false
    },
    // 禁用
    disabled: {
      type: Boolean,
      value: false
    }
  },

  data: {

  },

  methods: {
    swicthTap () {
      if (this.properties.disabled) return
      this.triggerEvent('change', { status: !this.properties.status })
    }
  }
})
