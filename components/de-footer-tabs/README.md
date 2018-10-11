### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
config | Array | tabs配置 | []
width | Number  | 小图宽度 | 0
height | Number  | 小图高度 | 0
color | String | 字体颜色 | #333
nowTab | Number | 当前激活tab（默认第一个） | 0

### config
属性 | 类型 | 说明
:- | :-: | -: 
icon | String | 默认状态小图
activeIcon | String  | 激活状态小图 
name | String  | 当前tab名 | ''
msg | Boolean 或 Number | 红点提示（传true只显示红点；传入数字显示数字，大于100显示99）

### 事件
事件 | 说明
:- | -:
bind:click | tab点击事件会带上当前激活tab的下标，需在page中手动设置nowTab

