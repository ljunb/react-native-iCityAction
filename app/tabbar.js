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
import NavigationBar from './components/common/Navigation';
import News from './pages/News';

const tabBarItems = [
    {title: '首页', icon: 'home', component: News},
    {title: '视频', icon: 'play-circle-o', component: News},
    {title: '互动', icon: 'tv', component: News},
    {title: '社区', icon: 'comments-o', component: News},
    {title: '我的', icon: 'user', component: News},
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
                                <NavigationBar component={controller.component}/>
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