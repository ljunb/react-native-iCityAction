/**
 * Created by ljunb on 16/5/16.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Common from '../../common/Constants';

export default class CommentToolBar extends Component {
    render() {

        let { comment, star, like } = this.props;

        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.editComment, styles.rightLine]}>
                    <Icon name="edit" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>写评论</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editComment}>
                    <Icon name="commenting-o" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>{comment}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editComment}>
                    <Icon name="star-o" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>{star}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.editComment}>
                    <Icon name="heart-o" size={18} color="gray"/>
                    <Text style={styles.commentsInfoFont}>{like}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 44,
        width: Common.window.width,
        borderTopWidth: 0.5,
        borderTopColor: '#ccc',
        backgroundColor: 'rgb(246, 246, 246)'
    },

    editComment: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    rightLine: {
        borderRightWidth: 0.5,
        borderRightColor: '#ccc',
    },

    commentsInfoFont: {
        color: 'gray',
        marginLeft: 3,
    }
})