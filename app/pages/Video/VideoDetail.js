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

import FontAwesome from '../../../node_modules/react-native-vector-icons/FontAwesome';
import Header from '../../components/common/Header';
import Common from '../../common/Constants';
import CommentToolBar from '../../components/common/CommentToolBar';
import Video from 'react-native-video';
import SectionHeader from '../../components/common/SectionHeader';

export default class VideoDetail extends Component {

    componentDidMount() {
        this._fetchComments();
    }

    _fetchComments() {

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
                       style={{height: 200, width: Common.window.width}} />
                <SectionHeader title="最新评论"/>
                <View
                    style={styles.listView}
                />
                <CommentToolBar
                    style={styles.toolBar}
                    comment={category.comment}
                    like={category.like}
                    star={category.star}
                />
            </View>
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