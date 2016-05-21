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
import Common from '../../common/AppConstants';

export default class Header extends Component {

    render() {

        let NavigationBar = [];

        // 左边图片按钮
        if (this.props.leftIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'leftIcon'}
                    activeOpacity={0.75}
                    style={styles.leftIcon}
                    onPress={this.props.leftTouchAction}
                >
                    <Icon color="white" size={30} name={this.props.leftIcon}/>
                </TouchableOpacity>
            )
        }

        // 标题
        if (this.props.title != undefined) {
            NavigationBar.push(
                <Text key={'title'} style={styles.title}>{this.props.title}</Text>
            )
        }

        // 自定义标题View
        if (this.props.titleView != undefined) {
            let Component = this.props.titleView;
            
            NavigationBar.push(
                <Component key={'titleView'} />
            )
        }

        // 右边图片按钮
        if (this.props.rightIcon != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightIcon'}
                    activeOpacity={0.75}
                    style={styles.rightIcon}
                    onPress={this.props.rightTouchAction}
                >
                    <Icon color="white" size={30} name={this.props.rightIcon}/>
                </TouchableOpacity>
            )
        }

        // 右边文字按钮
        if (this.props.rightButton != undefined) {
            NavigationBar.push(
                <TouchableOpacity
                    key={'rightButton'}
                    activeOpacity={0.75}
                    style={styles.rightButton}
                    onPress={this.props.rightButtonAction}
                >
                    <Text style={styles.buttonTitleFont}>{this.props.rightButton}</Text>
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

    rightButton: {
        position: 'absolute',
        right: 10,
        height: 44,
        justifyContent: 'center',
    },

    buttonTitleFont: {
        color: 'white',
        fontSize: 15,
    }
})