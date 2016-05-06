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

export default class TabBarView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedTab: '新闻',
        };
    }

    render() {
        return (
            <TabBarIOS
                tintColor='red'
            >
                <TabBarIOS.Item
                    title='新闻'
                    selected={this.state.selectedTab === '新闻'}
                    onPress={() => {
                        this.setState({
                            selectedTab: '新闻'
                        })
                    }}
                >
                    {this._renderContent('新闻')}
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title='视频'
                    selected={this.state.selectedTab === '视频'}
                    onPress={() => {
                        this.setState({
                            selectedTab: '视频'
                        })
                    }}
                >
                    {this._renderContent('视频')}
                </TabBarIOS.Item>
            </TabBarIOS>
        )
    }

    _renderContent(props) {
        return (
            <View style={styles.container}>
                <Text>{props}</Text>
            </View>
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