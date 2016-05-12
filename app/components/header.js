/**
 * Created by ljunb on 16/5/8.
 * 导航栏标题
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Common from '../common/constants';

export default class Header extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>都市频道</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 64,
        backgroundColor: Common.color.theme_color,
    },

    titleContainer: {
        marginTop: 20,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    }
})