/**
 * Created by ljunb on 16/5/17.
 * 视频Cell
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

import Common from '../../common/AppConstants';
import Video from 'react-native-video';

export default class VideoCell extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isPlaying: true,
        }
    }

    render() {

        let {category} = this.props;

        return (
            <TouchableOpacity
                style={styles.container}
                activeOpacity={0.8}
                onPress={this.props.touchAction}
            >
                <Image
                    style={styles.image}
                    source={{uri: category.image_list[0].src}}
                >
                    <Image style={styles.player} source={{uri: 'VKVideoPlayer_play_big'}}/>
                </Image>
                < Text style={styles.titleFont}>{category.title}</Text>

                <View style={styles.videoInfoContainer}>
                    <View style={styles.videoInfo}>
                        <Image style={styles.icon} source={{uri: 'video-duration'}}/>
                        <Text style={styles.infoTitleFont}>{category.info_ext.v_duration}</Text>
                    </View>
                    <View style={[styles.videoInfo, {marginLeft: 12}]}>
                        <Image style={styles.icon} source={{uri: 'video-played-times'}}/>
                        <Text style={styles.infoTitleFont}>{category.pv}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    _renderVideoPlayer(category) {
        return (
            <Video
                source={{uri: category.info_ext.v_src}}
                rate={1}
                volume={1}
                pasued={false}
                resizeMode="cover"
                style={styles.image}
            />
        )
    }

}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginLeft: 10,
        paddingBottom: 10,
        width: Common.window.width - 10 * 2,
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5,
    },

    image: {
        justifyContent: 'center',
        alignItems: 'center',
        width: Common.window.width - 10 * 2,
        height: 170,
    },

    player: {
        height: 48,
        width: 48,
    },

    titleFont: {
        marginTop: 12,
        fontSize: 16,
        fontWeight: 'bold',
    },

    videoInfoContainer: {
        flexDirection: 'row',
    },

    videoInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },

    infoTitleFont: {
        marginLeft: 4,
        color: '#ccc'
    },

    icon: {
        height: 16,
        width: 16
    }
})