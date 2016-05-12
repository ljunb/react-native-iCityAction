/**
 * Created by ljunb on 16/5/12.
 * 新闻广告Cell
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Image,
    Text,
} from 'react-native';
import Common from '../../common/Constants';

export default class AdCell extends Component {

    render() {

        let {category} = this.props;
        let imageWidth = Common.window.width - Common.window.margin * 2;
        let imageStyle = {height: 150, width: imageWidth, marginTop: 5};

        return (
            <View style={styles.row}>
                <Text style={styles.titleFont}>{category.title}</Text>
                <Image style={imageStyle} source={{uri: category.image_list[0].src}}/>
            </View>
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
})
