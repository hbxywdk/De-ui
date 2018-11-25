### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
padding | Number | 内边距 | 20
nowOption | String  | 当前激活的options（用于多个选择器组合使用时保持只有一个被激活）| String
optionsSet | Object | 综合配置项 | {}

### 事件
事件 | 说明
:- | -:
bind:changeTarget | 改变当前展开项
bind:selectOption | 选中事件
bind:rangeChange | 数字范围选择提交事件

### optionsSet
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
label | String | 文字说明
value | String | value
disable | Boolean | 该项是否禁用