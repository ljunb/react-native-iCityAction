/**
 * Created by ljunb on 16/5/6.
 */

import { Dimensions } from 'react-native';


// 屏幕布局相关
let window = {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    navigation_height: 64,
    category_menu_height: 40,
    tabBar_height: 49,
    news_listView_height: Dimensions.get('window').height - 64 - 40 - 49,
    margin: 10,
}

// 颜色
let colors = {
    theme_color: 'rgb(217, 51, 58)',
}

let styles = {
    pvImage: {width: 15, height: 10},
    newsSingleImage: {height: 70, width: 95},
}

// 请求接口
let urls = {
    /*
     *  首页所有新闻分类
     *  数据格式
     *  "site_code": 100,
     *  "pos_code": 10001,
     *  "url_type": 0,
     *  "hot_pos_code": 10007,
     *  "code": 0,
     *  "id": 504242426655801344,
     *  "name": "推荐",
     *  "type": "news",
     *  "url": " 
     *  
     * */
    news_categories: 'http://app.lndspd.com/api_v3/rest/categories',
    /*
     *  新闻列表
     *  参数:
     *  sitecode=100    (site_code)
     *  poscode=10001   (pos_code)
     *  catcode=0       (code)
     *  older_than      (请求更多时参数,新闻数据order字段)
     *  
     *  eg: http://app.lndspd.com/api_v31/rest/infos?sitecode=100&poscode=10001&catcode=0&older_than=&newer_than=&limit=20
     * */
    news_list: 'http://app.lndspd.com/api_v31/rest/infos',

    /*
     *  新闻信息
     *  参数:
     *
     *  556956583125319680 (新闻id)
     *  permalink (新闻内容HTML)
     *
     *  eg: http://app.lndspd.com/api_v31/rest/infos/556956583125319680
     * */
    news_info: 'http://app.lndspd.com/api_v31/rest/infos/',

    /*
     *  新闻评论
     *  参数:
     *
     *  556956583125319680 (新闻id)
     *  permalink (新闻内容HTML)
     *  
     *  eg: http://app.lndspd.com/api_v31/rest/infos/553757080549326850/comments?sort=recent&older_than=&newer_than=&limit=20
     * */

    /*
    *  搜索推荐关键词
    * */
    hot_keywords: 'http://app.lndspd.com/api_v31/rest/search/suggestions?limit=',

    /*
     *  搜索
     *  参数:
     *
     *  q (关键词)
     *
     *  eg: http://app.lndspd.com/api_v31/rest/search/info?q=%E5%81%A5%E5%BA%B7&start=0&limit=20
     * */
    search: 'http://app.lndspd.com/api_v31/rest/search/info',

    /*
    *  视频分类
    * */
    video_categories: 'http://app.lndspd.com/api_v31/rest/categories/video',

    /*
    *  视频列表
    *  *  参数:
    *  sitecode=100    (site_code)
    *  poscode=10001   (pos_code)
    *  catcode=0       (code)
    *  older_than      (请求更多时参数,新闻数据order字段)
    *
    *  eg: http://app.lndspd.com/api_v31/rest/infos/video?sitecode=100&poscode=10004&catcode=0&older_than=&newer_than=&limit=20
    * */
    video_list: 'http://app.lndspd.com/api_v31/rest/infos/video',

    /*
    *  社区内页
    * */
    community: 'http://app.lndspd.com/api_v31/bbs/index.jsp'
}

export default Common = {
    window: window,
    urls: urls,
    color: colors,
    style: styles,
}