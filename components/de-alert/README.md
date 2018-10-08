### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
show | Boolean | 显示弹窗 | false
title | String | 弹窗标题 | ''
btnText | String | 确认按钮文字 | 确定
showCancel | Boolean | 是否显示取消按钮 | true
openType | String | 微信开放能力 contact share getUserInfo getPhoneNumber openSetting | '' 

### 事件
事件 | 说明
:- | -:
bind:confirm | 确定
bind:cancel | 取消
bind:bindContact | 客服消息回调
bind:bindGetPhoneNumber | 获取用户手机号回调
bind:bindGetUserinfo | 获取用户信息回调
bind:bindOpenSetting | 在打开授权设置页后回调
bind:bindError | 当使用开放能力时，发生错误的回调

