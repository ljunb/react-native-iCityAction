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
    Image,
    TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../../common/Constants';

export default class Header extends Component {

    render() {

        let NavigationBar = [];

        // 左边按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={100}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftIconAction}
                >
                    <Icon color="white" size={30} name={this.props.leftIcon}/>
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={200} style={styles.title}>{this.props.title}</Text>
            )
        }

        // 右边按钮
        if (this.props.rightIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={300}
                    activeOpacity={0.75}
                    style={styles.rightIcon}
                    onPress={this.props.rightIconAction}
                >
                    <Icon color="white" size={30} name={this.props.rightIcon}/>
                </TouchableOpacity>
            )
        }
        return (
            <View style={styles.header}>
                <View style={styles.navigationBarContainer}>
                    {NavigationBar}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: Common.window.navigation_height,
        backgroundColor: Common.color.theme_color,
    },

    navigationBarContainer: {
        flexDirection: 'row',
        marginTop: 20,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },

    leftIcon: {
        position: 'absolute',
        left: 10,
        top: 7
    },

    rightIcon: {
        position: 'absolute',
        right: 10,
        top: 7
    },
})