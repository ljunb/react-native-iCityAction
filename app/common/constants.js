/**
 * Created by ljunb on 16/5/6.
 */
import {
    Dimensions,
} from 'react-native';

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

let color = {
    /*
     *  APP主题颜色
     * */
    theme_color: 'rgb(217, 51, 58)',
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
     *  
     *  eg: http://app.lndspd.com/api_v31/rest/infos?sitecode=100&poscode=10001&catcode=0&older_than=&newer_than=&limit=20
     * */
    news_list: 'http://app.lndspd.com/api_v31/rest/infos'
}

export default Common = {
    window: window,
    urls: urls,
    color: color,
}