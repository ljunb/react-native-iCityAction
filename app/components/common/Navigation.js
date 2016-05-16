/**
 * Created by ljunb on 16/5/8.
 * 利用Navigator简单封装一个导航栏,样式为白色
 */

import React from 'react';
import {
    Navigator,
    Component,
    View,
    StyleSheet,
    StatusBar,
} from 'react-native';

export default class NavigationBar extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar barStyle='light-content'/>
                <Navigator
                    initialRoute={{name: '', component: this.props.component}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <View style={styles.container}>
                                <Component navigator = {navigator} route = {route} {...route.passProps} />
                            </View>
                        )
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})