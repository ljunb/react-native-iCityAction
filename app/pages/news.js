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
import Common from '../common/constants';
import HttpTool from '../common/util';
import CategoryMenu from '../components/category_menu';
import NewsList from '../components/news_list';
import LoadingView from '../common/loading';

export default class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            newsCategories: null,
            isLoadedCategory: false,
            newsList: null,
            isLoadedList: false,
        }
    }

    componentDidMount() {
        // 请求所有新闻分类名称
        this._fetchNewsCategories();
    }

    // 获取所有新闻分类
    _fetchNewsCategories() {

        HttpTool.get(Common.urls.news_categories, (response) => {

            let categories = response.item_list;
            this.setState({
                newsCategories: categories,
                isLoadedCategory: true,
            });

            this._fetchNewsList(this.state.newsCategories[0])

        }, (error) => {
            alert('_fetchNewsCategories: '+ error)
        });
    }

    // 请求列表数据
    _fetchNewsList(category) {

        // 拼接新闻列表URL
        let listURL = Common.urls.news_list + '?sitecode=' + category.site_code + '&poscode=' + category.pos_code + '&catcode=' + category.code + '&older_than=&newer_than=&limit=20';

        HttpTool.get(listURL, (response) => {

            let newsList = response.item_list;
            
            this.setState({
                newsList: newsList,
                isLoadedList: true,
            })

        }, (error) => {
            
            alert('_fetchNewsList: ' + error)
        })
    }

    render() {
        let Content = [<Header key={100}/>];

        if (!this.state.isLoadedCategory) {
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
                this.state.isLoadedList ?
                    <NewsList 
                        key={400}
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