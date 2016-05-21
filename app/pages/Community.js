/**
 * Created by ljunb on 16/5/16.
 */
/**
 * Created by ljunb on 16/5/8.
 * 社区页
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    WebView,
} from 'react-native';

import Header from '../components/common/Header';
import Common from '../common/AppConstants';

export default class News extends Component {

    render() {
        return (
            <View>
                <Header title="社区"/>
                <WebView
                    automaticallyAdjustContentInsets={false}
                    source={{uri: Common.urls.community}}
                    startInLoadingState={true}
                    style={styles.webView}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    webView: {
        width: Common.window.width,
        height: Common.window.height - Common.window.navigation_height
    },
});