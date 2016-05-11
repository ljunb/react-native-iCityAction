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
import {NEWS_CATEGORIES_URL, NEWS_BANNER_URL, NEWS_LIST_URL} from '../common/constants';
import HttpTool from '../common/util';
import CategoryMenu from '../components/category_menu';
import NewsList from '../components/news_list';
import LoadingView from '../common/loading';

export default class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newsCategories: [],
            bannerData: [],
            newsList: [],
            loading: true,
        }
    }

    componentDidMount() {
        // 请求所有新闻分类名称
        this._fetchNewsCategories();
    }

    // 获取所有新闻分类
    _fetchNewsCategories() {

        HttpTool.get(NEWS_CATEGORIES_URL, (response) => {

            let categories = response.item_list;
            this.setState({
                newsCategories: categories,
            });

            this._fetchNewsList(this.state.newsCategories[0])

        }, (error) => {

        });
    }

    // 当分类为"推荐"时,请求轮播数据
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

    // 请求列表数据
    _fetchNewsList(category) {

        // 如为"推荐",才请求轮播数据,其他分类清空轮播数据
        category.name === '推荐' ? this._fetchBannerData(category) : this.setState({bannerData: []});

        // 拼接新闻列表URL
        let listURL = NEWS_LIST_URL + '?sitecode=' + category.site_code + '&poscode=' + category.pos_code + '&catcode=' + category.code + '&older_than=&newer_than=&limit=20';

        HttpTool.get(listURL, (response) => {

            let newsList = response.item_list;

            this.setState({
                newsList: newsList,
            })

        }, (error) => {

        })
    }


    render() {
        let Content = [<Header key={100}/>];

        if (!this.state.newsCategories.length) {
            Content.push(<LoadingView key={200}/>)
        } else {
            Content.push(
                <CategoryMenu
                    key={300}
                    categories={this.state.newsCategories}
                    fetchNewsList={(category) => {
                        this._fetchNewsList(category);
                    }}
                />
            )

            Content.push(
                this.state.newsList.length ?
                    <NewsList 
                        key={400} 
                        bannerDatas={this.state.bannerData} 
                        newsList={this.state.newsList} /> : <LoadingView key={200}/>
            )
        }

        return (
            <View>
                {Content}
            </View>
        )
    }
}