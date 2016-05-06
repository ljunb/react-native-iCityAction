/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
    AppRegistry,
    Component,
} from 'react-native';

import TabBarView from './app/tabbar';

/*
import Util from './app/common/util';
import URLS from './app/common/service';

class iCityAction extends Component {

    componentDidMount() {
        this._fetchNews();
    }

    // 测试方法
    _fetchNews() {
        Util.get(URLS.news_categories, (response) => {

            var categories = response.item_list;

            alert('success: ' + categories[0].name);

        }, (error) => {

            alert('error: ' + error);
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.ios.js
                </Text>
                <Text style={styles.instructions}>
                    Press Cmd+R to reload,{'\n'}
                    Cmd+D or shake for dev menu
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
*/


AppRegistry.registerComponent('iCityAction', () => TabBarView);
