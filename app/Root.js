/**
 * Created by ljunb on 16/5/16.
 */
import React from 'react';
import {
    Component,
    Navigator,
    StyleSheet,
    StatusBar,
    View,
} from 'react-native';
import TabBarView from './TabBar';

export default class Root extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle='light-content'/>
                <Navigator
                    initialRoute={{name:'TabBarView',component:TabBarView}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return (
                            <Component navigator = {navigator} route = {route} {...route.passProps} />
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