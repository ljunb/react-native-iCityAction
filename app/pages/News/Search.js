/**
 * Created by ljunb on 16/5/16.
 * 搜索页
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    InteractionManager
} from 'react-native';

import Header from '../../components/common/Header';
import SearchBar from '../../components/common/SearchBar';
import HTTPTool from '../../common/Utils';
import Common from '../../common/Constants';
import Loading from '../../components/common/Loading';
import SearchResult from '../../pages/News/SearchResult';

let gKeyword;

export default class Search extends Component {

    constructor(props) {
        super(props);
        this._backAction = this._backAction.bind(this);
        this._searchAction = this._searchAction.bind(this);
        this._renderTitleView = this._renderTitleView.bind(this);
        this.state = {
            keyword: null,
            dataSource: null,
            loaded: false,
        }
    }

    componentDidMount() {
        this._fetchkeyword();
    }

    _fetchkeyword() {
        HTTPTool.get(Common.urls.hot_keywords, (response) => {

            let keyword = response.item_list;
            this.setState({
                dataSource: keyword,
                loaded: true,
            })
        }, (error) => {
            alert('_fetchkeyword: ' + error)
        })
    }

    _renderkeyword() {

        let row = 3;
        let margin = 5;
        let width = (Common.window.width - (margin + margin * 2) * (row - 1)) / row;
        let height = 40;
        let itemStyle = [styles.itemContainer, {width: width, height: height, marginTop: margin}]

        return (
            <View style={styles.container}>
                <Text style={{color: 'gray'}}>推荐搜索</Text>
                <View style={styles.keywordContainer}>
                    {this.state.dataSource.map((keyword, i) => {
                        return (
                            <TouchableOpacity
                                key={i}
                                style={itemStyle}
                                activeOpacity={0.75}
                                onPress={()=>{
                                    this.setState({keyword: keyword});
                                    this._searchAction();
                                }}
                            >
                                <Text>{keyword}</Text>
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </View>
        )
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
                {this.state.loaded ? this._renderkeyword() : <Loading />}
            </View>
        )
    }

    _backAction() {
        this.props.navigator.pop();
    }

    _renderTitleView() {
        return (
            <SearchBar
                value={this.state.keyword}
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

        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: SearchResult,
                passProps: {
                    keyword: this.state.keyword
                }
            })
        });
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomColor: 'rgb(246, 246, 246)',
        borderBottomWidth: 10,
    },

    keywordContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 5,
    },

    itemContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(246, 246, 246, 0.75)',
    }
})