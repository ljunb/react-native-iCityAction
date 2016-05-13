/**
 * Created by ljunb on 16/5/13.
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
import Icon from 'react-native-vector-icons/Ionicons';
import Common from '../../common/Constants';

export default class DetailHeader extends Component {
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.titleContainer}>

                    <TouchableOpacity onPress={this.props.backAction}>
                        <View style={styles.backIcon}/>
                    </TouchableOpacity>

                    <Text style={styles.title}>都市频道</Text>

                    <TouchableOpacity onPress={this.props.moreAction}>
                        <Icon name="ios-more" size={30} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: Common.window.navigation_height,
        backgroundColor: Common.color.theme_color,
        paddingLeft: 15,
        paddingRight: 15,
    },

    titleContainer: {
        flexDirection: 'row',
        marginTop: 20,
        height: 44,
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    title: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },

    backIcon: {
        borderColor: 'white',
        borderLeftWidth: 2,
        borderBottomWidth: 2,
        transform: [{rotate: '45deg'}],
        width: 15,
        height: 15,
    }
})