/**
 * Created by ljunb on 16/5/16.
 * 视频页
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ListView,
    RefreshControl,
    InteractionManager
} from 'react-native';

import HttpTool from '../../common/Utils';
import Common from '../../common/AppConstants';
import Header from '../../components/common/Header';
import CategoryMenu from '../../components/menu/CategoryMenu';
import LoadingView from '../../components/common/Loading';
import VideoCell from '../../components/cells/VideoCell';
import VideoDetail from '../../pages/Video/VideoDetail';

export default class Video extends Component {

    constructor(props) {
        super(props);

        this._renderVideoList = this._renderVideoList.bind(this);

        this.state = {
            videoCategories: null,
            isLoadedCategory: false,
            isRefreshing: true,
            currentCategory: null,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 != row2,
            }),
        }
    }

    componentDidMount() {
        // 请求所有视频分类名称
        this._fetchVideoCategories();
    }

    // 获取所有视频分类
    _fetchVideoCategories() {

        HttpTool.get(Common.urls.video_categories, (response) => {

            let categories = response.item_list;

            this.setState({
                videoCategories: categories,
                isLoadedCategory: true,
                currentCategory: categories[0]
            }, function () {
                this._fetchVideoList();
            });


        }, (error) => {
            alert('_fetchVideoCategories: ' + error)
        });
    }

    // 请求列表数据
    _fetchVideoList() {

        let category = this.state.currentCategory;

// 已知问题: 后台返回的数据有id字段,当转为json时,将id进行了四舍五入,导致id出错,无法获取视频评论数据
        // 拼接新闻列表URL
        let listURL = Common.urls.video_list + '?sitecode=' + category.site_code + '&poscode=' + category.pos_code + '&catcode=' + category.code + '&older_than=&newer_than=&limit=20';

        HttpTool.get(listURL, (response) => {

            let videoList = response.item_list;

            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(videoList),
                isRefreshing: false,
            })

        }, (error) => {

            alert('_fetchVideoList: ' + error)
        })
    }

    render() {
        let Content = [
            <Header
                key={'header'}
                title="视频"
            />
        ];

        if (!this.state.isLoadedCategory) {
            Content.push(<LoadingView key={'loading'}/>)
        } else {
            Content.push(
                <CategoryMenu
                    key={'category_menu'}
                    categories={this.state.videoCategories}
                    fetchNewsList={(category) => {
                        this.setState({
                            currentCategory: category,
                            isRefreshing: true,
                        },  function() {
                            this._fetchVideoList();
                        });
                    }}
                />
            )
        }

        Content.push(
            <ListView
                key={'listView'}
                automaticallyAdjustContentInsets={false}
                dataSource={this.state.dataSource}
                renderRow={this._renderVideoList}
                style={{height: Common.window.news_listView_height}}
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._fetchVideoList.bind(this)}
                        title='Refresh...'
                    />
                }
            />
        )

        return (
            <View>
                {Content}
            </View>
        )
    }

    _renderVideoList(category) {
        return (
            <VideoCell category={category} touchAction={this._pushToDetailPage.bind(this, category)}/>
        )
    }

    _pushToDetailPage(category) {
        
        InteractionManager.runAfterInteractions(() => {
            this.props.navigator.push({
                component: VideoDetail,
                passProps: {
                    category: category,
                    id: category.id,
                }
            })
        });
    }
}