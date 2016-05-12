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
} from 'react-native';

import Common from '../../common/Constants';
import MultiImageCell from '../cells/MultiImageCell';
import SingleImageCell from '../cells/SingleImageCell';
import AdCell from '../cells/AdCell';

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

        if (category.type === 'news') {
            return (imageCount > 1 ? <MultiImageCell category={category} /> : <SingleImageCell category={category} />)
        }
        
        return(<AdCell category={category} />)
    }
}