/**
 * Created by ljunb on 16/5/11.
 * 加载视图组件
 */

import React from 'react';
import {
    ProgressBarAndroid,
    ProgressViewIOS,
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
                    <Text style={styles.loadingText}>Loading...</Text>
                </View>
            )
        }
        return (
            <View style={styles.loading}>
                <ProgressViewIOS />
                <Text style={styles.loadingText}>Loading...</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    loadingText: {
        textAlign: 'center',
    }
})