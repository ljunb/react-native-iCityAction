/**
 * Created by ljunb on 16/5/16.
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    TextInput,
    View,
} from 'react-native';
import Common from '../../common/Constants';
import Icon from 'react-native-vector-icons/Ionicons';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            keywords: null,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Icon name="ios-search" size={15} color="gray"/>
                <TextInput
                    style={styles.textInput}
                    placeholder={this.props.placeholder}
                    onChangeText={(text)=>{
                        if (this.props.getKeywords) {
                            this.props.getKeywords(text);
                        }
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 7,
        marginBottom: 7,
        paddingLeft: 12,
        borderRadius: 5,
        backgroundColor: 'white',
        width: Common.window.width * .6,
    },

    textInput: {
        flex: 1,
        fontSize: 14,
        paddingLeft: 4,
        height: 30,
    }
})