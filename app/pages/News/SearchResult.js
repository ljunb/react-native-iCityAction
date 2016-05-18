/**
 * Created by ljunb on 16/5/18.
 * 搜索结果页
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    RefreshControl,
    ListView,
    InteractionManager
} from 'react-native';

import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import HTTPTool from '../../common/Util';
import Common from '../../common/Constants';
import Loading from '../../components/common/Loading';
import NewsDetail from '../../pages/News/NewsDetail';
import MultiImageCell from '../../components/cells/MultiImageCell';
import SingleImageCell from '../../components/cells/SingleImageCell';
import AdCell from '../../components/cells/AdCell';

export default class SearchResult extends Component {

    constructor(props) {
        super(props);
        this._backAction = this._backAction.bind(this);
        this._searchAction = this._searchAction.bind(this);
        this._renderTitleView = this._renderTitleView.bind(this);

        this.state = {
            keyword: null,
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            }),
        }
    }

    componentDidMount() {
        this.setState({
            keyword: this.props.keyword
        }, function () {
            this._fetchResult();
        })
    }

    _fetchResult() {

        let url = Common.urls.search + '?q=' + this.state.keyword + '&start=0&limit=20';

        HTTPTool.get(url, (response) => {

            let categories = response.item_list;

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(categories),
                loaded: true
            })

        }, (error) => {
            alert('_fetchResult: ' + error)
        })
    }


    _renderResultRow(category) {

        let imageCount = category.image_count;

        if (category.type === 'news') {
            return (
                imageCount > 1 ?
                    <MultiImageCell category={category} touchAction={this._pushToDetailPage.bind(this, category)}/>
                    : <SingleImageCell category={category} touchAction={this._pushToDetailPage.bind(this, category)}/>
            )
        }

        return (<AdCell category={category} touchAction={this._pushToDetailPage.bind(this, category)}/>)
    }

    _pushToDetailPage(category) {
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: NewsDetail,
                passProps: {
                    category: category,
                }
            })
        });
    }

    render() {

        return (
            <View >
                <Header
                    leftIcon="ios-arrow-back"
                    leftTouchAction={this._backAction.bind(this)}
                    titleView={this._renderTitleView.bind(this)}
                    rightButton="搜索"
                    rightButtonAction={this._searchAction.bind(this)}
                />
                {this.state.loaded ?
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderResultRow.bind(this)}
                        style={{height: Common.window.height - Common.window.navigation_height, width: Common.window.width}}
                    /> : <Loading />}
            </View>
        )
    }

    _backAction() {
        this.props.navigator.pop();
    }

    _renderTitleView() {

        let value = this.props.keyword || this.state.keyword;

        return (
            <SearchBar
                value={value}
                placeholder="搜索都市频道新闻"
                onSubmitEditing={this._searchAction}
                onChangeText={(text) => {
                    this.setState({keyword: text})
                }}
            />
        )
    }

    _searchAction() {

        if (this.state.keyword == null) {
            alert('请输入搜索关键词');
            return;
        }

        this._fetchResult();
    }
}
