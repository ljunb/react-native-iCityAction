/**
 * Created by ljunb on 16/5/18.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import Common from '../../common/Constants';

export default class SectionHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: Common.window.width,
        justifyContent: 'center',
        height: 44,
        padding: 10,
        backgroundColor: 'rgb(246, 246, 246)',
    },

    header: {
        paddingLeft: 8,
        borderLeftColor: Common.color.theme_color,
        borderLeftWidth: 5,
        paddingTop: 5,
        paddingBottom: 5,
    },

    title: {
        fontWeight: 'bold',
        fontSize: 15,
    }
})