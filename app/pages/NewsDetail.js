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
} from 'react-native';

export default class NewsDetail extends Component {
    render() {
        return (
            <TouchableOpacity
                style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
                onPress={() => {
                    this.props.navigator.pop();
                }}
            >
                    <Text>点我返回</Text>

            </TouchableOpacity>
        )
    }
}