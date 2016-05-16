/**
 * Created by ljunb on 16/5/12.
 * 新闻详情页
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
import Common from '../common/Constants';

export default class NewsDetail extends Component {
    constructor(props) {
        super(props);
        this._backAction = this._backAction.bind(this);
        this._moreAction = this._moreAction.bind(this);
    }

    render() {

        return (
            <View >
                <ScrollView >
                    <Header
                        title="都市频道"
                        leftIcon="ios-arrow-back"
                        leftIconAction={this._backAction}
                        rightIcon="ios-more"
                        rightIconAction={this._moreAction}
                    />

                    <WebView
                        source={{uri: this.props.category.permalink}}
                        startInLoadingState={true}
                        domStorageEnabled={true}
                        javaScriptEnabled={true}
                        style={styles.webView}
                    />
                    <View style={{height: 100, flex: 1, backgroundColor: 'red'}}></View>
                </ScrollView>
            </View>
        )
    }

    _backAction() {
        this.props.navigator.pop();
    }

    _moreAction() {
        alert('刷新+分享')
    }
}

const styles = StyleSheet.create({
    webView: {
        width: Common.window.width,
        height: Common.window.height - Common.window.navigation_height - Common.window.tabBar_height
    }
})