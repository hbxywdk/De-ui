Page({

  data: {
    options1: [
      { value: '1', name: '苹果' },
      { value: '2', name: '栗子' },
      { value: '3', name: '香蕉' },
      { value: '4', name: '番茄' }
    ],
    options2: [
      { value: '1', name: '苹果' },
      { value: '2', name: '栗子', disabled: true },
      { value: '3', name: '香蕉' },
      { value: '4', name: '番茄' }
    ]
  },
  radioChange(e) {
    console.log(e.detail)
  }
})