## De-ui
<p align="center">
  <img style="border-radius: 50%;" src="./assets/img/logo.jpg" width="100" alt="De-ui logo">
</p>

一个小程序的UI库  
集中整理一些自己写过的小程序组件，与一些常用的组件，方便以后使用。

### 预览：

<p align="center">
  <img src="./assets/img/wx_code.jpg" width="140" alt="wx_code">
</p>

### 使用：

#### 1、拉取代码
```
git clone git@github.com:hbxywdk/De-ui.git
```

#### 2、复制文件
复制assets、components、de-page文件夹以及app.wxss到项目根目录中

#### 3、使用组件
```
// json文件中引入对应组件
{
  "usingComponents": {
    "de-button": "/components/de-button/de-button"
  }
}

// wxml文件中使用
<de-button type='success' bind:click="click">成功</de-button>
```

#### 4、使用de-page
app.json中引入de-page
```
{
  "pages": [
    "de-page/de-msg-page/de-msg-page"
  ]
}
```
js跳转
```
wx.navigateTo({
    url: '/de-page/de-msg-page/de-msg-page?type=1&title=操作结果&firstTit=操作成功&secondTit=您的操作成功了&btnText=返回',
})
```

### 组件列表与文档

- 基础
    - [x] [Button 按钮](./components/de-button/README.md)
    - [x] [Icon 图标](./components/de-icon/README.md)
    - [x] [Flex 对齐方式](./pages/Base/flex/README.md)
- 布局
    - [x] [Layout 栅格布局](./components/de-col/README.md)
    - [x] [Title 标题](./components/de-title/README.md)
    - [x] [Label 标签](./components/de-label/README.md)
    - [x] [List 列表](./components/de-list/README.md)
    - [x] [FooterTabs 底部标签](./components/de-footer-tabs/README.md)
    - [x] [Line 分割线](./components/de-line/README.md)

- 表单
    - [x] [Input 输入框](./components/de-input/README.md)
    - [x] [Switch 开关](./components/de-switch/README.md)
    - [x] [Radio 单选](./components/de-radio/README.md)
    - [x] [Checkbox 多选](./components/de-checkbox/README.md)
- 功能
    - [x] [Search 搜索](./components/de-search/README.md)
    - [x] [Progress 进度条](./components/de-progress/README.md)
    - [x] [IndexSelector 索引选择器](./components/de-index-selector/README.md)
    - [x] [SlideDel 滑动删除](./components/de-slidedel/README.md)
    - [x] [Range 滑块](./components/de-range/README.md)
    - [x] [Filter 筛选器](./components/de-filter/README.md)
    - [x] [Scroller 滚动区域](./components/de-scroller/README.md)
- 提示
    - [x] [TopNotice 顶部公告栏](./components/de-top-notice/README.md)
    - [x] [Alert 弹窗](./components/de-alert/README.md)
- 其他
    - [x] [Loading 加载](./components/de-loading/README.md)
    - [x] [MsgPage 页面提示](./de-page/de-msg-page/README.md)
    - [x] [Image 图片](./components/de-image/README.md)
    
### 未来要实现的组件
- 布局
    - 宫格布局 Grid
    - SwiperBoxs 滑动盒
- 功能
    - 步骤条 Steps
    - 吸顶容器 Sticky
    - 顶部弹出提示 TopTips
    - 环形进度条 Circle
    - 倒计时 CountDown
    - 滚动公告 RollingBulletin
    - 轮播图的封装 Swiper
    - 迭代Filter 筛选器
- 提示
    - 弹出式 Loading
    - 弹出式密码输入框 Password
    - 提示 Toast
