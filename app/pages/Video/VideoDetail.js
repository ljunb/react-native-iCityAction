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
    WebView,
    ScrollView,
    InteractionManager
} from 'react-native';

import FontAwesome from '../../../node_modules/react-native-vector-icons/FontAwesome';
import Header from '../../components/common/Header';
import Common from '../../common/Constants';
import CommentToolBar from '../../components/common/CommentToolBar';
import Video from 'react-native-video';

export default class VideoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showMore: false,
        }
    }

    render() {

        let {category} = this.props;

        return (
            <View>
                <Header
                    title="都市频道"
                    leftIcon="ios-arrow-back"
                    leftTouchAction={()=>{this.props.navigator.pop()}}
                    rightIcon="ios-share"
                    rightTouchAction={()=>{this.setState({showMore: !this.state.showMore})}}
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
    toolBar: {
        position: 'absolute',
        bottom: 0,
    },

    itemFont: {
        marginLeft: 10,
        color: 'white',
        fontSize: 16,
    }
})