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
} from 'react-native';
import DetailHeader from '../components/common/DetailHeader';
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
                <DetailHeader
                    backAction={this._backAction.bind(this)}
                    moreAction={this._moreAction.bind(this)}
                />
                <WebView
                    source={{uri: this.props.category.permalink}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                    style={styles.webView}
                />
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
        height:Common.window.height - Common.window.navigation_height - Common.window.tabBar_height
    }
})