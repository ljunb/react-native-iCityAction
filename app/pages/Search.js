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
    WebView,
    ScrollView,
} from 'react-native';

import Header from '../components/common/Header';
import SearchBar from '../components/common/SearchBar';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this._backAction = this._backAction.bind(this);
        this._searchAction = this._searchAction.bind(this);
        this._renderTitleView = this._renderTitleView.bind(this);
        this.state={
            keywords: null,
        }
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
                
            </View>
        )
    }

    _backAction() {
        this.props.navigator.pop();
    }

    _renderTitleView() {
        return (
            <SearchBar 
                placeholder="搜索都市频道新闻"
                getKeywords={(text)=>{
                    this.setState({
                        keywords: text
                    })
                }}
            />
        )
    }

    _searchAction() {
        if (this.state.keywords == null) {
            alert('请输入搜索关键词');
            return;
        }
    }
}