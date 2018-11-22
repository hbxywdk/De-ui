### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
type | String  | icon类型 | ''
size | String | icon大小（px，rpx，em等） | 28rpx
color | String | icon颜色 | '#999'

### 备注
小程序同网页一样可以使用字体，但网页中使用src:url()引入的字体无论是本地还是远程资源都不行。

解决方法：将ttf转换成base64格式，再引入wxss中，即可正常使用。

可使用该网站 [https://transfonter.org/](https://transfonter.org/) 转换字体为Base64。添加字体并开启Base64 encode，点击Convert按钮开始转换。
