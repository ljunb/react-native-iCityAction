/**
 * Created by ljunb on 16/5/9.
 * 新闻列表
 */
import React from 'react';
import Swiper from 'react-native-swiper';
import {
    Component,
    StyleSheet,
    Image,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class NewsList extends Component {

    render() {

        let {bannerDatas, newsList} = this.props;

        if (bannerDatas.length) {
            return (
                <Swiper>
                    {bannerDatas.map((category, i) => {
                        return (
                            <View style={styles.bannerContainer} key={i}>
                                <Image
                                    style={styles.bannerImage}
                                    source={{uri: category.image_list[0].src}}
                                >
                                    <View style={styles.bannerTitle}>
                                        <Text style={styles.titleFont}>{category.title}</Text>
                                    </View>
                                </Image>
                            </View>
                        )
                    })}
                </Swiper>
            )
        }

        return (
            <View>
                {newsList.map((category, i) => {
                    return (
                        <Text key={i}>{category.title}</Text>
                    )
                })}
            </View>

        )


    }
}

const styles = StyleSheet.create({
    bannerContainer: {
        height: 160,
    },

    bannerImage: {
        flex: 1,
        justifyContent: 'flex-end',
    },

    bannerTitle: {
        backgroundColor: 'rgba(131, 131, 131, 0.3)',
        height: 40,
        justifyContent: 'center',
    },

    titleFont: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    }
})