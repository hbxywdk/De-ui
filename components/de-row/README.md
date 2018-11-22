### 使用
json 文件引入
```
{
  "navigationBarTitleText": "Flex",
  "usingComponents": {
    "de-row": "/components/de-row/de-row",
    "de-col": "/components/de-col/de-col"
  }
}
```
wxml文件
```
<!-- wxml -->
<de-row>
    <de-col span="8"><view class='base-bg-color'>span = 8</view></de-col>
    <de-col span="8"><view class='light-bg-color'>span = 8</view></de-col>
    <de-col span="8"><view class='base-bg-color'>span = 8</view></de-col>
</de-row>
```
总格数为24格
### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
span | Number | 区块所占格数 | -
offset | Number  | 区块左边距所占格数 | -

