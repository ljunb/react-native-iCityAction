/**
 * Created by ljunb on 16/5/12.
 * 新闻列表3图样式Cell
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableOpacity,
} from 'react-native';
import Common from '../../common/AppConstants';

export default class MultiImageCell extends Component {

    render() {

        let {category} = this.props;
        let imageCount = category.image_count;
        let margin = Common.window.margin;
        let imageWidth = (Common.window.width - (imageCount + 1) * margin) / imageCount;

        return (
            <TouchableOpacity onPress={this.props.touchAction}>
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
                    <View style={styles.pvContainer}>
                        <Image style={Common.style.pvImage} source={{uri: 'commentsIcon'}}/>
                        <Text style={styles.pvFont}>{category.pv}</Text>
                    </View>
                </View>
            </TouchableOpacity>
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

    titleFont: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    multiImageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 7.5
    },

    pvContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7.5
    },

    pvFont: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 4,
    }
})