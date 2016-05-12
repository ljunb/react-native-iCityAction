/**
 * Created by ljunb on 16/5/9.
 * 新闻分类Item
 */
import React from 'react';
import {
    Component,
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
} from 'react-native';

export default class CategoryItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: false,
        }
    }

    render() {

        let selected = this.props.selected;
        let itemStyle = [styles.item];
        let itemTitle = [styles.title];

        // 当前为选中状态,添加marginTop处理边框宽度改变时,文本位置变化
        if (this.state.selected != selected) {
            itemStyle.push({borderBottomWidth: 2, borderBottomColor: 'red'});
            itemTitle.push({color: 'red', marginTop: 2})
        }

        return (
            <TouchableOpacity
                onPress={this.props.touchAction}
                disabled={this.props.selected}
                activeOpacity={1}
            >
                <View style={itemStyle}>
                    <Text style={itemTitle}>{this.props.category.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    item: {
        height: 40,
        paddingLeft: 12,
        paddingRight: 12,
        justifyContent: 'center',
    },

    title: {
        fontSize: 14,
    }
})