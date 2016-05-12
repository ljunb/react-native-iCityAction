/**
 * Created by ljunb on 16/5/9.
 * 新闻列表
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
    ListView,
    ScrollView,
} from 'react-native';

import Common from '../common/constants';

export default class NewsList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            }),
        }
    }

    componentDidMount() {
        let {newsList} = this.props;

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newsList),
        })
    }

    componentWillReceiveProps(nextProps) {

        let {newsList} = nextProps;

        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(newsList),
        })
    }

    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderNewsList}
                style={{height: Common.window.news_listView_height}}
            />
        )
    }

    _renderNewsList(category) {

        let imageCount = category.image_count;
        let titleWidth = Common.window.width - 90 - Common.window.margin * 3;

        if (imageCount > 1) {

            let margin = Common.window.margin;
            let imageWidth = (Common.window.width - (imageCount + 1) * margin) / imageCount;

            return (
                <View style={styles.row}>
                    <Text style={styles.titleFont} numberOfLines={1}>{category.title}</Text>
                    <View style={styles.multiImageContainer}>
                        {
                            category.image_list.map((imageObj, i) => {
                                return (
                                    <Image
                                        key={i}
                                        style={{height: 80, width: imageWidth}}
                                        source={{uri: imageObj.src}}
                                    />
                                )
                            })
                        }
                    </View>
                </View>
            )
        }

        return (
            <View style={[styles.rowDirection, styles.row]}>
                <Image
                    style={styles.singleImage}
                    source={{uri: category.image_list[0].src}}
                />
                <View style={[styles.titleContainer, {width: titleWidth}]}>
                    <Text style={styles.titleFont} numberOfLines={1}>{category.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row: {
        paddingTop: Common.window.margin,
        paddingBottom: Common.window.margin,
        marginLeft: Common.window.margin,
        marginRight: Common.window.margin,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(131, 131, 131, 0.6)'
    },

    rowDirection: {
        flexDirection: 'row',
    },

    singleImage: {
        height: 70,
        width: 90,
    },

    titleContainer: {
        marginLeft: Common.window.margin,
    },

    titleFont: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    multiImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7.5
    }
})