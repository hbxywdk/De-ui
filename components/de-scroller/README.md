### 属性
属性 | 类型 | 说明 | 默认值
:- | :-: | :-: | -: 
scrollHeight | Number | scroll-view高度（需在page中设置） | 600
nomore | String | 数据是否加载完（page中调用接口，根据返回修改该值） | false
nomoreText | String  |没有更多数据后显示的文字提示| '没有更多数据了'
pullDownHeight | Number | 下拉多少距离触发刷新 | 60

### 事件
事件 | 说明
:- | -:
bind:scroll | 滚动事件
bind:pulldownrefresh | 下拉刷新事件
bind:loadmore | 加载更多事件
