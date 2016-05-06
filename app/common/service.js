/**
 * Created by ljunb on 16/5/6.
 */

// 以下数据请求皆为GET方法
let URLS = {
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
     *  首页轮播数据
     *  参数:
     *  sitecode=100    (site_code)
     *  poscode=10007   (pos_code)
     *  
     *  eg: http://app.lndspd.com/api_v31/rest/infos/pos/1?sitecode=100&poscode=10007
     * */
    news_banner: 'http://app.lndspd.com/api_v31/rest/infos/pos/1',

    /*
     *  新闻列表
     *  参数:
     *  sitecode=100    (site_code)
     *  poscode=10001   (pos_code)
     *  catcode=0       (code)
     *  
     *  eg: http://app.lndspd.com/api_v31/rest/infos?sitecode=100&poscode=10001&catcode=0&older_than=&newer_than=&limit=20
     * */
    news_list: 'http://app.lndspd.com/api_v31/rest/infos',
}

export default URLS;