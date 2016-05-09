/**
 * Created by ljunb on 16/5/8.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

import Header from '../components/header';
import {NEWS_CATEGORIES_URL, NEWS_BANNER_URL} from '../common/constants';
import HttpTool from '../common/util';
import CategoryMenu from '../components/category_menu';
import NewsList from '../components/news_list';

export default class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newsCategories: [],
            bannerData: [],
            newsList: [],
        }
    }

    componentDidMount() {
        this._fetchNewsCategories();
    }

    // 获取所有新闻分类
    _fetchNewsCategories() {

        HttpTool.get(NEWS_CATEGORIES_URL, (response) => {

            let categories = response.item_list;
            this.setState({
                newsCategories: categories,
            });

            // 请求第一个分类的轮播数据
            this._fetchBannerData(this.state.newsCategories[0]);

        }, (error) => {
            
        });
    }

    // 请求轮播数据
    _fetchBannerData(category) {
        
        let bannerUrl = NEWS_BANNER_URL + '?sitecode=' + category.site_code + '&poscode=' + category.hot_pos_code;
        
        HttpTool.get(bannerUrl, (response) => {

            let bannerDatas = response.item_list;
            this.setState({
                bannerData: bannerDatas,
            })
            
        }, (error) => {
            
        });
    }

    render() {
        return (
            <View>
                <Header />
                <CategoryMenu
                    categories={this.state.newsCategories}
                    fetchBannerData={(category) => {
                        this._fetchBannerData(category);
                    }}
                />
                <NewsList 
                    bannerDatas={this.state.bannerData}
                />
            </View>
        )
    }
}