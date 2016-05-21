## iCityAction
iCityAction是基于React-Native实现的新闻类APP，接口数据来自《都市频道》，持续更新中。
## 完成功能
目前只针对iOS端，可能接口数据分析不到位，仍有一些代码判断处理不够严谨，努力修复中：
>* 首页展示（下拉刷新，未添加上拉加载更多）
>* 新闻详情，可push至评论列表（未实现收藏、点赞新闻）
>* 搜索（未添加搜索记录），搜索结果（暂未添加下拉刷新、下拉加载更多）
>* 视频列表（下拉刷新），视频详情（采用组件已实现视频播放，暂未抓取视频评论接口）

## 运行截图
![首页](https://github.com/ljunb/react-native-iCityAction/blob/master/screenshot/main.png)
![新闻详情](https://github.com/ljunb/react-native-iCityAction/blob/master/screenshot/detail.png)
![搜索](https://github.com/ljunb/react-native-iCityAction/blob/master/screenshot/search.png)
![搜索结果](https://github.com/ljunb/react-native-iCityAction/blob/master/screenshot/search_result.png)
![视频列表](https://github.com/ljunb/react-native-iCityAction/blob/master/screenshot/video.png)

## 相关依赖
```
"dependencies": {
"react": "^0.14.8",
"react-native": "^0.25.1",
"react-native-vector-icons": "^2.0.1",
"react-native-video": "^0.8.0-rc"
}
```