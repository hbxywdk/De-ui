属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
size | String | 按钮尺寸 （同官方文档）default, mini | default
type | String  | 按钮样式 success，warning，error | success
bgColor | String | 按钮颜色（若传入这一项，则type失效） | ''
disabled | Boolean | 按钮禁用 | false
loading | Boolean | 按钮加载 | false
openType | String | 微信开放能力 contact share getUserInfo getPhoneNumber openSetting | ''
---

事件 | 说明
:- | -:
bind:click | 点击事件（loading与disabled状态下不会被触发）
bind:bindContact | 客服消息回调
bind:bindGetPhoneNumber | 获取用户手机号回调
bind:bindGetUserinfo | 获取用户信息回调
bind:bindOpenSetting | 在打开授权设置页后回调
bind:bindError | 当使用开放能力时，发生错误的回调

