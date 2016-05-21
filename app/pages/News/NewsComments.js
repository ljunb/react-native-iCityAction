/**
 * Created by ljunb on 16/5/17.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    ListView,
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import FontAwesome from '../../../node_modules/react-native-vector-icons/FontAwesome';
import Header from '../../components/common/Header';
import HTTPTool from '../../common/Utils';
import Common from '../../common/AppConstants';
import Loading from '../../components/common/Loading';

export default class NewsComments extends Component {

    constructor(props) {
        super(props);

        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            }),
            loaded: false,
        }
    }

    componentDidMount() {
        this._fetchCommentsList();
    }

    _fetchCommentsList() {

        let url = Common.urls.news_info + this.props.id + '/comments?sort=recent&older_than=&newer_than=&limit=20';

        HTTPTool.get(url, (response) => {
            let comments = response.item_list;

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(comments),
                loaded: true,
            })

        }, (error) => {
            console.log('_fetchCommentsList: ' + error);
            this.setState({loaded: true});
        });
    }

    render() {
        return (
            <View>
                <Header
                    title="最新评论"
                    leftIcon="ios-arrow-back"
                    leftTouchAction={()=>{this.props.navigator.pop()}}
                />
                {this.state.loaded ?
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        showsVerticalScrollIndicator={false}
                        style={{height: Common.window.height - Common.window.navigation_height}}
                    /> : <Loading />}
            </View>
        )
    }

    _renderRow(comment) {
        let date = comment.publish_at.split('T')[0];

        return (
            <TouchableOpacity
                style={styles.row}
                activeOpacity={0.75}
                onPress={() => {alert('row')}}
            >
                <Image
                    style={styles.headimg}
                    source={{uri: comment.headimg}}
                />
                <View style={styles.commentInfo}>
                    <Text style={styles.nickname}>{comment.nickname}</Text>
                    <Text style={styles.comment}>{comment.comment.trim()}</Text>
                    <Text style={styles.publish_at}>{date}</Text>
                    <TouchableOpacity
                        style={styles.like}
                        activeOpacity={0.75}
                        onPress={() => {alert('like')}}
                    >
                        <FontAwesome name="thumbs-o-up" size={15} color="gray" />
                        <Text style={styles.likeCount}>{comment.like}</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    row: {
        padding: 10,
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },

    headimg: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#ccc',
    },

    commentInfo: {
        marginLeft: 5,
    },

    nickname: {
        color: 'gray',
    },

    comment: {
        width: Common.window.width - 10 - 50 - 10 - 5,
        marginTop: 5,
        fontSize: 15,
    },

    publish_at: {
        marginTop: 5,
        color: 'gray',
        fontSize: 12,
    },

    like: {
        flexDirection: 'row',
        position: 'absolute',
        right: 10,
        bottom: 0,
    },

    likeCount: {
        marginLeft: 5,
        color: 'gray'
    }
})