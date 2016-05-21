/**
 * Created by ljunb on 16/5/18.
 * 视频详情页
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    InteractionManager,
    ListView,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Header from '../../components/common/Header';
import Common from '../../common/AppConstants';
import CommentToolBar from '../../components/common/CommentToolBar';
import Video from 'react-native-video';
import SectionHeader from '../../components/common/SectionHeader';
import HTTPTool from '../../common/Utils';

export default class VideoDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            })
        }
    }

    componentDidMount() {
        this._fetchComments();
    }

    _fetchComments() {
        
//http://app.lndspd.com/api_v31/rest/infos/553757080549326850/comments?sort=recent&older_than=&newer_than=&limit=20
//http://app.lndspd.com/api_v31/rest/infos/553757080549326848/comments?sort=recent&older_than=&newer_than=&limit=20
        let url = Common.urls.news_info + this.props.id + '/comments?sort=recent&older_than=&newer_than=&limit=20';

        HTTPTool.get(url, (response) => {
            let comments = response.item_list;

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(comments),
                loaded: true,
            })

            alert(comments)

        }, (error) => {
            console.log('_fetchCommentsList: ' + error);
            this.setState({loaded: true});
        });
    }

    render() {

        let {category} = this.props;

        return (
            <View style={styles.container}>
                <Header
                    title="都市频道"
                    leftIcon="ios-arrow-back"
                    leftTouchAction={()=>{this.props.navigator.pop()}}
                    rightIcon="ios-share"
                    rightTouchAction={()=>{alert('分享')}}
                />
                <Video source={{uri: category.info_ext.v_src}}
                       rate={1.0}
                       volume={1.0}
                       muted={false}
                       paused={false}
                       resizeMode="cover"
                       repeat={true}
                       style={{height: 200, width: Common.window.width}}/>
                <SectionHeader title="最新评论"/>
                {this.state.loaded ?
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        style={styles.listView}
                    /> : null
                }
                <CommentToolBar
                    style={styles.toolBar}
                    comment={category.comment}
                    like={category.like}
                    star={category.star}
                />
            </View>
        )
    }

    _renderRow(comments) {
        return (
            <Text style={{height: 40, width: Common.window.width}}>{comments.comment}</Text>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: Common.window.height,
        width: Common.window.width,
    },

    listView: {
        height: Common.window.height - Common.window.navigation_height - 200 - 44 - 44,
        width: Common.window.width,
    },

    toolBar: {
        position: 'absolute',
        bottom: 0,
    },
})