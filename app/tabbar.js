/**
 * Created by ljunb on 16/5/6.
 */
import React from 'react';
import {
    Component,
    TabBarIOS,
    View,
    Text,
    StyleSheet,
} from 'react-native';

import NavigationBar from './components/common/Navigation';
import News from './pages/News';

const tabBarItems = [
    {title: '首页', icon: 'bottom-home-normal', selectedIcon: 'bottom-home-active', component: News},
    {title: '视频', icon: 'bottom-video-normal', selectedIcon: 'bottom-video-active', component: News},
    {title: '互动', icon: 'bottom-tv-normal', selectedIcon: 'bottom-tv-active', component: News},
    {title: '社区', icon: 'bottom-bbs-normal', selectedIcon: 'bottom-bbs-active', component: News},
    {title: '我的', icon: 'bottom-user-normal', selectedIcon: 'bottom-user-active', component: News},
]

export default class TabBarView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: tabBarItems[0].title,
        };
    }

    render() {
        return (
            <TabBarIOS tintColor='red'>
                {
                    tabBarItems.map((controller, i) => {
                        return (
                            <TabBarIOS.Item
                                key={i}
                                title={controller.title}
                                selected={this.state.selectedTab === controller.title}
                                icon={{uri: controller.icon, scale: 2}}
                                selectedIcon={{uri: controller.selectedIcon, scale: 2}}
                                onPress={() => {
                                    this.setState({
                                       selectedTab: controller.title
                                    })
                                }}
                            >
                                <NavigationBar component={controller.component}/>
                            </TabBarIOS.Item>
                        )
                    })
                }
            </TabBarIOS>
        )
    }
}

let styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})