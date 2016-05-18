/**
 * Created by ljunb on 16/5/11.
 * 加载视图组件
 */

import React from 'react';
import {
    ProgressBarAndroid,
    ActivityIndicatorIOS,
    Platform,
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

export default class LoadingView extends Component {

    render() {

        if (Platform.OS === 'android') {
            return (
                <View style={styles.loading}>
                    <ProgressBarAndroid styleArr="LargeInverse" color="#3e9ce9"/>
                    <Text style={styles.loadingText}>正在加载中</Text>
                </View>
            )
        }
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS />
                <Text style={styles.loadingText}>正在加载中</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
    },

    loadingText: {
        marginLeft: 5,
        textAlign: 'center',
        color: 'gray'
    }
})