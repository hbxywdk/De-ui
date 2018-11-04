### 使用
```
  "usingComponents": {
    "de-slidedel": "/components/de-slidedel/de-slidedel"
  }
```
```
<de-slidedel bind:del="delItem">
  <view class='demo-del'>
    这是一条数据
  </view>
</de-slidedel>
```

### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
disabled | Boolean | 禁用 | false

### 事件
事件 | 说明
:- | -:
bind:del | 删除事件
