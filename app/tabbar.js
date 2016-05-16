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
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import News from './pages/News';
import Video from './pages/Video';
import Live from './pages/Live';
import Community from './pages/Community';
import User from './pages/User';

const tabBarItems = [
    {title: '首页', icon: 'home', component: News},
    {title: '视频', icon: 'play-circle-o', component: Video},
    {title: '互动', icon: 'tv', component: Live},
    {title: '社区', icon: 'comments-o', component: Community},
    {title: '我的', icon: 'user', component: User},
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

                        let Component = controller.component;

                        return (
                            <FontAwesome.TabBarItem
                                key={i}
                                title={controller.title}
                                selected={this.state.selectedTab === controller.title}
                                iconName={controller.icon}
                                selectedIconName={controller.icon}
                                onPress={() => {
                                    this.setState({
                                       selectedTab: controller.title
                                    })
                                }}
                            >
                                <Component navigator={this.props.navigator}/>
                            </FontAwesome.TabBarItem>
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