Page({
  data: {
    indexData: {
      "A": [{ name: '安徽省' }, { name: '澳门特别行政区' }],
      "B": [{ name: '北京市' }],
      "C": [{ name: '重庆市' }],
      "F": [{ name: '福建省' }],
      "G": [{ name: '甘肃省' }, { name: '广东省' }, { name: '广西壮族自治区' }, { name: '贵州省' }],
      "H": [{ name: '海南省' }, { name: '河北省' }, { name: '黑龙江省' }, { name: '河南省' }, { name: '湖北省' }, { name: '湖南省' }],
      "J": [{ name: '江苏省' }, { name: '江西省' }, { name: '吉林省' }],
      "L": [{ name: '辽宁省' }],
      "N": [{ name: '内蒙古' }, { name: '宁夏回族自治区' }],
      "Q": [{ name: '青海省' }],
      "S": [{ name: '陕西省' }, { name: '山东省' }, { name: '上海市' }, { name: '山西省' }, { name: '四川省' }],
      "T": [{ name: '天津市' }],
      "X": [{ name: '新疆维吾尔自治区' }, { name: '西藏自治区' }],
      "Y": [{ name: '云南省' }],
      "Z": [{ name: '浙江省' }],
    }
  },
  select (e) {
    console.log('点击项目：', e.detail.item)
  }
})