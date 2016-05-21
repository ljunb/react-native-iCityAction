/**
 * Created by ljunb on 16/5/12.
 * 新闻列表左图右标题描述样式Cell
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
        let titleWidth = Common.window.width - 95 - Common.window.margin * 3;

        return (
            <TouchableOpacity onPress={this.props.touchAction}>
                <View style={styles.row}>
                    <Image
                        style={Common.style.newsSingleImage}
                        source={{uri: category.image_list[0].src}}
                    />
                    <View style={[styles.titleContainer, {width: titleWidth}]}>
                        <Text style={styles.titleFont} numberOfLines={1}>{category.title}</Text>
                        <Text style={styles.introFont} numberOfLines={2}>{category.intro}</Text>
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
        flexDirection: 'row',
        paddingTop: Common.window.margin,
        paddingBottom: Common.window.margin,
        marginLeft: Common.window.margin,
        marginRight: Common.window.margin,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgba(131, 131, 131, 0.6)'
    },

    titleContainer: {
        marginLeft: Common.window.margin,
    },

    titleFont: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    introFont: {
        color: 'gray',
        fontSize: 14,
        marginTop: 7.5,
    },

    pvContainer: {
        alignSelf: 'flex-end',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 7.5,
        right: 0,
    },

    pvFont: {
        color: 'gray',
        fontSize: 12,
        marginLeft: 4,
    }
})