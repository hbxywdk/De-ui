### de-list属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
text | String | 左侧文字i | default
fText | String  | 副标题 | ''
img | String | 左侧小图 | ''
count | Number | 计数红点 | 0
loading | Boolean | 按钮加载 | false

### 成组使用，父组件de-list-group调用子组件de-list的方法，去除第一个list的上边框与最后一个list的下边框
json文件引入
```
{
  "usingComponents": {
    "de-list-group": "/components/de-list-group/de-list-group",
    "de-list": "/components/de-list/de-list",
  }
}
```
wxml文件
```
<de-list-group>
  <de-list text="List 列表"></de-list>
  <de-list text="List 列表"></de-list>
  <de-list text="List 列表"></de-list>
  <de-list text="List 列表"></de-list>
</de-list-group>
```